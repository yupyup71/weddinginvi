import { Coverphoto } from '@/components/coverphoto'
import { Weddingdate } from '@/components/date'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <main>
      <section style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Weddingdate yearDate='2024年' monthDate='3月' dayDate='30日'></Weddingdate>
        <Coverphoto coverPhoto='/KakaoTalk_2.jpg' />
      </section>
    </main>
  )



}
