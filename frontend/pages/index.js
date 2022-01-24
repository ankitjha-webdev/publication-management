import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="Description" CONTENT="Author: Ankit Kumar. Author, Category: Research Paper Publication, Length: 784 pages" />
        <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
        <title>Home - Publication Management</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className={styles.main}>

        <h1>Hello, I am Next.js</h1>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
