import { Inter } from 'next/font/google'
import React from 'react'
import Head from 'next/head'
import Main from '@/components/Home'
import Aos from 'aos'
const inter = Inter({ subsets: ['latin'] })

export default function Home() { 
  React.useEffect(()=>{
  Aos.init({duration: 600});
})
  return (
    <div > 
        <Head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <title>Subly - Subscription</title>
            <meta name="keywords" content='web development, programming' />
            <link rel="shortcut icon" href="/logo.jpg" />
        </Head>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<Main/>
</div>)
}