import React, { useState } from 'react';
import Toast from '../components/Toast/MM';
import Modal from '@mui/material/Modal';
import { RiAccountCircleLine } from "react-icons/ri";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpn, setIsOpn] = useState(false);
  const [isEnter, setIsEnter] = useState(0);

  return (
    <>
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        src="/video-ff.webm"
        autoPlay
        loop
        muted
        playsInline
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: '40px', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
        <button
          type="button"
          className="inline-flex flex-initial cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-full font-sans text-sm font-medium transition-all duration-200 bg-black text-white disabled:cursor-not-allowed hover:bg-black/80 h-[48px] p-[20px] mb-6 mt-auto w-[342px]"
          onClick={() => { setIsOpen(true); setIsEnter(0); }}
        >
          Login
        </button>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: 24,
          borderRadius: 24,
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          minWidth: 300,
          zIndex: 1300,
        }}>
          <div className='modal-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <button
              aria-label="Close"
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'transparent',
                border: 'none',
                color: '#111',
                fontSize: 24,
                cursor: 'pointer',
                padding: 6,
                borderRadius: 6,
              }}
            >
              ×
            </button>

            <h2 className='text-[14px] p-[16px]'>Log in or sign up</h2>
            <img className='p-[24px] mb-[16px]' src="/footballfiworld_files/title.png" alt="Logo" />
            <button
              type="button"
              className="inline-flex flex-initial cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl font-sans text-sm font-medium transition-all duration-200 border-2 border-gray text-black disabled:cursor-not-allowed hover:bg-black/10 h-[60px] p-[20px] mb-6 mt-auto w-[380px]"
              onClick={() => { setIsOpn(true); setIsEnter(0); }}
            >
              <div className='w-[24px] h-[24px]'>
                <img src='https://explorer-api.walletconnect.com/v3/logo/md/eebe4a7f-7166-402f-92e0-1f64ca2aa800?projectId=34357d3c125c2bcf2ce2bc3309d98715'/>
              </div>
              <div className='pl-[8px]'>MetaMask</div>
            </button>
            <button
              type="button"
              className="inline-flex flex-initial cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl font-sans text-sm font-medium transition-all duration-200 border-2 border-gray text-black disabled:cursor-not-allowed hover:bg-black/10 h-[60px] p-[20px] mb-6 mt-auto w-[380px]"
            >
              <RiAccountCircleLine size={24}/>
              <div className='pl-[8px]'>More options</div>
            </button>
            <p className='text-sm'>By logging in I agree to the Terms & Privacy Policy</p>
          </div>
        </div>
      </Modal>
      
    </div>
    <Toast isOpn={isOpn} setIsOpn={setIsOpn} isEnter={isEnter} setIsEnter={setIsEnter}/>
    </>
  );
}

export default Dashboard;