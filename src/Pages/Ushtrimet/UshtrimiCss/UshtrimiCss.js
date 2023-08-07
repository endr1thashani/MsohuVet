import React, { useState } from 'react';

const UshtrimiCSS = () => {
  // Exercise 1: Basic Styling
  const BasicStylingComponent = () => {
    return (
      <div className="bg-blue-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-center text-blue-800">
          Stilizimi Bazë
        </h2>
        <p className="mt-2 text-gray-700">Ky tekst është stilizuar me ngjyrë.</p>
      </div>
    );
  };

  // Exercise 2: Flex
  const FlexLayoutComponent = () => {
    return (
      <div className="flex space-x-4">
        <div className="bg-blue-200 p-4 rounded-lg">
          <p className="text-gray-700">Elementi 1</p>
        </div>
        <div className="bg-green-200 p-4 rounded-lg">
          <p className="text-gray-700">Elementi 2</p>
        </div>
      </div>
    );
  };
  // Exercise 3: Hover Effect
  const HoverEffectComponent = () => {
    return (
      <button className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Efekti kur mban kursorin
      </button>
    );
  };

  // Exercise 4: Gradient Background
  const GradientBackgroundComponent = () => {
    return (
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg">
        <p className="text-white">Fon i Gradientit</p>
      </div>
    );
  };

  // Exercise 5: Shadow Effect
  const ShadowEffectComponent = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="text-gray-700">Efekti i Hijeve</p>
      </div>
    );
  };


  // Exercise 6: Background Image
  const BackgroundImageComponent = () => {
    return (
      <div
        className="bg-cover bg-center h-32 p-4 rounded-lg"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/320x180)',
        }}
      >
        <p className="text-white">Imazhi i Fones</p>
      </div>
    );
  };

  // Exercise 7: Transition Effect
  const TransitionEffectComponent = () => {
    const [isActive, setIsActive] = useState(false);

    return (
      <button
        className={`py-2 px-4 bg-blue-500 text-white rounded-lg ${
          isActive ? 'opacity-50' : 'hover:opacity-75'
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        Efekti i Kalimit
      </button>
    );
  };


  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Ushtrimet CSS</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 1: Stilizimi Bazë</h2>
        <BasicStylingComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 2: Stilizimi me Flex</h2>
        <FlexLayoutComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 3: Imazh Fone</h2>
        <BackgroundImageComponent />
      </div>


      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 4: Efekti Hover</h2>
        <HoverEffectComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 5: Efekti i Hijeve</h2>
        <ShadowEffectComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 6: Gradienti</h2>
        <GradientBackgroundComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 7: Efekti i Transition</h2>
        <TransitionEffectComponent />
      </div>
      
    </div>
  );
};

export default UshtrimiCSS;
