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


      <section id="section1" className='flex items-center justify-center w-full h-[738px] bg-[#141C2C] bg-[url(/preprofile.png)] bg-cover '>
        <p className='text-white text-[30px]'>Add image and welcome to My Portfolio</p>
        
      </section>

      <section id="section2" className='flex items-center justify-center w-full h-[738px] bg-white '>
        <p className='text-[30px]'>Introduce Youself</p>
        </section>

      <section id="section3" className='flex items-center justify-center w-full h-[738px] bg-[#141C2C]'>
        <p className='text-white text-[30px]'>My skill</p>
        </section>



    </main>
  )
}
