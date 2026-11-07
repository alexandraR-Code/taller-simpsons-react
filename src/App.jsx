import { useState, useEffect } from 'react'
import PersonajeCard from './components/PersonajeCard'


function App() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerPersonajes() {
      try {
        const respuesta = await fetch("https://thesimpsonsapi.com/api/characters");
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los personajes");
        }
        const datos = await respuesta.json();
        setPersonajes(datos.results);
      } catch (error) {
        setError(error.message);

      } finally {
        setCargando(false);
      }
    }
    obtenerPersonajes();
  }, [])

  if (cargando) {
    return <p className='mensaje'>Cargando personajes de Springfield...</p>
  }

  if (error) {
    return <p className='mensaje error'>{error}</p>
  }

  return (
    <main className='contenedor'>
      <header className='encabezado'>
        <h1>Personajes de Los Simpson</h1>
        <p>Conoce a los habitantes de Springfield</p>
      </header>

      <section className='personaje-grid'>
        {personajes.map((personaje) => (
          <PersonajeCard key={personaje.id} personaje={personaje} />
        ))}
      </section>
    </main>
  );

}

export default App;