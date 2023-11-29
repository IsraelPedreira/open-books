import Book from './components/Book/Book'
import PageTittle from './components/PageTittle/PageTittle'
import SearchBar from './components/SearchBar/SearchBar'
import s from './App.module.css'
import testJSON from './test.json'
import { useState } from 'react'
import instance from './services/axios/axios'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function App() {
  const [books, setBooks] = useState([])
  
  const getBooks = async () => {
    const response = await instance.get('books?languages=pt&copyright=false')
    setBooks(response.data.results)

    
  }
  getBooks()

  function createSkeleton(){
    const skeletonArray = []
    for(let i = 0; i < 20; i++){
      skeletonArray.push(<Skeleton width={300} height={350}/>)
    }
    return skeletonArray
  }


  return (
   <>
    <PageTittle/>
    <SearchBar/>
  
    <div className={s.grid}>
      {

      }
      { !books[0] ?
        createSkeleton()
        :
          books.map((book, index) => {
          return <Book key={index} title={book.title} author={book.author} image={book.formats['image/jpeg']} />
        })}
    </div>
   </>
  )
}

export default App
