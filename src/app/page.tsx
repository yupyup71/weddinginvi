import { Coverphoto } from '@/components/coverphoto'
import { Weddingdate } from '@/components/date'
import { Secondtexts } from '@/components/secondtext'
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
      <section style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Secondtexts blah='서로가 마주보며 다져온 사랑을 이제 함께 한 곳을 바라보며 걸어갈 수 있는 큰 사랑으로 키우고자 합니다. 저희 두 사람이 사랑의 이름으로 지켜나갈 수 있도록 앞날을 축복해 주시면 감사하겠습니다.' 
        nameus1='빈센트 & 안의 아들'
        nameus2= '니콜라' 
        nameus3= '이동기 & 남숙영의 딸'
        nameus4= '이유빈'></Secondtexts>
      </section>
    </main>
  )



}
