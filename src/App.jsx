import Book from './components/Book/Book'
import s from './App.module.css'
import testJSON from './test.json'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log(testJSON)
  },  [])
  return (
    <div className={s.grid}>
      {testJSON.results.map((book, index) => {
        return <Book key={index} title={book.title} author={book.author} image={book.formats['image/jpeg']} />
      })}
    </div>

  )
}

export default App
