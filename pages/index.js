import { Inter } from 'next/font/google'
import React from 'react'
import Main from '@/components/Home'
import Aos from 'aos'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  })
  return (
    <Main />)
}