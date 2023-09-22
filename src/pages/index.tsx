import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion";

// Octokit
import { octokit } from "../lib/github";
import { useContext, useEffect, useState } from 'react'
import { HoverContext } from '@/contexts/HoverContext'

import AppleMusic from "../../public/assets/logo/AppleMusic.png";
import appStore from "../../public/assets/logo/appStore.png";
import brownAppStore from "../../public/assets/logo/brownAppStore.png";
import brownHome from "../../public/assets/logo/brownHome.png";
import instagram from "../../public/assets/logo/instagram.png";
import IosMessage from "../../public/assets/logo/IosMessage.png";
import Movie from "../../public/assets/logo/Movie.png";
import safari from "../../public/assets/logo/safari.png";
import settings from "../../public/assets/logo/settings.png";
import spotify from "../../public/assets/logo/spotify.png";
import Tv from "../../public/assets/logo/Tv.png";
import Whatsapp from "../../public/assets/logo/Whatsapp.png";
import whiteAppStore from "../../public/assets/logo/whiteAppStore.png";
import whiteHome from "../../public/assets/logo/whiteHome.png";
import ImageCustom from '@/components/Image';
import powerOff from "../../public/assets/logo/powerOff.png";
import powerOn from "../../public/assets/logo/powerOn.png";
import Link from 'next/link';

const logos = {
  AppleMusic,
  appStore,
  brownAppStore,
  brownHome,
  instagram,
  IosMessage,
  Movie,
  safari,
  settings,
  spotify,
  Tv,
  Whatsapp,
  whiteAppStore,
  whiteHome,
  powerOff,
  powerOn,
};

