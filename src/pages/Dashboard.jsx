import React, { useState } from 'react';
import Toast from '../components/Toast/MM';
import Modal from '@mui/material/Modal';
import { RiAccountCircleLine } from "react-icons/ri";
import AuthModal from '../components/authmodal/authModal';

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpn, setIsOpn] = useState(false);
  const [isEnter, setIsEnter] = useState(0);

  return (
    <div>
      <div className="m-auto size-full h-dvh">
        <div className="absolute left-0 top-0 z-[1] flex h-min w-full items-center justify-center bg-black p-5">
          <p className="m-0 font-sans font-[300] not-italic text-center text-[12px] text-white sm:text-[14px]">
            Welcome to Football.Fun Pro. Pro is experimental and designed for people familiar with cryptocurrency and trading. The market is likely to be volatile especially early on.
          </p>
        </div>
        <div className="flex h-dvh w-full flex-col items-center p-2 md:p-4">
          <div className="relative w-full flex-1 overflow-hidden">
            <video
              className="absolute inset-0 size-full scale-100 object-cover md:object-contain"
              src="/video-ff.webm"
              autoPlay
              loop
              muted
            />
          </div>
          <button
            type="submit" className="inline-flex flex-initial cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-full font-sans text-sm font-medium transition-all duration-200 bg-black text-white disabled:cursor-not-allowed disabled:bg-gray-40 md:enabled:hover:bg-black/80 h-[48px] p-[20px] mb-6 mt-auto w-full sm:max-w-[342px]"
            onClick={() => { setIsOpen(true); setIsEnter(0); }}
          >
            Login
          </button>
        </div>

        <AuthModal open={isOpen} onClose={() => setIsOpen(false)} setIsOpn={setIsOpn} />
          
        <Toast isOpn={isOpn} setIsOpn={setIsOpn} isEnter={isEnter} setIsEnter={setIsEnter} />
      </div>
    </div>
  );
}

export default Dashboard;