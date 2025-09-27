import React, { useEffect, useRef } from "react";

/**
 * WalletModal component
 * Props:
 * - open (boolean): controls visibility
 * - onClose (function): callback to close
 */
export default function AuthModal({ open, onClose, setIsOpn }) {
  const dialogRef = useRef(null);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prev;
      };
    }
  }, [open]);

  // Focus handling: focus container on open
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        if (dialogRef.current) dialogRef.current.focus();
      }, 10);
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Basic focus trap
  const onKeyDown = (e) => {
    if (e.key !== "Tab") return;
    const focusables = dialogRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Wallet login">
      {/* Light wash + blur backdrop to match reference */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Centered Panel */}
      <div className="absolute inset-0 grid place-items-center px-4">
        <div
          ref={dialogRef}
          tabIndex={-1}
          onKeyDown={onKeyDown}
          className="w-[360px] rounded-[24px] border border-black/5 bg-white shadow-[0_15px_60px_rgba(0,0,0,0.2)] outline-none px-[16px]"
        >
          {/* Header */}
          <div className="relative flex items-center justify-center px-0 py-[16px]">
            <div className="text-[16px] text-neutral-500">Log in or sign up</div>
            <button
              onClick={onClose}
              className="absolute right-0 top-3 rounded-xl p-2 text-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center py-[24px] mb-[16px]">
            <img src="/footballfiworld_files/title.png" alt="App Logo" className="h-[32px] w-[27px]" />
          </div>

          {/* Options */}
          <div className="p-[3px] text-center">
            <WalletRowLight
              label="MetaMask"
              icon={<img src="https://explorer-api.walletconnect.com/v3/logo/md/eebe4a7f-7166-402f-92e0-1f64ca2aa800?projectId=34357d3c125c2bcf2ce2bc3309d98715" className="w-6 h-6"/>}
              onClick={() => setIsOpn(true)}
            />
            <WalletRowLight
              label="Rabby"
              icon={<img src="https://explorer-api.walletconnect.com/v3/logo/md/255e6ba2-8dfd-43ad-e88e-57cbb98f6800?projectId=34357d3c125c2bcf2ce2bc3309d98715" className="w-6 h-6"/>}
              onClick={() => alert("Rabby clicked")}
            />
            <WalletRowLight
              label="WalletConnect"
              icon={<img src="data:image/png;base64,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" className="w-6 h-6"/>}
              onClick={() => alert("WalletConnect clicked")}
            />
            <button className="text-[14px] font-medium text-[#666EFF] hover:underline">I have a passkey</button>
          </div>

          {/* Footer Links */}
          <div className="px-0 text-center">
            <p className="mt-[16px] text-[13px] text-[#9498B8]">
              By logging in I agree to the <a className="text-[#666EFF] hover:underline">Terms</a> &
              <a className="text-[#666EFF] hover:underline"> Privacy Policy</a>.
            </p>
          </div>
          <div className="flex justify-center pt-[8px] pb-[12px]">
            <div class="p-2 text-[#9498B8]"><a href="https://www.privy.io/" target="_blank" id="protected-by-privy" class="PrivyLink-sc-ff3bd734-1 ikrvcT"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 40" color="currentColor" height="13" width="150"><g fill="currentColor"><path d="M0 15.4v15.38h4.64V19.96h3.58c2.47 0 3.63-.01 3.77-.02 1-.08 1.49-.15 2.18-.3a9.45 9.45 0 0 0 4.6-2.37c1.66-1.57 2.64-3.87 2.81-6.56.02-.3.02-1.19 0-1.49-.1-1.77-.56-3.35-1.36-4.72A8.84 8.84 0 0 0 15.14.57c-.93-.3-1.75-.43-3.09-.54C11.9.02 10.2 0 5.93 0H0ZM10.85 4c1.85.05 3.1.45 4.16 1.3.22.17.54.49.69.68a5.97 5.97 0 0 1 1.19 3.13c.04.35.04 1.36 0 1.71-.08.68-.23 1.3-.44 1.85a4.8 4.8 0 0 1-1.09 1.68A5.63 5.63 0 0 1 12 15.92c-.6.08-.4.08-4.01.09H4.64V3.98h2.9c1.6 0 3.08 0 3.31.02ZM187.65 5.71v5.72h-.27l-.09-.14a15.9 15.9 0 0 0-1.21-1.73c-.43-.5-1-.95-1.7-1.36-.54-.3-1.05-.5-1.73-.63a8.98 8.98 0 0 0-1.7-.17 8.84 8.84 0 0 0-7.8 4.03 12.95 12.95 0 0 0-2.03 6.39c-.07.98-.06 2.15.02 3.13.2 2.47.87 4.53 2.02 6.25a8.98 8.98 0 0 0 10.22 3.65 6.5 6.5 0 0 0 2.8-1.93c.41-.51.84-1.1 1.1-1.55l.1-.17h.37v3.58h4.38V0h-4.48Zm-5.24 5.54c1.3.14 2.3.6 3.17 1.48.9.9 1.5 2.09 1.85 3.64.36 1.6.39 3.72.06 5.43a8.13 8.13 0 0 1-1.54 3.62 5.1 5.1 0 0 1-3.93 1.96 6.13 6.13 0 0 1-2.32-.31 5.87 5.87 0 0 1-3.33-3.5c-.39-1-.62-2.05-.72-3.32-.03-.32-.04-1.35-.02-1.73.08-1.56.4-2.91.96-4.05a6.2 6.2 0 0 1 1.06-1.58 5.08 5.08 0 0 1 3.6-1.66c.25-.02.9 0 1.16.02ZM210.07 15.39l.01 15.38h4.38l.01-3.57h.37l.09.15c.24.44.84 1.26 1.21 1.7a6.79 6.79 0 0 0 2.57 1.75 9.3 9.3 0 0 0 6.86-.49 9.28 9.28 0 0 0 4.05-4.07A13.05 13.05 0 0 0 231 21.6c.21-1.73.18-3.7-.09-5.32a13.03 13.03 0 0 0-1.5-4.3 9.1 9.1 0 0 0-3.75-3.63 9.15 9.15 0 0 0-4.43-.96 7.46 7.46 0 0 0-2.8.5A7.07 7.07 0 0 0 216 9.7c-.4.52-.82 1.12-1.1 1.59l-.07.14h-.27V0h-4.5Zm11.13-4.14c1.07.1 1.94.44 2.7 1.04a6.1 6.1 0 0 1 1.64 1.98c.43.84.78 2 .94 3.11.15 1.16.16 2.4.02 3.54a9.34 9.34 0 0 1-1.39 4.03 5.33 5.33 0 0 1-2.69 2.15c-.9.3-2.04.38-3.06.2a5.14 5.14 0 0 1-3.45-2.37 6.03 6.03 0 0 1-.45-.8c-.5-1.03-.8-2.2-.92-3.58-.04-.49-.06-.89-.05-1.53.01-.76.05-1.23.13-1.85.38-2.53 1.47-4.38 3.15-5.31a5.46 5.46 0 0 1 2.3-.63 10 10 0 0 1 1.13.02ZM69.05 2.17l-.01 2.77V7.7h-3.36v3.6h3.36v6.8l.01 7.15c.06 1.4.4 2.44 1.1 3.37a5.8 5.8 0 0 0 2.97 2.07c.91.3 1.83.42 2.9.38a8.71 8.71 0 0 0 2.66-.48l-.8-3.7-.38.06a4.96 4.96 0 0 1-2.43-.06c-.33-.1-.56-.25-.8-.49-.4-.41-.6-.88-.7-1.67-.02-.2-.02-.62-.03-6.82v-6.6h4.73V7.7h-4.73V2.16h-4.49ZM133.34 2.17V7.7h-3.39v3.6h3.38v6.9l.01 7.17a5.66 5.66 0 0 0 2.36 4.49c.85.6 2.03 1.03 3.26 1.17.85.1 2.03.05 2.81-.1.3-.06.75-.18 1-.26l.2-.06v-.05l-.81-3.67-.37.06a4.99 4.99 0 0 1-1.8.09c-.85-.13-1.32-.4-1.7-.97a2.63 2.63 0 0 1-.39-1.04c-.06-.4-.06 0-.06-7.1V11.3h4.7V7.7h-4.7l-.01-2.77V2.16h-4.49ZM293.41 2.36a14.56 14.56 0 0 0-13.7 16.07 14.59 14.59 0 0 0 21.86 11.08 14.5 14.5 0 0 0 7.11-14.07 14.61 14.61 0 0 0-6.53-10.73 14.49 14.49 0 0 0-8.74-2.35ZM350.8 2.36a10.17 10.17 0 0 0-7.56 4.2c-.16.2-.45.63-.58.83l-.05.1h-.47l-.01-4.36h-7.36v36.4h7.82V27.27h.49l.05.07a11.3 11.3 0 0 0 7.49 4.15 10.52 10.52 0 0 0 9.38-4.1c1.66-2.1 2.73-4.9 3.07-8.06.1-.87.13-1.4.13-2.37 0-.8 0-1.1-.07-1.76a15.95 15.95 0 0 0-3.23-8.72 12.8 12.8 0 0 0-1.85-1.84 10.49 10.49 0 0 0-7.26-2.28Zm-.94 6.05c1.27.15 2.33.65 3.2 1.5.98.96 1.67 2.31 2.03 4 .34 1.57.38 3.68.12 5.39a9.78 9.78 0 0 1-1.04 3.25c-.14.25-.44.69-.6.89a5.35 5.35 0 0 1-4.31 2.07 5.25 5.25 0 0 1-4.41-1.9 7.35 7.35 0 0 1-1.26-2.32 14.09 14.09 0 0 1-.62-4.83c.05-1.98.38-3.53 1.02-4.85a5.63 5.63 0 0 1 2.5-2.65c.66-.34 1.3-.5 2.14-.58.18-.02 1.04 0 1.23.03ZM363.63 3.1l-.01 3.2v3.16h1.43c1.26.01 1.44.02 1.54.04.42.09.66.28.79.62.08.23.08.08.08 2.96a911.57 911.57 0 0 1 .03 10.18v7.54h7.82v-7.4l.01-7.83c.03-.94.11-1.63.27-2.28.46-1.9 1.54-2.93 3.35-3.23.52-.08.2-.08 5-.08h4.4V3.08h-3.1c-3.48 0-3.91.01-4.67.1-1.83.2-3.04.79-3.96 1.88-.5.6-.9 1.32-1.26 2.26l-.06.17h-.46V3.09h-5.6c-4.46 0-5.6 0-5.6.02ZM390.8 16.95V30.8h3.87l3.86-.01V3.09h-7.73ZM400.6 3.1l-.01.4v.38l4.66 13.4 4.69 13.47.02.05h10.3l.03-.05 4.67-13.45 4.67-13.4V3.1h-7.43l-6.7 19.26h-.5l-3.28-9.5-3.31-9.64-.05-.12h-3.88l-3.88.01ZM430.98 3.1c-.01 0-.02.19-.02.4v.39l5.08 14.59c2.8 8.02 5.08 14.6 5.08 14.61.01.02-.22.02-4.8.02h-4.82v6.42h4.95c5.09 0 5.23 0 5.87-.06 3.15-.28 5.29-1.63 6.63-4.15.28-.55.44-.95.87-2.16L459 6.78l1-2.89v-.8h-7.43l-6.69 19.26h-.5l-3.27-9.46-3.31-9.64-.06-.16h-3.88l-3.88.01ZM36.57 7.36c-1.36.1-2.6.6-3.62 1.45a5.65 5.65 0 0 0-1.67 2.42l-.05.13H31V7.7h-4.35v23.08h4.5v-7.3c0-8 0-7.34.08-7.82a4.89 4.89 0 0 1 2.06-3.18c.83-.58 1.74-.89 2.87-.98a11.87 11.87 0 0 1 2.8.25H39v-4.3l-.21-.02c-.61-.07-1.74-.1-2.22-.07ZM51.08 7.41c-2.33.12-4.3.84-5.95 2.16a9.89 9.89 0 0 0-2.03 2.2 12.5 12.5 0 0 0-2 5.78 18.04 18.04 0 0 0 0 3.65 12.13 12.13 0 0 0 2.26 6.05 9.74 9.74 0 0 0 5 3.52c2.11.64 4.7.64 6.8 0a9.78 9.78 0 0 0 4.88-3.37c1.38-1.78 2.19-4 2.4-6.58.13-1.46.06-3.06-.18-4.42a11.24 11.24 0 0 0-3.58-6.6 10 10 0 0 0-5.75-2.35c-.56-.06-1.31-.07-1.85-.04Zm1.42 3.78c.88.1 1.62.34 2.28.75a6.13 6.13 0 0 1 1.99 2.15 10.31 10.31 0 0 1 1.2 5c.02 1.23-.12 2.44-.42 3.51a7.14 7.14 0 0 1-1.81 3.32c-.61.6-1.2.98-1.95 1.24a6 6 0 0 1-2 .3 5.7 5.7 0 0 1-2.72-.6 5 5 0 0 1-1.28-.94A7.1 7.1 0 0 1 46 22.73c-.57-1.99-.6-4.46-.08-6.5a7.24 7.24 0 0 1 2.03-3.67 5.13 5.13 0 0 1 3.35-1.4 11 11 0 0 1 1.2.03ZM92.05 7.4c-.96.06-1.56.15-2.3.33a9.62 9.62 0 0 0-6.09 4.66 13.5 13.5 0 0 0-1.71 7c0 .83 0 1.04.06 1.6.16 1.77.58 3.32 1.29 4.7A9.72 9.72 0 0 0 90.28 31c1.84.37 4.08.32 5.85-.13a9.07 9.07 0 0 0 5.02-3.1A7.64 7.64 0 0 0 102.5 25l-2.11-.39-2.11-.38-.08.13a4.72 4.72 0 0 1-2.35 2.55 6.3 6.3 0 0 1-2.23.58c-.29.03-1.13.03-1.44 0a6.35 6.35 0 0 1-3.02-1.04 5.93 5.93 0 0 1-2.02-2.43 8.44 8.44 0 0 1-.72-3.18v-.26h16.38v-.81c0-1.83-.06-2.76-.25-3.87-.2-1.22-.53-2.24-1.05-3.28a8.9 8.9 0 0 0-2.66-3.26 10.1 10.1 0 0 0-5.34-1.94 18.3 18.3 0 0 0-1.46-.03Zm1.3 3.75c1.2.13 2.19.55 3.05 1.3a5.8 5.8 0 0 1 1.78 2.96c.13.51.21 1.17.21 1.66v.15H86.43v-.12c.08-.97.3-1.78.72-2.61.5-1 1.2-1.8 2.14-2.42a5.32 5.32 0 0 1 2.9-.95c.2-.01.97 0 1.17.03ZM116.79 7.41c-2 .1-3.73.65-5.22 1.65a10.7 10.7 0 0 0-4.25 6.06 16.1 16.1 0 0 0-.5 5.8c.2 2.17.84 4.13 1.88 5.76.58.9 1.32 1.73 2.15 2.4a9.37 9.37 0 0 0 3.6 1.8 12.06 12.06 0 0 0 3.92.34 10.2 10.2 0 0 0 3.84-.95 8.31 8.31 0 0 0 4.76-6.75l.01-.04h-4.37l-.05.16a4.87 4.87 0 0 1-4.24 3.75c-.59.07-1.32.06-1.93-.05a5.47 5.47 0 0 1-3.5-2.27c-.56-.75-1-1.73-1.26-2.79a13.8 13.8 0 0 1-.16-5.24 7.77 7.77 0 0 1 2.1-4.3 5.48 5.48 0 0 1 2.15-1.3 6.4 6.4 0 0 1 3.89.1c.59.21 1.03.5 1.5.96a5.32 5.32 0 0 1 1.46 2.5l.04.15h4.37v-.06a8.22 8.22 0 0 0-5.31-6.94 10.98 10.98 0 0 0-4.88-.74ZM156.2 7.41a9.87 9.87 0 0 0-6 2.29 11.02 11.02 0 0 0-3.41 5.43c-.52 1.78-.68 3.9-.48 5.97.17 1.8.63 3.38 1.37 4.8a9.68 9.68 0 0 0 5.91 4.86c1.65.48 3.63.61 5.53.36 3.72-.49 6.55-2.62 7.56-5.69.12-.39.13-.42.1-.43-.02 0-4.13-.75-4.19-.75-.03 0-.04 0-.1.16-.18.42-.45.9-.72 1.22-.16.2-.49.53-.7.7-.67.54-1.5.9-2.43 1.08-.48.08-.83.11-1.41.11-.64 0-1.07-.04-1.6-.15a5.76 5.76 0 0 1-3.93-2.83 8 8 0 0 1-.99-3.79v-.16h16.38v-1.11l-.02-1.43c-.1-2.25-.53-4-1.35-5.59a9.24 9.24 0 0 0-6.18-4.75c-1.04-.26-2.2-.36-3.33-.3Zm1.45 3.74a5.35 5.35 0 0 1 3.66 1.94 6.1 6.1 0 0 1 1.38 4.01v.12h-11.97v-.06c0-.02 0-.14.02-.25a6.6 6.6 0 0 1 2.15-4.32 5.73 5.73 0 0 1 3.5-1.46c.25-.02 1 0 1.26.02ZM233.58 7.82l8.37 23.22a49.22 49.22 0 0 1-.67 1.9 5.36 5.36 0 0 1-1.14 1.8c-.41.4-.82.58-1.48.69-.27.04-1.03.03-1.35 0a8.05 8.05 0 0 1-1.1-.23l-1.08 3.67c0 .02.32.14.66.22.83.21 1.57.29 2.56.28.56-.01.8-.03 1.24-.1 2.71-.4 4.66-2.09 5.86-5.08l9.64-26.44c0-.02-4.82-.06-4.83-.05l-2.93 8.96-2.91 8.94h-.24l-.22-.65-2.91-8.95-2.7-8.3H233.53ZM293.05 35.8c-1.18.04-1.93.09-2.8.16-2.52.24-4.53.69-5.43 1.23-.7.41-.76.86-.2 1.28.88.66 3.29 1.19 6.36 1.4a48.55 48.55 0 0 0 5.75.05c3.47-.19 6.24-.78 7.11-1.5.22-.19.3-.34.3-.53 0-.1 0-.12-.04-.22-.35-.69-2.32-1.3-5.25-1.63a41.09 41.09 0 0 0-5.8-.24Zm0 0"></path></g></svg></a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Light row variant (white card look) */
function WalletRowLight({ label, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group mb-2 flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white px-[12px] py-[10px] text-left shadow-sm transition hover:bg-[#EEF2FF]"
    >
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-neutral-100 text-neutral-700 ring-1 ring-black/5">
        {icon}
      </div>
      <div className="flex-1 text-[14px] text-neutral-800">{label}</div>
    </button>
  );
}

/* ---- Icons (SVG) ---- */
function X({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LogoShield({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3l7 3v6c0 4.5-3.2 7.9-7 9-3.8-1.1-7-4.5-7-9V6l7-3Z" fill="currentColor" />
      <path d="M12 7v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PrivyLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 60 12" className={className} aria-hidden>
      <rect x="0" y="4" width="8" height="8" rx="2" fill="#111" />
      <text x="12" y="10" fontSize="8" fill="#777">PRIVY</text>
    </svg>
  );
}

function ChevronRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MetaMaskIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path fill="#F6851B" d="M27.7 4.6L18 10l1.8-4.2 7.9-1.2zM4.3 4.6L14 10 12.2 5.8 4.3 4.6zM28.6 24.6L23 21l1.6 3.8 4 -.2zM3.4 24.6L9 21 7.4 24.8l-4 .2z" />
    </svg>
  );
}

function RabbyIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="14" fill="#6B7280" />
      <rect x="10" y="9" width="4" height="8" rx="2" fill="white" />
      <rect x="18" y="9" width="4" height="8" rx="2" fill="white" />
    </svg>
  );
}

function WalletConnectIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path d="M8 14c4-4 12-4 16 0l-2 2c-3-3-9-3-12 0l-2-2Zm3 3c2-2 8-2 10 0l-2 2c-1-1-5-1-6 0l-2-2Z" fill="#3B82F6" />
    </svg>
  );
}
