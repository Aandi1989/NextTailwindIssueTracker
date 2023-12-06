import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route';
import coffee from '@/public/images/coffee.jpg';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className='relative h-screen'>
      <h1>Helo {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <Image src={coffee} alt='Coffee'/> */}
      
      {/* Картинка не из локальной папки, пример установки на background */}
      {/* <Image 
        src='https://teacode.io/wp-content/uploads/2022/06/Copy-of-AWS-Amplify-blog-compress.png' 
        alt='Coffee'
        fill  усли используем fill нужно задать родителю relative absolute or fixed
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" размеры влияют только на Next оптимизацию
        quality={100}
        priority отключает lazy-loading
      /> */}
    </main>
  )
}
