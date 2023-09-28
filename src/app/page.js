import NavBar from '@/components/NavBar/NavBar'
import Hero from '@/components/Hero/Hero'


export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center'> 
      <NavBar />
      <Hero />
    </main>
  )
}
