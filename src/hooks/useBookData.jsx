import { useEffect, useState } from "react";

const useBookData = () => {
    const [data , setData] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('../books.json');
            const data = await res.json();
            setData(data);
        }
        fetchData()
    },[])
    return {data}
};

export default useBookData;