import React,{ useState } from 'react'
import tailwindfoto from '../../../assets/tailwindlogo.png'
const UshtrimiTailwind = () => {

  const Kopertina = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] md:h-[500px] bg-blue-500">
        <h1 className="text-xl md:text-4xl font-bold text-white mb-4">Mirësevini në Faqen Tonë</h1>
        <p className="text-white text-[14px] md:text-xl mb-8">Zbuloni më shumë rreth produktve dhe shërbimeve tona.</p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100">Hyrje</button>
      </div>
    );
  };


  const ListaElementeve = () => {
    return (
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Elementi 1</li>
        <li className="text-gray-700">Elementi 2</li>
        <li className="text-gray-700">Elementi 3</li>
      </ul>
    );
  };
  
  const FormaRegjistrimi = () => {
    return (
      <div className="max-w-md mx-auto p-6 border rounded">
        <h2 className="text-2xl font-bold mb-4">Regjistrohu</h2>
        <form>
          <input type="text" placeholder="Emri" className="w-full mb-3 p-2 border rounded" />
          <input type="email" placeholder="Email-i" className="w-full mb-3 p-2 border rounded" />
          <input type="password" placeholder="Fjalëkalimi" className="w-full mb-3 p-2 border rounded" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Regjistrohu</button>
        </form>
      </div>
    );
  };

  const KartelaProduktit = () => {
    return (
      <div className="max-w-sm mx-auto bg-white rounded shadow-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Emri i Produktit</h3>
        <p className="text-gray-700 mb-4">Çmimi: $99.99</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Blej</button>
      </div>
    );
  };

    const Navbar = () => {
      return (
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4 text-white">
            <li><a href="/" className="hover:underline">Kreu</a></li>
            <li><a href="/produkte" className="hover:underline">Produkte</a></li>
            <li><a href="/rreth-nesh" className="hover:underline">Rreth Nesh</a></li>
            <li><a href="/kontakt" className="hover:underline">Kontakt</a></li>
          </ul>
        </nav>
      );
    };

    const ArtikulliDetajuar = () => {
      return (
        <article className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded">
          <h2 className="text-2xl font-bold mb-4">Titulli i Artikullit</h2>
          <p className="text-gray-700 mb-4">
            Këtu mund të shkruani përmbajtjen e artikullit tuaj. Artikulli mund të përmbajë informacione të ndryshme dhe detaje të rëndësishme.
          </p>
          <p className="text-gray-500">Autori: Emri Autorit</p>
        </article>
      );
    };

    const ListaPermbajtjes = () => {
      const artikujt = [
        { titulli: 'Titulli i Artikullit 1', pershkrimi: 'Përshkrimi i artikullit 1...' },
        { titulli: 'Titulli i Artikullit 2', pershkrimi: 'Përshkrimi i artikullit 2...' },
        { titulli: 'Titulli i Artikullit 3', pershkrimi: 'Përshkrimi i artikullit 3...' },
      ];
    
      return (
        <div className="max-w-xl mx-auto">
          {artikujt.map((artikull, index) => (
            <div key={index} className="bg-white shadow-md rounded p-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">{artikull.titulli}</h3>
              <p className="text-gray-700">{artikull.pershkrimi}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Lexo më shumë</button>
            </div>
          ))}
        </div>
      );
    };


    
const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
      <div>
        <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Hap Modal
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Modali</h2>
              <p>Kjo është një modal e thjeshtë.</p>
              <button onClick={closeModal} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                Mbyll Modal
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

      const VleresimiMeYje = () => {
        return (
          <div className="flex items-center">
            <span className="text-yellow-500">⭐️⭐️⭐️⭐️⭐️</span>
            <span className="text-gray-500 ml-2">(152 Vlerësime)</span>
          </div>
        );
      };

  
    const Profili = () => {
      return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded">
          <img src={tailwindfoto} alt="Foto e Profilit" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Emri i Përdoruesit</h3>
          <p className="text-gray-700">Përshkrimi i shkurtër i përdoruesit shkon këtu. Përdoruesi ka përvojë në...</p>
        </div>
      );
    };
  

    
  
  
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-4">Ushtrimet Bazike të TailwindCSS</h1>
  
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 1: Krijoni një komponent "Kopertina"</h2>
          <div className="border p-4 rounded">
            <Kopertina />
          </div>
        </div>
  
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 2: Lista e Elementeve</h2>
          <div className="border p-4 rounded">
            <ListaElementeve   />
          </div>
        </div>

  
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 3: Formë për Regjistrim</h2>
          <div className="border p-4 rounded">
            <FormaRegjistrimi  />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 4: Kartela e Produktit</h2>
          <div className="border p-4 rounded">
            <KartelaProduktit  />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 5: Navigimi me Navbar</h2>
          <div className="border p-4 rounded">
            <Navbar/>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 6: Pamje e Detajuar e Artikullit</h2>
          <div className="border p-4 rounded">
            <ArtikulliDetajuar/>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 7: Lista e Përmbajtjes</h2>
          <div className="border p-4 rounded">
            <ListaPermbajtjes/>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 8: Krijoni një Modal</h2>
          <div className="border p-4 rounded">
            <Modal/>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 9: Vlerësimi me Yje</h2>
          <div className="border p-4 rounded">
            <VleresimiMeYje/>
          </div>
        </div>

        <div className="mb-2">
          <h2 className="text-xl font-semibold mb-2">Ushtrimi 10: Shfaqje e Profilit</h2>
          <div className="border p-4 rounded">
            <Profili/>
          </div>
        </div>

      </div>
    );
}

export default UshtrimiTailwind