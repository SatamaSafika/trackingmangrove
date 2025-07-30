import { useState } from 'react';
import MapPopup from '../components/MapPopup';

export default function MapPage() {
  const [popup, setPopup] = useState(null);

  const locations = [
    { id: 1, name: 'Titik 1 - Hutan Bakau', image: '/images/mangrove1.png', desc: 'Ini adalah kawasan utama mangrove.' },
    { id: 2, name: 'Titik 2 - Jembatan Kayu', image: '/images/bridge.png', desc: 'Spot foto favorit pengunjung.' },
  ];

  return (
    <div className="relative w-full h-screen bg-blue-100">
      <img src="/images/peta-desa.png" className="w-full h-full object-cover" alt="Peta" />
      {locations.map((loc, i) => (
        <button
          key={loc.id}
          className="absolute bg-green-600 text-white rounded-full w-6 h-6"
          style={{ top: `${20 + i * 20}%`, left: `${30 + i * 10}%` }}
          onClick={() => setPopup(loc)}
        />
      ))}
      {popup && <MapPopup data={popup} onClose={() => setPopup(null)} />}
    </div>
  );
}
