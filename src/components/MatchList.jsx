import { db } from "../firebase-config";
import { doc, getDoc, collection } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import Match from "./Match";

const MatchList = ({ event }) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const getMatches = async () => {
            try {
                const docRef = doc(db, "eventswwe", event); 
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const matchList = data.Matches || [];
                    setMatches(matchList);
                    console.log("Matches:", matchList);
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
        <div>
            {matches.length > 0 && matches.map((elem) => {
                return <Match match={elem} />
            })}
        </div>
    );
};

export default MatchList
