import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '@/components/Home'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <title>Subly - Subscription</title>
            <meta name="keywords" content='web development, programming' />
            <link rel="shortcut icon" href="/logo.jpg" />
        </Head>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
  AOS.init();
</script>
<Main />
</div>)
}