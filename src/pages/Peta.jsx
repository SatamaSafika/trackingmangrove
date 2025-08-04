import { useState } from 'react'
import data from '../data/titikData'

function Peta() {
  const [popup, setPopup] = useState(null)

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <img src="/peta-ekowisata.png" alt="Peta Ekowisata" className="w-full h-full object-cover" />

      {data.map((titik, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 bg-red-500 rounded-full cursor-pointer"
          style={{ top: titik.top, left: titik.left }}
          onClick={() => setPopup(titik)}
        />
      ))}

      {popup && (
        <div className="absolute top-1/4 left-1/4 bg-white shadow-lg p-4 rounded-lg z-10 max-w-sm">
          <button className="text-right block w-full mb-2 text-gray-500" onClick={() => setPopup(null)}>×</button>
          <img src={popup.gambar} alt="Info" className="mb-3 rounded" />
          <p>{popup.teks}</p>
        </div>
      )}
    </div>
  )
}

export default Peta
