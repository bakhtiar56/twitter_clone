import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
     <Head>
        <title>Twitter</title>
     </Head>
    
     <main className="bg-black flex  mx-auto ">
       <Sidebar />
        {/* Feed */}
         {/* Widgets */}

         {/* Modal */}

     </main>
    </div>
  )
}

export default Home
