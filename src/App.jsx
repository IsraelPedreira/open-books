import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import instance from './services/axios/axios';
import Skeleton from 'react-loading-skeleton';
import Book from './components/Book/Book';
import PageTittle from './components/PageTittle/PageTittle';
import SearchBar from './components/SearchBar/SearchBar';
import { Footer } from './components/Footer/Footer';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [page, setPage] = useState(null);
  const [searchMessage, setSearchMessage] = useState('');

  const getBooks = async () => {
    if (query === '') {
      console.log(page);
      const response = await instance.get(`books?languages=pt&copyright=false&page=${page}`);

      setData(response.data);
      setBooks(response.data.results);
      setSearchMessage('');
    } else {
      setBooks([]);
      const encoded = encodeURIComponent(query);
      console.log(encoded);
      const response = await instance.get(`books?languages=pt&copyright=false&search=${encoded}`);

      if (response.data.results.length === 0) {
        setSearchMessage('No results found for the given query.');
      } else {
        setBooks(response.data.results);
        setSearchMessage(''); 
      }
    }
  };


  function createSkeleton() {
    const skeletonArray = [];
    for (let i = 0; i < 20; i++) {
      skeletonArray.push(<Skeleton key={i} width={300} height={350} />);
    }
    return skeletonArray;
  }

  useEffect(() => {
    if (sessionStorage.getItem("page")) {
      console.log(sessionStorage.getItem("page"));
      setPage(Number(sessionStorage.getItem("page")));
    } else {
      setPage(1);
    }
  }, []);

  useEffect(() => {
    getBooks();
  }, [page]);

  return (
    <>
      <PageTittle />
      <SearchBar setAppQuery={setQuery} onQuery={getBooks} />
      <div className={s.searchMessage}>
        {searchMessage && <p>{searchMessage}</p>}
      </div>
      <div className={s.grid}>
        {books.length === 0
          ? createSkeleton()
          : books.map((book, index) => (
                <Book key={index} title={book.title} author={book.authors} image={book.formats} />
            ))}
      </div>
      {data ? <Footer data={data} page={page} getBooks={getBooks}/> : null}
    </>
  );
}

export default App;
