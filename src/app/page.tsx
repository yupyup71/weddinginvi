import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='test'>click me daddy</Link>
    </main>
  )
}
