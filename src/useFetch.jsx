import { useEffect, useState } from 'react'
//import axios from 'axios'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json('cars'))
        .then(
        (result) => {
            setLoading(false);
            setData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            setLoading(false);
            setError(error);
        })
    }, [url])
    return { data, loading, error }
}


export default useFetch