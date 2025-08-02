import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase-config";
import MatchList from "./MatchList";

const EventList = () => {

    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState("")

    const handleClick = (eventName) => {
        setSelectedEvent(eventName)
    }

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

    useEffect(() => {
        // console.log(events)
    }, [events])

    return (
        <>
            <div className="events-container">
                {events.length > 0 && events.map(({ id }) => {
                    return <button
                        key={id.toLowerCase().replace(/\s+/g, '')}
                        onClick={() => handleClick(id)}
                    >
                        {id}
                    </button>
                })}
            </div>
            <MatchList event={selectedEvent} />
        </>
    )

}

export default EventList