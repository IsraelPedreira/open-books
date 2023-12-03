import s from './PopUp.module.css';


export default function PopUp({ title, authors, image, closePopUp }) {
    
    return (
        <div className={s.modal}>
            <div className={s.modal_content}>
                <span className={s.close} onClick={closePopUp}>
                    &times;
                </span>
                <div className={s.book_infos}>
                    <h1>{title}</h1>
                    <div className={s.infos}>
                        <img className={s.image} src={image["image/jpeg"]}  alt="book cover" />
                        <div className={s.authors_container}>
                            <h3 className={s.authors_title}>Autores:</h3>
                            {authors?.map((author, index) => (
                                <p key={index}>{author.name}</p>
                            ))}  
                        </div>                    
                    </div>
                    
                <div className={s.downloadContainer}>
                    <a href={image["application/epub+zip"]} className={s.download}>EPUB</a>
                    <a href={image["application/x-mobipocket-ebook"]} className={s.download}>MOBI</a>
                    <a href={image["text/html"]} target='_blank' className={s.download}>HTML</a>
                </div>
                </div>
            </div>
        </div>
    );
}