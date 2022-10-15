import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const FETCH_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

type Book = {
  id: string,
  title: string
}

function App() {
  const { data: { books } = {} } = useQuery(FETCH_BOOKS);

  console.log(useQuery(FETCH_BOOKS));

  return <div>
    {books.map((book: Book) => {
      <div key={book.id}>{book.title}</div>
    })}
  </div>
}

export default App;
