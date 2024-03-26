import { useEffect } from "react";
import { useState } from "react";

const useApi = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('/books.json');
            const data = await res.json();
            setData(data)
        }
        fetchData();
    },[])
    return {data};
};

export default useApi;