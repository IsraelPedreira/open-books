import s from './Book.module.css';
import 'react-loading-skeleton/dist/skeleton.css'
import PopUp from '../PopUp/PopUp';
import { useEffect, useState } from 'react';

export default function Book({ title, author, image}) {

  const [popUp, setPopUp] = useState(false);

    return(
        <>
            <div className={s.bookStyle} onClick={() => setPopUp(true)}>
                <h1 className={s.title}>{title}</h1>
                <img className={s.bookCover} src={image['image/jpeg']} alt="capa do livro" />
            </div>

            {popUp && <PopUp title={title} authors={author} image={image} closePopUp={() => setPopUp(false)} />}
        </>
        
    )
}