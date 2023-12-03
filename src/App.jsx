import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import instance from './services/axios/axios';
import Skeleton from 'react-loading-skeleton';
import Book from './components/Book/Book';
import PageTittle from './components/PageTittle/PageTittle';
import SearchBar from './components/SearchBar/SearchBar';
import PopUp from './components/PopUp/PopUp';

function App() {
  const [books, setBooks] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [bookInfos, setBookInfos] = useState({});
  const [query, setQuery] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  const getBooks = async () => {
    if (query === '') {
      const response = await instance.get('books?languages=pt&copyright=false');
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

  useEffect(() => {
    getBooks();
  }, []);

  function createSkeleton() {
    const skeletonArray = [];
    for (let i = 0; i < 20; i++) {
      skeletonArray.push(<Skeleton key={i} width={300} height={350} />);
    }
    return skeletonArray;
  }


  // function handleOpenPopUp(title, authors, formats) {
  //   console.log(title, authors, formats)
  //   setBookInfos({ title, authors, formats });
  //   console.log(bookInfos)
  //   setPopUp(true);
  // }



  function handleOpenPopUp(title, authors, formats) {
    setBookInfos({ title, authors, formats });
  }

  useEffect(() => {
    // Este useEffect será acionado sempre que bookInfos for atualizado
    if (Object.keys(bookInfos).length > 0) {
      console.log('foi aqui', bookInfos)
      setPopUp(true);
    }
  }, [bookInfos]);

  function closePopUp() {
    setPopUp(false);
  }

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
              <button
                key={index}
                onClick={() => handleOpenPopUp(book.title, book.authors, book.formats)}
                className={s.bookButton}
              >
                <Book key={index} title={book.title} author={book.author} image={book.formats['image/jpeg']} />
              </button>
            ))}
      </div>

      {popUp && <PopUp title={bookInfos.title} authors={bookInfos.authors} downloadAndImage={bookInfos.formats} closePopUp={closePopUp} />}
    </>
  );
}

export default App;
