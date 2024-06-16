import React from 'react'
import { useParams } from 'react-router-dom';
import { books } from "../Constant";
export default function MainBook() {
  let params = useParams();
  let mainBookDatas = books.find(book => book.id == params.bookID)
  return (
    <div>
      {mainBookDatas.name}
    </div>
  )
}
