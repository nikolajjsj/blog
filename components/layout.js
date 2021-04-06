import Head from 'next/head'
import styles from './layout.module.css'
import Header from './header.js'

export default function layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.js blog demo" />
      </Head>

      <Header />

      <main className={styles.main}>{children}</main>
    </>
  )
}
