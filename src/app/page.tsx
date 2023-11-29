"use client";
import Image from 'next/image'
import React, { useState } from "react"

// const [mySkillButton, setMySkillButton]= useState(false);
// console.log(mySkillButton)
export default function Home() {
  const [mySkillButton, setMySkillButton] = useState("A");
  console.log("ค่าตัวแปร: " + mySkillButton)
  const handleMySkillButton = (param: any) => {
    setMySkillButton(param)
    console.log(param)
    console.log("ตัวแปร: " + mySkillButton)
  }

  return (
    <main className="min-h-screen scroll-smooth">

      <div className='flex fixed items-center justify-between p-[30px]  w-full h-[42px] bg-secondary '>
        <div className='p-[30px] cursor-pointer font-bold italic text-[28px] z-50 text-textPrimary'>WORRAWAT</div>
        <div className=' '>
          <ul className='list-none'>
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey text-textPrimary' href="#section1">
                Home
              </a>
            </li>
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey text-textPrimary' href="#section2">
                About
              </a>
            </li>
            <li className='inline-block p-[20px] transition-all hover:bg-grey '>
              <a className='transition-all hover:bg-grey text-textPrimary' href="#section3">
                Section 3
              </a>
            </li>
          </ul>
        </div>
      </div>


      <section id="section1" className='flex items-center justify-center w-full h-[738px]  bg-[url(/preprofile.png)]  bg-center '>
        <h1 className='text-white text-[30px] font-extralight text-center'>Welcome to <br /> <p className='text-white text-[30px] font-extrabold '>My Digital Portfolio</p></h1>


      </section>

      <section id="section2" className='flex  items-center w-full h-[738px] bg-secondary '>
        <div className='flex items-center justify-center  w-full h-[738px] '>
          <div className=' w-[500px] h-[500px] pl-20 pt-20 '>
            <h1 className='text-black font-semibold italic text-[23px]'>Hello!<br /> I’m soda<br /> I Need To Be A  Software Developer</h1>
            <p className='text-grey-300 text-[18px]'><br />I’m a person who is going to develop and maintain software solutions, utilizing programming languages and engineering principles throughout the development process.</p>
            <div className='flex  h-[50px] w-[400px] mt-[85px]   '>
              <p className=' text-[14px]'><br />Follow Me </p>
              <div className='bg-black h-[5px] w-[25px] ml-[15px] mt-[31px] '></div>
              <Image className='ml-[10px]'
              src="/ig icon.png"
              width={45}
              height={45}

              alt="Picture of the author"
            />
              <Image className=' mb-[2px]'
              src="/fb icon.png"
              width={45}
              height={45}

              alt="Picture of the author"
            />
             
            </div>
          </div>

          <div className='flex items-center justify-center w-[500px] h-[500px] overflow-hidden ml-[20px]'>
          <Image className='  '
              src="/profile.png"
              width={333}
              height={333}

              alt="Picture of the author"
            />
          </div>
        </div>
      </section>

      <section id="section3" className=' w-full min-h-[738px] bg-primary pt-[100px] p-[30px]'>


        <div className='flex justify-center  h-[80px] w-full'>
        {mySkillButton == "A" ? (<>
          <button className='text-primary w-[114px] h-[40px] bg-activebutton m-[10px] ' onClick={(e) => handleMySkillButton("A")}> A </button>
        
        </>) : 
        (<>
         <button className='text-primary w-[114px] h-[40px] bg-secondary m-[10px] ' onClick={(e) => handleMySkillButton("A")}> A </button>
        </>)}
        {mySkillButton == "B" ? (<>
          <button className='text-primary w-[114px] h-[40px] bg-activebutton m-[10px] ' onClick={(e) => handleMySkillButton("B")}> B </button>
        
        </>) : 
        (<>
         <button className='text-primary w-[114px] h-[40px] bg-secondary m-[10px] ' onClick={(e) => handleMySkillButton("B")}> B </button>
        </>)}
          {/* <button className='text-primary w-[114px] h-[40px] bg-secondary m-[10px] ' onClick={(e) => handleMySkillButton("A")}> A </button> */}
          {/* <button className='text-primary w-[114px] h-[40px] bg-secondary m-[10px]' onClick={(e) => handleMySkillButton("B")}> B </button> */}
        </div>
        {mySkillButton == "A" ? (<>
          <div className='bg-yellow-200 w-full h-[700px]'>
            <p></p>
          </div>
        </>) : (<></>)}
        {mySkillButton == "B" ? (<>
        <div className='bg-green-200 w-full h-[500px]'>
            <p></p>
        </div>
        </>) : (<></>)}



      </section>




    </main>
  )
}
