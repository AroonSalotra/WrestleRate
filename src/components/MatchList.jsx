import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore/lite";
import { useEffect, useMemo, useState } from "react";
import Match from "./Match";
import Header from "./Header";

const slugify = s =>
  (s ?? "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

const MatchList = ({ event }) => {
  const [matches, setMatches] = useState([]);

  const eventId = useMemo(() => slugify(event), [event]);

  useEffect(() => {
    const getMatches = async () => {
      try {
        const docRef = doc(db, "eventswwe", event);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setMatches(data.Matches || []);
        } else {
          console.warn("No such document:", event);
          setMatches([]);
        }
      } catch (err) {
        console.error("Error fetching matches:", err);
      }
    };

    if (event) getMatches();
  }, [event]);

  return (
    <>
      <Header event={event} />
      <div>
        {matches.length > 0 &&
          matches.map((elem, idx) => (
            <Match
              key={`${eventId}-${idx}`}
              match={elem}
              eventId={eventId}
            />
          ))}
      </div>
    </>
  );
};

export default MatchList;
