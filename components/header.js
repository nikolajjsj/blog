import Link from 'next/link'
import styles from './header.module.css'

export default function header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <h1 className={styles.header__title}>[blog] Nikolaj Jensen.</h1>
        </Link>
      </div>
    </header>
  )
}
