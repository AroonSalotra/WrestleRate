import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore/lite";
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [events, setEvents] = useState([]);

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
        <div className="nav-container">
            <nav className="nav-list">
                <NavLink className="nav-item" key="home" to={"/"}>
                    Home
                </NavLink>
                {events.length > 0 && events.map(({ id }) => {
                    return <NavLink
                        className="nav-item"
                        key={id}
                        to={id.toLowerCase().replace(/\s+/g, '')}
                    >
                        {id}
                    </NavLink>
                })}
            </nav>
        </div>
    )
}

export default Navbar