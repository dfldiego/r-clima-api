import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  // USE STATES
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  // EXTRACCIONES
  const { ciudad, pais } = busqueda;

  // USE EFFECTS
  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appid = '8e51ae07c30c1fdabbaea07af23ad60b';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        //console.log(resultado);
        setResultado(resultado);
        setConsultar(false);

        //Detecta si existe la ciudad en la API
        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }

      }
    }
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado} />
  }

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
              {componente}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
