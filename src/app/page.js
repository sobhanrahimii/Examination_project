import Image from 'next/image'
import Posts from '@/componets/post/Posts'
import HomePage from '@/componets/home/Home'

export default function Home() {
  return (
   <div>
      <HomePage />
      <Posts/>
   </div>
  )
}
