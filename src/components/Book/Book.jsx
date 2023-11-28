import s from './Book.module.css';

export default function Book({ title, author, image}) {
    return(
        <div className={s.bookStyle}>
            <h1 className={s.title}>{title}</h1>
            <img className={s.bookCover} src={image} alt="capa do livro" />
        </div>
    )
}