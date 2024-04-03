import React, { useRef, useState } from 'react'

function App1() {
    const [hour,setHour]=useState('00');
    const [min,setMin]=useState('00');
    const [sec,setSec]=useState('00');
    const [toggle,setToggle]=useState(false);
    const a=useRef();
    function handleReset()
    {
     setHour('00')
     setMin('00')
     setSec('00')
     clearInterval(a.current)
    }

    function handleStart()
    {
        console.log(sec)
        let h=hour.trim()===""?0:parseInt(hour);
        let m=min.trim()===""?0:parseInt(min);
        let s=sec.trim()===""?0:parseInt(sec);
        let total=h*60*60+m*60+s;
        a.current=setInterval(()=>{
            if(total>0){
                setToggle(true);
            total=total-1;}
            if(total<=0)
            {clearInterval(a.current);
                setToggle(false)
            }
           setHour(String(Math.floor(total/(60*60))===0?'00':Math.floor(total/(60*60))).padStart(2,'0'))
            setMin(String(Math.floor((total%(60*60))/60)==0?'00':Math.floor((total%(60*60))/60)).padStart(2,'0'))
            setSec(String(Math.floor((total%(60)))==0?'00':Math.floor((total%(60)))).padStart(2,'0'))
        },1000)
    }
    function handleStop()
    {
        console.log("ehllo")
    clearInterval(a.current);
    setToggle(false);
    }
  return (
    <div className='w-screen bg-gray-400  h-screen grid place-content-center'>
        <div className=' bg-white flex flex-col shadow-2xl  gap-y-5  p-10 sm:p-28  rounded-md  items-center'>
            <h1 className='text-[30px] font-bold'>Stop Watch</h1>
    <div className='flex items-center gap-2'>
        <div className='flex flex-col'>
     <input type="number" onChange={(e)=>setHour(e.target.value)} value={hour}  className=' text-center text-[24px]  border-b-2 border-black w-[30px] ' />
     </div>
     <p className=' font-bold'>:</p>
        <div className='flex flex-col'>
     <input type="number" onChange={(e)=>setMin(e.target.value)} value={min} className=' text-center text-[24px] border-b-2 border-black w-[30px] '  />
     </div>
     <p className=' font-bold'>:</p>
        <div className='flex flex-col'>
     <input type="number" onChange={(e)=>setSec(e.target.value)} value={sec} className=' text-center text-[24px] border-b-2 border-black w-[30px] '  />
     </div>
    </div>
    <div className=' flex justify-around text-white mt-5 gap-3'>
    <button onClick={!toggle?handleStart:handleStop} className=' px-2 py-1 text-[24px] rounded-md bg-green-500'>{!toggle?"Start":"Stop"}</button>
    <button onClick={handleReset} className='  px-2 py-1 text-[24px] rounded-md bg-red-500'>Reset</button>
    </div>
    </div>
    </div>
  )
}

export default App1
