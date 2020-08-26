import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // USE STATES
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, setConsultar] = useState(false);

  // EXTRACCIONES
  const { ciudad, pais } = busqueda;

  // USE EFFECTS
  useEffect(() => {
    const consultarAPI = async () => {

    }
    consultarAPI();
  }, [consultar]);

  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
