import React from 'react'
import { Link } from 'react-router-dom';

function Dash() {
  return (
    <div className="w-[1280px] h-[832px] relative ">
  {/* <div className="w-[1280px] h-[843px] left-0 top-[-11px] absolute"> */}
    {/* <div className="w-[1280px] h-[832px] left-0 top-[11px] absolute bg-gradient-to-b from-neutral-800 to-slate-600" /> */}
    {/* <img className="w-[1280px] h-[841px] left-0 top-0 absolute mix-blend-lighten" src="https://via.placeholder.com/1280x841" /> */}
  {/* </div> */}
  <div className="left-[42px] top-[38px] absolute text-orange-500 text-[25px] font-bold font-['DM Sans']"><Link to="/nav">back to home</Link></div>
  <div className="left-[60px] top-[107px] absolute text-orange-500 text-7xl font-bold font-['DM Sans']">Add new BLOG</div>
  <div className='left-[60px] top-[201px] w-[100vw] flex flex-wrap gap-20 absolute '>
    <div className="w-[650px] h-[592px]  flex flex-wrap p-3 bg-[linear-gradient(to_right,_rgba(255,255,255,0.12)_75%,_#FF6700_75%)] rounded-xl shadow  backdrop-blur-[6px]" >
    
    {/*
      left-[60px] top-[201px] absolute
    <div className="w-[245px] h-[59px] left-[84px] top-[240px] absolute bg-neutral-800 rounded-xl shadow" />
    <div className="w-[345px] h-[59px] left-[84px] top-[331px] absolute bg-neutral-800 rounded-xl shadow" />
    <div className="w-[445px] h-[264px] left-[84px] top-[424px] absolute bg-neutral-800 rounded-xl shadow" /> */}
    
      <input type="text" placeholder='enter title' className=" w-[245px] h-[59px] m-3  bg-neutral-800 rounded-xl shadow indent-4 text-orange-500 text-opacity-50 text-[25px] font-normal font-['DM Sans'] tracking-[3px]"/>
      <input type="text" placeholder='enter image url' className=" w-[345px] h-[59px] m-3  bg-neutral-800 rounded-xl shadow indent-4 text-orange-500 text-opacity-50 text-[25px] font-normal font-['DM Sans'] tracking-[3px]"/>
      <textarea type="text" placeholder='add description' className=" w-[445px] h-[264px] m-3  overflow-hidden bg-neutral-800 rounded-xl shadow indent-4 text-orange-500 text-opacity-50 text-[25px] font-normal font-['DM Sans'] tracking-[3px]"/>
      <button className="w-[200px] h-14 m-3 bg-orange-500 rounded-[10px] text-zinc-800 text-[25px] font-bold font-['DM Sans'] tracking-widest">SUBMIT</button>
    </div>
  {/* left-[84px] top-[100px]  absolute
  left-[84px] top-[191px]
  left-[84px] top-[284px]
  left-[376px] top-[714px] absolute
  left-[329px] top-[702px]
  left-[841px] top-[259px]
  left-[842px] top-[336px]
  left-[789px] top-[234px] absolute  */}
    <div className="w-[445px] h-[592px]  bg-neutral-800 rounded-xl" >
      <div className="  text-orange-500 text-[25px] font-normal font-['DM Sans'] tracking-[3px]">disclaimer</div>
      <div className="  text-orange-500 text-xl font-normal font-['DM Sans'] tracking-widest">hdjffdfdfbfjbfjbbfgbfkgkgg<br/>gdfggssssssgfdd<br/>fgffgdddddddddddd<br/>gffdgggggggggggg<br/>gggfdddddddddddd<br/>fgffdgggggggggggggg<br/>gffdgggggggggggggg<br/>gffdggggggggggggg<br/>gfgdddddddddddddd<br/>fggfddddddddddd<br/>fgfgddddddddddddd<br/>fggfdddddddddd<br/>fgfgddddd<br/>fgfgfgfdddddd<br/>fggfgfgfgfgfgfdgfg<br/>fggfgfgfgfgfgfgfg</div>
    </div>
  </div>
  
</div>
  )
}

export default Dash