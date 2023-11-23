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
        <div className='grid grid-cols-3  grid-rows-2 '>
          <div className=' '>
              <h1 className='  font-semibold text-[24px] italic '>Hello!<br /> I’m soda<br /> i need to be a  Software Developer</h1>
              <p className='  text-[16px] text-grey '><br />I’m a person who is going to develop and maintain software solutions, utilizing programming languages and engineering principles throughout the development process.</p>
          </div>
          
            <div className='grid grid-cols-3  grid-rows-2'>
            <Image
          src="/profile.png"
          width={2000}
          height={2000}
          alt="Picture of the author"
            />
            </div>
        </div>
      </section>

      <section id="section3" className='flex items-center justify-center w-full h-[738px] bg-primary'>

        <div className='flex  items-center   p-[30px]  w-full h-[42px] bg-primary '>

          <button className='text-primary w-[114px] h-[40px] bg-secondary m-[10px] ' onClick={(e) => handleMySkillButton("A")}> A </button>
          <button className='text-primary w-[114px] h-[40px] bg-secondary m-[10px]' onClick={(e) => handleMySkillButton("B")}> B </button>
          {mySkillButton == "A" ? (<><div className=''><p></p></div></>) : (<></>)}
          {mySkillButton == "B" ? (<><div className=''></div></>) : (<></>)}

        </div>

      </section>



    </main>
  )
}
