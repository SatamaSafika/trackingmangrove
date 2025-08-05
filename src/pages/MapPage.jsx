// src/pages/MapPage.jsx
import React, { useState } from 'react';

const spots = [
  {
    id: 1,
    name: 'Gerbang Masuk',
    top: '48%',
    left: '50%',
    description: 'Ini adalah titik masuk menuju jalur tracking mangrove.',
    images: ['/images/spot1.jpg'],
  },
  {
    id: 2,
    name: 'Spot Edukasi',
    top: '65%',
    left: '38%',
    description: 'Area edukasi tentang mangrove dan satwa sekitar.',
    images: ['/images/spot2.jpg'],
  },
  {
    id: 3,
    name: 'Spot Foto',
    top: '72%',
    left: '55%',
    description: 'Tempat favorit untuk berfoto dengan latar bakau.',
    images: ['/images/spot3.jpg'],
  },
  {
    id: 4,
    name: 'Menara Pandang',
    top: '85%',
    left: '43%',
    description: 'Menara pengamatan untuk melihat kawasan mangrove dari atas.',
    images: ['/images/spot4.jpg'],
  },
];

const MapPage = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/background.png')` }}
    >
      {/* Gambar Peta */}
      <img
        src="/images/peta-mangrove.png"
        alt="Peta Tracking Mangrove"
        className="absolute top-1/2 left-1/2 w-[90vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 z-10"
      />

      {/* Titik Lokasi */}
      {spots.map((spot) => (
        <button
          key={spot.id}
          className="absolute z-20 w-4 h-4 bg-green-600 rounded-full border-2 border-white hover:scale-125 transition"
          style={{ top: spot.top, left: spot.left }}
          onClick={() => setSelectedSpot(spot)}
          title={spot.name}
        />
      ))}

      {/* Popup Info */}
      {selectedSpot && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-[90vw] max-w-md z-30">
          <h2 className="text-lg font-bold mb-2">{selectedSpot.name}</h2>
          <p className="text-sm mb-2">{selectedSpot.description}</p>
          <div className="flex gap-2 overflow-x-auto">
            {selectedSpot.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Foto ${selectedSpot.name}`}
                className="w-24 h-24 object-cover rounded"
              />
            ))}
          </div>
          <button
            onClick={() => setSelectedSpot(null)}
            className="mt-3 text-sm text-blue-500 hover:underline"
          >
            Tutup
          </button>
        </div>
      )}
    </div>
  );
};

export default MapPage;
