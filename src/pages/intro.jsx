import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-4xl font-bold text-green-800">Selamat Datang di Ekowisata Mangrove</h1>
      <p className="mt-4 text-lg text-green-700 text-center max-w-lg">
        Jelajahi kekayaan alam dan peran penting mangrove di Desa Cemare.
      </p>
      <Link
        to="/peta"
        className="mt-8 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
      >
        Lihat Peta
      </Link>
    </div>
  );
}
