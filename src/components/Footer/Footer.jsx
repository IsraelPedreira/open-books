import { useState } from "react"
import styles from "./Footer.module.css"

export function Footer({data, page, getBooks}) {

    function previous() {

        const newPage = page-1;
        sessionStorage.setItem("page", `${newPage}`);
        location.reload();
    }

    function next() {
        console.log(data);
        const newPage = page+1;
        sessionStorage.setItem("page", `${newPage}`);
        location.reload();
    }

    return (
        <footer className={styles.footer}>
            <section className={styles.pagination}>
                {data.previous ? (
                    <div 
                        className={styles.change}
                        onClick={previous}
                    >
                        &lt;
                    </div>
                ) : null}
                <div>{page}</div>
                {data.next ? (
                        <div 
                            className={styles.change}
                            onClick={next}
                        >
                            &gt;
                        </div>
                    ) : null}
            </section>

        </footer>
    )
}