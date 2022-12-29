import { useState } from "react";

export const useGetOneProject = () => {
    const [error, setError] = useState(null);

    const getOneProject = async (id) => {
        setError(null);

        const params = { param1: id };

        const response = await fetch(`/api/arts/getone?${new URLSearchParams(params)}`);
        const json = await response.json();

        if (response.ok) {
            // console.log("successfully got single project", id);
            if (json[0].likecount === 0.5) {
                json[0].likecount = 0;
            }
            localStorage.setItem("fetchedProject", JSON.stringify(json));
        } else {
            console.log("error getting single project");
            setError(json.error);
        }
    
    }

    return { getOneProject, error };
}