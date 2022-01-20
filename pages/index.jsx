import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className='bg-[#ebebeb] h-screen' >
      <Head>
        <title>Mercado Libre Clone - GalfreValentin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      
      <main>
        <Header />
        <Main />
      </main>
      

    </div>
  )
}