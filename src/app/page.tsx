"use client";
import Image from 'next/image'
import React  , { useState } from "react"

// const [mySkillButton, setMySkillButton]= useState(false);
// console.log(mySkillButton)
export default function Home() {
  const [mySkillButton, setMySkillButton]= useState("A");
  console.log("ค่าตัวแปร: "+mySkillButton)
  const handleMySkillButton = (param:any) => {
    setMySkillButton(param)
    console.log(param)
    console.log("ตัวแปร: "+mySkillButton)
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
        <h1 className='text-white text-[30px] font-extralight'>Welcome to </h1><br />
        <p className='text-white text-[30px] font-extrabold '>My Digital Portfolio</p>

      </section>

      <section id="section2" className='flex items-center justify-center w-full h-[738px] bg-secondary '>
        <p className='text-[30px] '>Introduce Youself</p>
      </section>

      <section id="section3" className='flex items-center justify-center w-full h-[738px] bg-primary'>
        
        <button className='text-primary w-[114px] h-[40px] bg-secondary m-[10px]' onClick={(e)=>handleMySkillButton("A")}> A </button>
        <button className='text-primary w-[114px] h-[40px] bg-secondary m-[10px]' onClick={(e)=>handleMySkillButton("B")}> B </button>
        {mySkillButton == "A"? (<><div className='w-[500px] h-[500px] bg-red-300'><p></p></div></>):(<></>)}
        {mySkillButton == "B"? (<><div className='w-[50px] h-[50px] bg-red-500'></div></>):(<></>)}
      </section>



    </main>
  )
}
