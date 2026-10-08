import { useState } from 'react';

function App() {
  const [ligado, setLigado] = useState(false);

  return (
    <div >
      <h2>{ligado ? 'ON' : 'OFF'}</h2>
      <button onClick={() => setLigado(!ligado)}  style={{
          backgroundColor: ligado ? 'green' : 'red',
          color: 'white',
          padding: '10px 20px',
          border: '10px',
          borderRadius: '10px',
          cursor: 'pointer'
        }}>{ligado ? 'Desligar' : 'Ligar'}</button>
    </div>
  );
}

export default App;