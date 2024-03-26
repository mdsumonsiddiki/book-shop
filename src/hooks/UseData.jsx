import { useEffect, useState } from "react";

const UseData = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('/public/books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    return {books}
};

export default UseData;