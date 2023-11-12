import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141C2C]">
      <h1 className='text-[#FFE500]'>Hello</h1>

      <div className='flex justify-center items-center w-full h-[100px] bg-red-100'>
        <div className='flex justify-center items-center bg-gray-200 w-[50px] h-[50px]'>A</div>
        <div className='flex justify-center items-center bg-gray-400 w-[50px] h-[50px]'>B</div>
      </div>

      <div className='w-full h-[100px] bg-red-300'>
        <button className='w-[114px] h-[40px] bg-white rounded-[60px] text-[14px]'>Click Me!</button>
      </div>
      <div className='flex justify-center items-center w-full h-[100px] bg-red-400 '>
        <div className='flex justify-center items-center  w-[50px] h-[50px]'>A</div>
        <div className='flex justify-center items-center bg-gray-400 w-[50px] h-[50px]'>B</div>
      </div>


    </main>
  )
}
