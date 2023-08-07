import React,{ useState } from 'react'

const UshtrimiHtml = () => {
  // Exercise 1: Basic Component Creation
  const CardComponent = () => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Titulli</h2>
        <p className="mt-2 text-gray-600">Përmbajtja.</p>
      </div>
    );
  };

  // Exercise 2: Interactive Component
  const InteractiveComponent = () => {

    return (
      <button
        className="py-2 px-4 rounded font-bold bg-blue-700"
      >
        Kliko këtu
      </button>
    );
  };

  // Exercise 3: Text Highlighting
  const HighlightComponent = () => {
    return (
      <div className="bg-yellow-200 p-4 rounded-lg">
        <p className="text-lg font-semibold text-blue-700">
          Ky tekst është theksuar me ngjyrë dhe stil.
        </p>
      </div>
    );
  };

  // Exercise 4: List of Items
  const ListComponent = () => {
    const items = ['Artikulli 1', 'Artikulli 2', 'Artikulli 3'];

    return (
      <ul className="list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  // Exercise 5: Form Element
  const FormComponent = () => {
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
      setName(e.target.value);
    };

    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Emri:
        </label>
        <input
          type="text"
          className="py-2 px-4 border rounded w-full"
          placeholder="Shkruaj emrin"
          value={name}
          onChange={handleInputChange}
        />
      </div>
    );
  };

  // Exercise 6: Button with Icon
  const IconButtonComponent = () => {
    return (
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 000 1.414l7 7a1 1 0 101.414-1.414L4.414 11H17a1 1 0 100-2H4.414l5.293-5.293A1 1 0 0010 3z"
            clipRule="evenodd"
          />
        </svg>
        Kthehu mbrapa
      </button>
    );
  };

  // Exercise 7: Image with Caption
  const ImageCaptionComponent = () => {
    return (
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Imazhi"
          className="rounded-full h-16 w-16 mr-4"
        />
        <p className="text-gray-700">
          Ky është imazhi me një përshkrim të tij.
        </p>
      </div>
    );
  };


  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Ushtrimet me HTML</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 1: Krijimi i Komponentës Bazë</h2>
        <CardComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 2: Krijimi i butonit</h2>
        <InteractiveComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 3: Theksimi i tekstit</h2>
        <HighlightComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 4: Lista e Elementeve</h2>
        <ListComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 5: Elementi i Formës</h2>
        <FormComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 6: Butoni me Ikone</h2>
        <IconButtonComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 7: Imazhi me Përshkrim</h2>
        <ImageCaptionComponent />
      </div>

    </div>
  );
}

export default UshtrimiHtml