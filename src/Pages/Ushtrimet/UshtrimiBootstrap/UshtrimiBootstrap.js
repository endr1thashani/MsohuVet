import React, { useState } from 'react';
import bootstrap from '../../../assets/bootstrap.png'
const UshtrimiBootstrap = () => {

  const Paneli = () => {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-gray-100 border border-gray-300 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Titulli i Panelit</h2>
          <p>Ky është një përshkrim i panelit me stilizimet e Bootstrap dhe Tailwind CSS.</p>
        </div>
      </div>
    );
  };

  const ToggleButton = () => {
    const [bgColor, setBgColor] = useState('bg-blue-500');
  
    const toggleBackground = () => {
      setBgColor(prevColor => prevColor === 'bg-blue-500' ? 'bg-red-500' : 'bg-blue-500');
    };
  
    return (
      <div className="container mx-auto p-8">
        <button
          onClick={toggleBackground}
          className={`transition-colors duration-300 ease-in-out text-white px-4 py-2 rounded ${bgColor}`}
        >
          Ndrysho Ngjyrën
        </button>
      </div>
    );
  };
  
  const TableWithTailwind = () => {
    return (
      <div className="container mx-auto p-8">
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-2">Emri</th>
              <th className="border border-gray-400 p-2">Mbiemri</th>
              <th className="border border-gray-400 p-2">Mosha</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-2">John</td>
              <td className="border border-gray-400 p-2">Doe</td>
              <td className="border border-gray-400 p-2">30</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-2">Jane</td>
              <td className="border border-gray-400 p-2">Smith</td>
              <td className="border border-gray-400 p-2">25</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const InfoCard = () => {
    return (
      <div className="container mx-auto p-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src={bootstrap} alt="Fotoja" />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">Titulli i Kartelës</h5>
            <p className="text-gray-700 text-base">
              Këtu mund të shkruani informacione të ndryshme rreth kësaj kartele.
            </p>
          </div>
          <div className="px-6 py-4">
            <button className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Më Shumë
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className="flex items-center justify-center h-[400px] bg-gray-100">
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Kërko</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Shkruani kërkimin tuaj..."
              className="p-2 border rounded-l w-full"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
              Kërko
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-4">Ushtrimet Bazike të Bootstrap</h1>
  
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 1: Titull dhe përshkrim Bootstrapt</h2>
          <div className="border p-4 rounded">
            <Paneli />
          </div>
        </div>
  
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 2: Butoni Interaktiv</h2>
          <div className="border p-4 rounded">
            <ToggleButton  />
          </div>
        </div>

  
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 3: Tabela me Bootstrap</h2>
          <div className="border p-4 rounded">
            <TableWithTailwind />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 4: Kartel e informacionit me Bootstrap</h2>
          <div className="border p-4 rounded">
            <InfoCard />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 5: Fushë Input dhe Buton me Bootstrap</h2>
          <div className="border p-4 rounded">
            <SearchBar />
          </div>
        </div>

      </div>
    );
  };
  

export default UshtrimiBootstrap