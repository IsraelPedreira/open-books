import React from 'react'
import s from './PageTittle.module.css';


export default function PageTittle() {
  return (
    <div className={s.PageTittleContainer}>
      <a className={s.title} href='/'>
        <h1 className={s.PageTittle}>OPEN BOOKS</h1>
      </a>
    </div>
  )
}
