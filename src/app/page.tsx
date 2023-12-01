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
                width={40}
                height={35}

                alt="Picture of the author"
              />
              <Image className=' mb-[2px]'
                src="/fb icon.png"
                width={40}
                height={60}

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

        </div>
        {mySkillButton == "A" ? (<>
          <div className='flex items-center justify-center  w-full h-[350px]   '>
            <div className='flex  w-[500px] h-[120px] -mt-[150px] '>
              <Image className=' '
                src="/pyth icon.png"
                width={120}
                height={120}

                alt="Picture of the author"
              />
              <h1 className='text-secondary text-[22px] font-semibold ml-5'>PYTHON
                <p className=' text-grey text-[16px] font-normal'>
                  <br />Now, I am able to write code for Data Visualization, Data Preparation, and Machine Learning using Python, along with basic Python coding skills.
                </p>
              </h1>

            </div>

            <div className='flex  w-[500px] h-[120px] -mt-[150px] ml-20 '>
              <Image className='-ml-[80px] '
                src="/HTML icon.png"
                width={240}
                height={120}

                alt="Picture of the author"
              />
              <h1 className='text-secondary text-[22px] font-semibold ml-5'>HTML
                <p className=' text-grey text-[16px] font-normal'>
                  <br />I am able to write HTML code to create a basic website and decorate it with CSS to make it beautiful and usable.
                </p>
              </h1>
            </div>
          </div>
          <div className='flex items-center justify-center  w-full h-[350px] -mt-10 '>
            <div className='flex  w-[500px] h-[120px] -mt-[300px] '>
              <Image className=' '
                src="/pyth icon.png"
                width={120}
                height={120}

                alt="Picture of the author"
              />
              <h1 className='text-secondary text-[22px] font-semibold ml-5'>PYTHON
                <p className=' text-grey text-[16px] font-normal'>
                  <br />Now, I am able to write code for Data Visualization, Data Preparation, and Machine Learning using Python, along with basic Python coding skills.
                </p>
              </h1>

            </div>

            <div className='flex  w-[500px] h-[120px] bg-red -mt-[300px] ml-20 '>
              <Image className=' '
                src="/pyth icon.png"
                width={120}
                height={120}

                alt="Picture of the author"
              />
              <h1 className='text-secondary text-[22px] font-semibold ml-5'>PYTHON
                <p className=' text-grey text-[16px] font-normal'>
                  <br />Now, I am able to write code for Data Visualization, Data Preparation, and Machine Learning using Python, along with basic Python coding skills.
                </p>
              </h1>
            </div>
          </div>

        </>) : (<></>)}
        {mySkillButton == "B" ? (<>
          <div className='flex items-center justify-center  w-full h-[400px]'>
            <div className='flex w-[560x] h-[400px] '>
              <Image className='-ml-20  '
                src="/cer img.png"
                width={560}
                height={320}

                alt="Picture of the author"
              />
              <p className='pl-10 pt-10 text-white text-[16px]'> dasdasdddddddddddddddddddddddddddddddddddddddd</p>
            </div>

          </div>
          <div className='flex items-center justify-center  w-full h-[400px] mt-20'>
            <div className='flex w-[560x] h-[400px] '>
              <div className='w-[560px] h-[400px] pl-20'>
                <p className='pr-20 pt-10 text-white text-[16px]'> dasdasdddddddddddddddddddddddddddddddddddddddd</p>
              </div>
              <div className='pl-10'>
                <Image className='  '

                  src="/cer img.png"
                  width={560}
                  height={320}

                  alt="Picture of the author"
                />
              </div>
            </div>

          </div>
        </>) : (<></>)}



      </section>

      <footer className='flex items-center justify-center w-full h-[200px] bg-black '>
          <p className='text-secondary text-[26px] font-extralight'>Copy Right 2023 © By Soda</p>
          
      </footer>


    </main>
  )
}
