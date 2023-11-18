import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">

      <div className='flex fixed place-items-center justify-between p-[30px]  w-full h-[42px] bg-white '>
        <div className='p-[30px] cursor-pointer font-bold italic text-[28px]'>WORRAWAT</div>
        <nav className=' '>
          <ul className='list-none'>  
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey' href="#section1">
                Home
              </a>
            </li>
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey' href="#section2">
                About
              </a>
            </li>
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey' href="#section3">
                Section 3
              </a>
            </li>
          </ul>
        </nav>
      </div>


      <section id="section1" className='flex items-center justify-center w-full h-[738px] bg-red-100'>
        <Image className=''
          src="/section1.jpg"
          alt="section1"
          width={500}
          height={500}
        />
      </section>

      <section id="section2" className='flex items-center justify-center w-full h-[738px] bg-white'>2</section>

      <section id="section3" className='flex items-center justify-center w-full h-[738px] bg-[#141C2C]'>3</section>



    </main>
  )
}
