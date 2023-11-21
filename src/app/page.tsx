import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">

      <div className='flex fixed items-center justify-between p-[30px]  w-full h-[42px] bg-white z-40'>
        <div className='p-[30px] cursor-pointer font-bold italic text-[28px] z-50 text-black'>WORRAWAT</div>
        <div className='z-50 '>
          <ul className='list-none'>
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey text-black' href="#section1">
                Home
              </a>
            </li>
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey text-black' href="#section2">
                About
              </a>
            </li>
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey text-black' href="#section3">
                Section 3
              </a>
            </li>
          </ul>
        </div>
      </div>


      <section id="section1" className='flex items-center justify-center w-full h-[738px] bg-[#141C2C] bg-[url(/preprofile.png)] bg-cover '>
        <h1 className='text-white text-[30px] font-extralight'>Welcome to </h1><br />
        <p className='text-white text-[30px] font-extrabold '>My Digital Portfolio</p>

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
