import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route';
import coffee from '@/public/images/coffee.jpg';
import localFont from 'next/font/local';
import "./globals.css";

const poppins = localFont({
  src:'../public/fonts/poppins-regular-webfont.woff2',
  variable: '--font-poppins'
})

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className='relative h-screen'>

      <h1 className={`${poppins.variable} text-xl`}>Hello {session && <span>{session.user!.name}</span>}</h1>
      {/* c variable не работает */}

      <h1 className={`${poppins.className} text-4xl`}>Hello {session && <span>{session.user!.name}</span>}</h1>
      {/* так работает */}
      
      <h1 className='font-poppins'>This font doesnot work.</h1>
      {/* странно но таким способом font poppins не примениться к h1 и не перетрет roboto*/}
       
      
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
