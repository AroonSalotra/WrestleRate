import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore/lite";
import { useState, useEffect } from "react";

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEvents = async () => {
            const colRef = collection(db, "eventswwe")
            const snap = await getDocs(colRef)

            const eventList = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setEvents(eventList)
        }

        getEvents()
    }, [])

    return (
          <div>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <div key={index}>
                        <h2>{event.id}</h2>
                    </div>
                ))
            ) : (
                <p>No events found.</p>
            )}
        </div>

    )

}

export default Events