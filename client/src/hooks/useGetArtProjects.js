import { useState } from "react";

export const useGetArtProjects = () => {
    const [error, setError] = useState(null);

    const getart = async (artist, category, year) => {
        console.log(artist, category, year);
        setError(null);

        const params = { artist: artist, category: category, year: year };
        
        const response = await fetch(`/api/arts/getart?${new URLSearchParams(params)}`);
        const json = await response.json();

        if (response.ok) {
            console.log(json);
            localStorage.setItem("artProjects", JSON.stringify(json));
        } else {
            console.log("erorr happened");
            setError(json.error);
        }
    }

    return { getart, error };
}