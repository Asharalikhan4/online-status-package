import { useEffect, useState } from "react";

function OnlineStatus(){

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline",() => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    },[]);

    return onlineStatus;
};

module.exports = OnlineStatus;