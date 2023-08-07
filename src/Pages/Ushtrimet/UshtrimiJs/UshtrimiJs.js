import React,{ useState } from 'react'

const UshtrimiJs = () => {
  // Ushtrimi 1: Ndërrimi i Tekstit
  const ToggleTextComponent = () => {
    const [eshteFshehur, setEshteFshehur] = useState(false);

    const ndryshoTekstin = () => {
      setEshteFshehur(!eshteFshehur);
    };

    return (
      <div>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          onClick={ndryshoTekstin}
        >
          Ndërrimi i Tekstit
        </button>
        {eshteFshehur && <p className="mt-4 text-gray-700">Teksti është fshehur</p>}
      </div>
    );
  };

  // Ushtrimi 2: Numruesi
  const NumeruesiComponent = () => {
    const [numri, setNumri] = useState(0);

    const rritNumrin = () => {
      setNumri(numri + 1);
    };

    const zvogeloNumrin = () => {
      setNumri(numri - 1);
    };

    return (
      <div>
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-lg mr-2"
          onClick={zvogeloNumrin}
        >
          -
        </button>
        <span className="text-xl font-semibold">{numri}</span>
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-lg ml-2"
          onClick={rritNumrin}
        >
          +
        </button>
      </div>
    );
  };

  // Ushtrimi 3: Gjeneratori i Ngjyrave të Rastit
  const GjeneratoriNgjyraveComponent = () => {
    const [ngjyraRandom, setNgjyraRandom] = useState('#000000');

    const gjeneroNgjyreRandom = () => {
      const ngjyreRandomHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setNgjyraRandom(ngjyreRandomHex);
    };

    return (
      <div>
        <button
          className="py-2 px-4 bg-purple-500 text-white rounded-lg"
          onClick={gjeneroNgjyreRandom}
        >
          Gjenero Ngjyrë
        </button>
        <div
          className="w-20 h-20 mt-4 rounded-lg"
          style={{ backgroundColor: ngjyraRandom }}
        ></div>
      </div>
    );
  };

  // Ushtrimi 4: Lista e Punëve
  const ListaPuneveComponent = () => {
    const [puna, setPuna] = useState('');
    const [punet, setPunet] = useState([]);

    const shtoPune = () => {
      if (puna.trim() !== '') {
        setPunet([...punet, puna]);
        setPuna('');
      }
    };

    const fshijPune = (indeksi) => {
      const punetEperdorura = punet.filter((_, indeksiAktual) => indeksiAktual !== indeksi);
      setPunet(punetEperdorura);
    };

    return (
      <div>
        <input
          type="text"
          className="py-2 px-4 border rounded-l"
          placeholder="Shto punë..."
          value={puna}
          onChange={(e) => setPuna(e.target.value)}
        />
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-r"
          onClick={shtoPune}
        >
          Shto
        </button>
        <ul className="mt-4">
          {punet.map((punaAktuale, indeksi) => (
            <li
              key={indeksi}
              className="flex items-center justify-between py-2 px-4 border rounded"
            >
              {punaAktuale}
              <button
                className="text-red-500"
                onClick={() => fshijPune(indeksi)}
              >
                Fshij
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Ushtrimi 5: Kontrolluesi i Palindromës
  const KontrolluesiPalindromesComponent = () => {
    const [teksti, setTeksti] = useState('');
    const [eshtePalindrom, setEshtePalindrom] = useState(false);

    const kontrolloPalindromen = () => {
      const tekstiPaHapsira = teksti.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
      const tekstiKundor = tekstiPaHapsira.split('').reverse().join('');
      setEshtePalindrom(tekstiPaHapsira === tekstiKundor);
    };

    return (
      <div>
        <input
          type="text"
          className="py-2 px-4 border rounded-l w-full"
          placeholder="Shkruaj tekst..."
          value={teksti}
          onChange={(e) => setTeksti(e.target.value)}
        />
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-r"
          onClick={kontrolloPalindromen}
        >
          Kontrollo
        </button>
        {eshtePalindrom && (
          <p className="mt-4 text-green-600">Ky është një palindromë!</p>
        )}
      </div>
    );
  };

  // Ushtrimi 6: Kuptimei
  const KuptimeiComponent = () => {
    const [teksti, setTeksti] = useState('');
    const [kuptimi, setKuptimi] = useState('');

    const gjejKuptimin = () => {
      // Logjika për gjetjen e kuptimeve
      setKuptimi('Kuptimi i gjetur këtu...');
    };

    return (
      <div>
        <input
          type="text"
          className="py-2 px-4 border rounded-l w-full"
          placeholder="Shkruaj tekst..."
          value={teksti}
          onChange={(e) => setTeksti(e.target.value)}
        />
        <button
          className="py-2 px-4 bg-yellow-500 text-white rounded-r"
          onClick={gjejKuptimin}
        >
          Gjej Kuptimin
        </button>
        {kuptimi && <p className="mt-4 text-gray-700">{kuptimi}</p>}
      </div>
    );
  };

  // Ushtrimi 7: Kalkulatori
  const KalkulatoriComponent = () => {
    const [numri1, setNumri1] = useState('');
    const [numri2, setNumri2] = useState('');
    const [rezultati, setRezultati] = useState('');

    const llogarit = (operacioni) => {
      if (!numri1 || !numri2) {
        return;
      }
      switch (operacioni) {
        case '+':
          setRezultati(Number(numri1) + Number(numri2));
          break;
        case '-':
          setRezultati(Number(numri1) - Number(numri2));
          break;
        case '*':
          setRezultati(Number(numri1) * Number(numri2));
          break;
        case '/':
          setRezultati(Number(numri1) / Number(numri2));
          break;
        default:
          setRezultati('');
      }
    };

    return (
      <div>
        <input
          type="number"
          className="py-2 px-4 border rounded-l w-full"
          placeholder="Numri 1"
          value={numri1}
          onChange={(e) => setNumri1(e.target.value)}
        />
        <input
          type="number"
          className="py-2 px-4 border w-full"
          placeholder="Numri 2"
          value={numri2}
          onChange={(e) => setNumri2(e.target.value)}
        />
        <div className="mt-4 flex items-center space-x-4">
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
            onClick={() => llogarit('+')}
          >
            +
          </button>
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-lg"
            onClick={() => llogarit('-')}
          >
            -
          </button>
          <button
            className="py-2 px-4 bg-green-500 text-white rounded-lg"
            onClick={() => llogarit('*')}
          >
            *
          </button>
          <button
            className="py-2 px-4 bg-yellow-500 text-white rounded-lg"
            onClick={() => llogarit('/')}
          >
            /
          </button>
        </div>
        {rezultati && <p className="mt-4 text-gray-700">Rezultati: {rezultati}</p>}
      </div>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Ushtrimet JavaScript me React + Tailwind CSS</h1>

      {/* Renderi i komponentëve të ushtrimeve */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 1: Ndërrimi i Tekstit</h2>
        <ToggleTextComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 2: Numruesi</h2>
        <NumeruesiComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 3: Gjeneratori i Ngjyrave të Rastit</h2>
        <GjeneratoriNgjyraveComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 4: Lista e Punëve</h2>
        <ListaPuneveComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 5: Kontrolluesi i Palindromës</h2>
        <KontrolluesiPalindromesComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 6: Kuptime</h2>
        <KuptimeiComponent />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ushtrimi 7: Kalkulatori</h2>
        <KalkulatoriComponent />
      </div>
    </div>
  );
}

export default UshtrimiJs