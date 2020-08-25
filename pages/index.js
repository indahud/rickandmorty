import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {
  console.log(data)
  const { results: defaultResults = [] } = data
  const [results, updateResult ] = useState(defaultResults)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Wubba Lubba Dub Dub!
        </h1>

        <p className={styles.description}>
          Rick and Morty Wiki Characters
          
        </p>

        <ul className={styles.grid}>
          {results.map(result => {
            const {id, name, image } = result
            return(
              <li key={id} className={styles.card}> 
              <img src={image} alt={`${name} Thubmnail`}></img>  
              <h3>{name}</h3>
            </li>
            )
          })}  
          
         
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
