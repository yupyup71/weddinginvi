import { Coverphoto } from '@/components/coverphoto'
import { Weddingdate } from '@/components/date'
import { Texts } from '@/components/texts'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <main>
      <section style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Weddingdate yearDate='2024年' monthDate='3月' dayDate='30日' />
        <Coverphoto coverPhoto='/KakaoTalk_2.jpg' />
        <Texts textyouWant="니콜라&이유빈" weddingtime="토요일 오후 3시" place="서울 어딘가에서"/>
      </section>
    </main>
  )



}
