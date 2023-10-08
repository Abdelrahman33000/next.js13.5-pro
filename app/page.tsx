
import Link from 'next/link'; 

export default function Home() {
  return (
   <main>
      <div> Home </div>

      <Link href="/users">Users</Link>
      <Link href="/users/new">Contact Us</Link>
      <Link href="/users/new/products">products</Link>
   </main>
  )
}
