import { useEffect, useState } from 'react'
//import axios from 'axios'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   
     useEffect(() => {
         setLoading(true)
         getMyData(url)
         //LoadData(url)
         //const Data = LoadData(url).then(data => setData(data));
     }, [url])


    const LoadData = async (url) => {
        setLoading(true)
        try {
          const res = await fetch(url);
          const data = await res.json('cars');
         // const final = await data.result
          console.log('fetch complete', data)
          setLoading(false)
          setData(data);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(err);
        }
      };
    //const Data = LoadData().then(data => setData(data));

    // const promisyFetch = (url, options) =>
    //     new Promise((resolve, reject) => {
    //     fetch(url, options)
    //         .then((response) => response.json('cars'))
    //         .then((result) => resolve(result))
    //         .catch((error) => reject(error))
    // });

    // const foo = async()=>{
    //     try {
    //         const result = await promisyFetch('url') //requestOptions)
    //         setLoading(false)
    //         setData(result)
    //         console.log(result)
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false);
    //         setError(error);
    //     }
    //     }

    async function getMyData(url) {
        try{
            const returnMyData = await fetch(url)
            .then(res => res.json('cars'))
            .then((result) => {
                setLoading(false)
                console.log(typeof result)
                setData(result)
            })
        } catch(err) {
            setLoading(false);
            setError(error);
        }
    }


return { data, loading, error }
}
export default useFetch