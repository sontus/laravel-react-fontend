import Axios from 'axios';
import React, { useState,useEffect } from 'react'

export const Books = () => {
    const [bookList, setBookList] = useState('');
    const url = "http://127.0.0.1:8000/api/book-list";

    useEffect(() => {
        getAllBooks();
    },[]);



    const getAllBooks = () => {
        Axios.get(url)
        .then((response) => {
            const allBooks = response.data;
            console.log(allBooks);
            setBookList(allBooks);
        })
        .catch(error => console.error(`Error : ${error}`));
    }
  return (
    <div>
        <div>

        </div>
    </div>
  )
}
