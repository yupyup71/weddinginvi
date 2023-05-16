import { Weddingdate } from '@/components/date'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <main>
      <Weddingdate yearDate='2024年' monthDate='3月' dayDate='30日'></Weddingdate>
    </main>
  )



}
