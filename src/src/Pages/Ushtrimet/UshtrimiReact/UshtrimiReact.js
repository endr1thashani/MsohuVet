import React, { useState } from 'react';

const UshtrimiReact = () => {
  const DyUshqimet = () => {
    const [ushqimi1, setUshqimi1] = useState('Pizza');
    const [ushqimi2, setUshqimi2] = useState('Burger');

    const ndryshoUshqimet = () => {
      setUshqimi1('Sallatë');
      setUshqimi2('Sendviç');
    };

    return (
      <div className="my-4">
        <p className="mb-2">Ushqimi 1: {ushqimi1}</p>
        <p className="mb-2">Ushqimi 2: {ushqimi2}</p>
        <button onClick={ndryshoUshqimet} className="bg-blue-500 text-white px-4 py-2 rounded">
          Ndrysho Ushqimet
        </button>
      </div>
    );
  };

  const Kalkulatori = () => {
    const [numri1, setNumri1] = useState('');
    const [numri2, setNumri2] = useState('');
    const [rezultati, setRezultati] = useState('');

    const llogarit = () => {
      const rez = Number(numri1) + Number(numri2);
      setRezultati(rez);
    };

    return (
      <div className="my-4">
        <input
          type="text"
          placeholder="Shkruaj numrin 1"
          className="p-2 border rounded"
          value={numri1}
          onChange={(e) => setNumri1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Shkruaj numrin 2"
          className="p-2 border rounded ml-2"
          value={numri2}
          onChange={(e) => setNumri2(e.target.value)}
        />
        <button onClick={llogarit} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Llogarit
        </button>
        <p className="mt-2">Rezultati: {rezultati}</p>
      </div>
    );
  };

  const NgjyraTekstit = () => {
    const [ngjyra, setNgjyra] = useState('black');

    const ndryshoNgjyre = () => {
      setNgjyra('blue');
    };

    return (
      <div className="my-4">
        <p style={{ color: ngjyra }} className="mb-2">
          Ky është një tekst me ngjyrë.
        </p>
        <button
          onClick={ndryshoNgjyre}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ndrysho Ngjyrën
        </button>
      </div>
    );
  };

  const ButoniInteraktiv = () => {
    const [teksti, setTeksti] = useState('Kliko');

    const ndryshoTekstin = () => {
      setTeksti('Klikuar');
    };

    return (
      <div className="my-4">
        <button
          onClick={ndryshoTekstin}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {teksti}
        </button>
      </div>
    );
  };

  const LlogaritesiMoshes = () => {
    const [vitiLindjes, setVitiLindjes] = useState('');
    const [mosha, setMosha] = useState('');

    const llogaritMoshen = () => {
      const vitAktual = new Date().getFullYear();
      const mosh = vitAktual - Number(vitiLindjes);
      setMosha(mosh);
    };

    return (
      <div className="my-4">
        <input
          type="number"
          placeholder="Viti i lindjes"
          className="p-2 border rounded"
          value={vitiLindjes}
          onChange={(e) => setVitiLindjes(e.target.value)}
        />
        <button
          onClick={llogaritMoshen}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Llogarit Moshën
        </button>
        <p className="mt-2">Mosha: {mosha}</p>
      </div>
    );
  };

  const GjatesiaVendit = () => {
    const [vendi, setVendi] = useState('');
    const [gjatesia, setGjatesia] = useState('');

    const gjejGjatesine = () => {
      if (vendi.toLowerCase() === 'tirana') {
        setGjatesia('Vendi është në zonën mesdhetare.');
      } else {
        setGjatesia('Vendi nuk është në zonën mesdhetare.');
      }
    };

    return (
      <div className="my-4">
        <input
          type="text"
          placeholder="Vendi"
          className="p-2 border rounded"
          value={vendi}
          onChange={(e) => setVendi(e.target.value)}
        />
        <button
          onClick={gjejGjatesine}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Gjej Gjatësinë
        </button>
        <p className="mt-2">{gjatesia}</p>
      </div>
    );
  };

  const TekstiZmadhoNgrito = () => {
    const [teksti, setTeksti] = useState('');
    const [zmadhuar, setZmadhuar] = useState('');

    const zmadhoTekstin = () => {
      const zmadhuar = teksti.toUpperCase();
      setZmadhuar(zmadhuar);
    };

    const ngritoTekstin = () => {
      const ngritur = teksti.toLowerCase();
      setZmadhuar(ngritur);
    };

    return (
      <div className="my-4">
        <input
          type="text"
          placeholder="Shkruaj tekst"
          className="p-2 border rounded"
          value={teksti}
          onChange={(e) => setTeksti(e.target.value)}
        />
        <button
          onClick={zmadhoTekstin}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Zmadho
        </button>
        <button
          onClick={ngritoTekstin}
          className="bg-red-300 text-white px-4 py-2 rounded ml-2"
        >
          Ngrit
        </button>
        <p className="mt-2">{zmadhuar}</p>
      </div>
    );
  };

  const VleraMaksimumit = () => {
    const [numrat, setNumrat] = useState('');
    const [maksimumi, setMaksimumi] = useState('');

    const gjejMaksimumin = () => {
      const numraArr = numrat.split(',').map(Number);
      const maxNumri = Math.max(...numraArr);
      setMaksimumi(maxNumri);
    };

    return (
      <div className="my-4">
        <input
          type="text"
          placeholder="Shkruaj numrat (ndaj me presje)"
          className="p-2 border rounded"
          value={numrat}
          onChange={(e) => setNumrat(e.target.value)}
        />
        <button
          onClick={gjejMaksimumin}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Gjej Maksimumin
        </button>
        <p className="mt-2">Maksimumi: {maksimumi}</p>
      </div>
    );
  };

  const Timeri = () => {
    const [sekondat, setSekondat] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const filloTimerin = () => {
      if (intervalID) return; // Parandalon fillojen e më shumë se një intervali
      const interval = setInterval(() => {
        setSekondat((sek) => sek + 1);
      }, 1000);
      setIntervalID(interval);
    };

    const ndaloTimerin = () => {
      if (intervalID) {
        clearInterval(intervalID);
        setIntervalID(null);
      }
    };

    return (
      <div className="my-4">
        <p>Koha e kaluar: {sekondat} sekonda</p>
        <div className="flex">
          <button
            onClick={filloTimerin}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Fillo Timerin
          </button>
          <button
            onClick={ndaloTimerin}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Ndalo Timerin
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Ushtrimet Bazike të ReactJS</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 1: Të Dyja Ushqimet</h2>
        <div className="border p-4 rounded">
          <DyUshqimet />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 2: Kalkulatori</h2>
        <div className="border p-4 rounded">
          <Kalkulatori />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 3: Ngjyra e Tekstit</h2>
        <div className="border p-4 rounded">
          <NgjyraTekstit />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 4: Butoni Interaktiv</h2>
        <div className="border p-4 rounded">
          <ButoniInteraktiv />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 5: Llogaritësi i Moshës</h2>
        <div className="border p-4 rounded">
          <LlogaritesiMoshes />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 6: Vendi i Gjatësisë</h2>
        <div className="border p-4 rounded">
          <GjatesiaVendit />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 7: Zmadho/Ngrito Tekstin</h2>
        <div className="border p-4 rounded">
          <TekstiZmadhoNgrito />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 8: Vlera e Maksimumit</h2>
        <div className="border p-4 rounded">
          <VleraMaksimumit />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 9: Timeri</h2>
        <div className="border p-4 rounded">
          <Timeri />
        </div>
      </div>
    </div>
  );
};

export default UshtrimiReact;
