export default function MapPopup({ data, onClose }) {
  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-xl rounded-xl w-80 z-50">
      <button onClick={onClose} className="float-right text-red-500 font-bold">X</button>
      <h2 className="text-lg font-bold mb-2">{data.name}</h2>
      <img src={data.image} alt={data.name} className="w-full h-40 object-cover rounded mb-2" />
      <p className="text-sm text-gray-700">{data.desc}</p>
    </div>
  );
}
