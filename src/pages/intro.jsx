import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (<div className="w-screen h-screen bg-white flex flex-col md:flex-row overflow-hidden">
    
      {/* Kiri - Teks */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-[8vw] md:px-[5vw] text-center md:text-left space-y-[2vh] pt-[10vh] md:pt-0">
        <h2 className="text-[#D4D4D4] text-[6vw] md:text-[3.95vw] font-medium">Ayo Jelajah</h2>
        <h1 className="text-[#8C9F71] text-[9vw] md:text-[6.8vw] font-extrabold leading-none drop-shadow-lg">
          Tracking<br />Mangrove
        </h1>
        <p className="text-[#485733] text-[3vw] md:text-[1.92vw] italic font-medium">
          Desa Lembar Selatan, Lombok Barat
        </p>
        <button
          onClick={() => navigate('/map')}
          className="mt-[2vh] text-white font-semibold text-[3.5vw] md:text-[1.5vw] px-[5vw] md:px-[2vw] py-[1.5vh] md:py-[1vh] rounded-2xl shadow-md bg-[#8C9F71] active:scale-95 transition-transform"
        >
          Mulai Menjelajahi
        </button>
      </div>

      {/* Kanan - Gambar */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full flex justify-center items-center">
        <img
          src="/images/peta-mangrove.png"
          alt="Peta Mangrove"
          className="w-[68vw] max-w-none ml-[5vw]"
        />
      </div>
    </div>
  );
}
