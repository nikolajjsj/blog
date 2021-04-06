import React from 'react'
import Link from 'next/link'
import styles from './blogCard.module.css'

export default function blogCard({ id, title, date, description, readTime }) {
  return (
    <Link href={`/posts/${id}`}>
      <article className={styles.blogcard}>
        <header>
          <h3 className={styles.blogcard__title}>
            <a rel="bookmark">{title}</a>
          </h3>
          <small className={styles.blogcard__small}>
            {date} - {readTime}
          </small>
        </header>
        <p className={styles.blogcard__description}>{description}</p>
      </article>
    </Link>
  )
}
