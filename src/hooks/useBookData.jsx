import { useEffect, useState } from "react";

const useBookData = () => {
    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        const fetchData = async ()=>{
            const res = await fetch('../books.json');
            const data = await res.json();
            setData(data);
            setLoading(false)
        }
        fetchData()
    },[])
    return {data, loading}
};

export default useBookData;