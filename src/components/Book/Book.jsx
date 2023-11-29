import s from './Book.module.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

export default function Book({ title, author, image}) {
    return(
        <div className={s.bookStyle}>
            <h1 className={s.title}>{title}</h1>
            <img className={s.bookCover} src={image} alt="capa do livro" />
        </div>
    )
}