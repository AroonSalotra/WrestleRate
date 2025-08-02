import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore/lite";
import { useState, useEffect } from "react";

const Event = (props) => {

    const { eventName } = props;

    return (
        <p>
            event page:{eventName}
        </p>
    )

}

export default Event