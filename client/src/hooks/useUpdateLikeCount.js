import { useState } from "react";

export const useUpdateLikeCount = () => {
    const [error, setError] = useState(null);

    const updateLikeCount = async (id, count) => {
        setError(null);
        console.log("Updating like count:", id, count);

        const response = await fetch("/api/arts/updatelike", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({ id, count })
        });
        const json = await response.json();

        if(!response.ok) {
            console.log("error updating image liked count");
            setError(json.error);
        } else {
            console.log("successfully updated image liked to", count);
            localStorage.setItem(`img-likecount-${id}`, JSON.stringify(count));
        }
    }

    return { updateLikeCount, error };
}