const inter = Inter({ subsets: ['latin'] })
function Home() {

  const [appHover, setAppHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [leftHover, setLeftHover] = useState(false);
  const [power, setPower] = useState(false)
  return (
    <div className="h-screen w-screen overflow-hidden bg-[url('/assets/images/bg.jpg')] bg-center bg-cover bg-no-repeat flex justify-center items-center p-8" >
      {power == true ? (
        <><div className='h-full w-full bg-black/50 absolute z-10' />

          <div className='h-full w-full z-20 flex px-24 justify-center items-center'>
            {/* Left bar */}
            {/* <div className="h-full w-[15%] flex justify-end items-center">
            <div className='flex flex-col shadow-xl justify-around bg-[#D3D3D3]/50 hover:bg-[#D3D3D3]/70 h-40 rounded-full px-4 py-2 absolute hover:w-fit transition-all duration-1000' onMouseEnter={() => {setLeftHover(true)}}  onMouseLeave={() => {setLeftHover(false)}} >
              <div className='flex gap-2'>
              <Image src={logos.brownAppStore} className='w-5 h-5' alt={'brownAppStore'} onMouseEnter={() => {setAppHover(true);}} onMouseOut={() => {setAppHover(false); console.log(appHover)}}/>
              {leftHover && (
                <h1 className='text-white'>App Store</h1>
              )}
              </div>
              <Image src={logos.brownHome} className='w-5 h-5' alt={'brownAppStore'} onMouseEnter={() => {setHomeHover(true);}} onMouseOut={() => {setHomeHover(false);}}/>
            </div>
          </div> */}

            {/* Main bar */}
            <div className="h-[80%] w-[70%] relative">

              {/* Left bar */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }} className=' backdrop-blur-sm backdrop-brightness-100 flex gap-4 flex-col shadow-xl justify-center items-start bg-[#D3D3D3]/50 hover:bg-[#D3D3D3]/70 py-8 rounded-[38px] hover:rounded-[38px] px-4  absolute hover:w-fit transition-all duration-700 ease-linear bottom-28 -left-20 z-20' onMouseEnter={() => { setLeftHover(true) }} onMouseLeave={() => { setLeftHover(false) }} >
                <div className='flex gap-2 items-center justify-center hover:bg-green-600/50 rounded-full hover:cursor-pointer pr-2'>
                  <Image src={logos.whiteAppStore} className='w-8 h-8 bg-green-600/50 rounded-full p-1' alt={'brownAppStore'} onMouseEnter={() => { setAppHover(true); }} onMouseOut={() => { setAppHover(false); console.log(appHover) }} />
                  {leftHover && (
                    <h1 className='text-white text-left'>App Store</h1>
                  )}
                </div>

                <div className='flex gap-2 items-center justify-center hover:bg-white/30 rounded-full hover:cursor-pointer py-2 pr-4'>
                  <Image src={logos.brownHome} className='ml-1 w-6 h-6' alt={'brownAppStore'} onMouseEnter={() => { setHomeHover(true); }} onMouseOut={() => { setHomeHover(false); }} />
                  {leftHover && (
                    <h1 className='text-white text-left'>Home</h1>
                  )}
                </div>
              </motion.div>

              {/* Top bar */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 3 }} className='flex justify-center items-center py-4 shadow-xl relative'>
                <div className=' backdrop-blur-sm relative flex flex-col justify-around bg-[#F0F0F0]/20 w-40 rounded-full px-4 py-2 '>
                  <h1 className='text-white text-center z-20'>Done by <Link href={"href='https://github.com/sudo-001'"}>@Sudo</Link></h1>
                </div>
              </motion.div>

              {/* Central bar */}
              <motion.div  whileInView={{ y: 0, opacity: 1 }} initial={{ opacity: 0, y: 40 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className='backdrop-blur-sm shadow-xl rounded-[50px] bg-[#CFCFCF]/5 h-[80%] py-8 flex flex-col gap-8 justify-center items-center '>

                <div className='flex gap-20 text-white'>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.0 }} className='flex flex-col gap-2 justify-center items-center'>
                    <ImageCustom src={logos.Tv} alt={'tv'} />
                    <h1>TV</h1>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }} className='flex flex-col gap-2 justify-center items-center'>
                    <ImageCustom src={logos.AppleMusic} alt={'AppleMusic'} />
                    <h1>Music</h1>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4 }} className='flex flex-col gap-2 justify-center items-center'>
                    <ImageCustom src={logos.settings} alt={'settings'} />
                    <h1>settings</h1>
                  </motion.div>
                </div>

                <div className='flex gap-20 text-white'>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.6 }} className='flex flex-col gap-2 justify-center items-center'>
                    <ImageCustom src={logos.safari} alt={'safari'} />
                    <h1>safari</h1>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.8 }} className='flex flex-col gap-2 justify-center items-center'>
                    <ImageCustom src={logos.Movie} alt={'youtube'} />
                    <h1>youtube</h1>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2 }} className='flex flex-col gap-2 justify-center items-center relative'>
                    <ImageCustom className='indicator relative' src={logos.Whatsapp} alt={'Whatsapp'} />
                    <span className="absolute top-0 right-0 text-xs rounded-full bg-red-600 p-1 text-white">99+</span>
                    <h1>Whatsapp</h1>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.2 }} className='flex flex-col gap-2 justify-center items-center'>
                    <ImageCustom src={logos.appStore} alt={'appStore'} />
                    <h1>app store</h1>
                  </motion.div>

                </div>

                <div className='flex gap-20 text-white'>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.4 }} className='flex flex-col gap-2 justify-center items-center'>
                    <ImageCustom src={logos.IosMessage} alt={'IosMessage'} />
                    <h1>Message</h1>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.6 }} className='flex flex-col gap-2 justify-center items-center relative'>
                    <ImageCustom src={logos.instagram} alt={'instagram'} />
                    <span className="absolute top-0 right-0 text-xs rounded-full bg-red-600 p-1 text-white">12</span>
                    <h1>instagram</h1>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.8 }} className='flex flex-col gap-2 justify-center items-center'>
                    <ImageCustom src={logos.spotify} alt={'spotify'} />
                    <h1>spotify</h1>
                  </motion.div>
                </div>
              </motion.div>

              {/* Bottom bar */}
              <motion.div className='transition-all duration-500 overflow-y-hidden  flex justify-center items-center py-4'>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className='transition-all duration-500 hover:cursor-pointer  flex flex-col justify-around bg-[#F0F0F0]/100 w-20 rounded-full px-4 py-1' onClick={() => document.getElementById('my_modal_2').showModal()}>

                </motion.div>
                <dialog id="my_modal_2" className="modal backdrop-hue-rotate-60 backdrop-blur-sm">
                  <div className="modal-box flex flex-col gap-4 justify-around items-center">
                    <div className='flex gap-10 hover:cursor-pointer' >
                      <div className='transition-all duration-700 flex items-center justify-center flex-col  gap-4 border  rounded-full p-8 backdrop-blur-lg hover:cursor-pointer '>
                        <Image src={logos.powerOff} alt={'PoserOff'} onClick={() => setPower(false)} className="w-12 h-12 hover:scale-110 transition-all duration-300 rounded-full hover:shadow-lg" />

                        <h1>Switch off </h1>
                      </div>
                    </div>
                    {/* <p className="py-4">Close your eyes to quit, or press on the button</p> */}
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </motion.div>
            </div>

            {/* <div className="bg-pink-500 h-full w-[15%]"></div>  */}
          </div>
        </>
      ) : (
        <>
          <div className='w-full h-full flex justify-center items-center'>
            {/* <div className='h-screen w-screen absolute z-10 blur-xl' /> */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className='flex items-center justify-center flex-col  gap-4 border bg-gray-500/30 rounded-full p-8 hover:scale-110 backdrop-blur-lg hover:cursor-pointer '>
              <Image src={logos.powerOn} alt={'PoserOn'} onClick={() => setPower(true)} className="w-12 h-12 hover:scale-110 transition-all duration-300 rounded-full hover:shadow-lg hover:cursor-pointer" />

              {/* <h1>Switch on</h1> */}
            </motion.div>
          </div></>
      )}


    </div>
  );
}

export default Home;