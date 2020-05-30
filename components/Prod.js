const Prod = () => {
  return (
    <div id='prod'>
      <h2>¿Qué ofrecemos?</h2>
      <div className='services'>
        <ul>
          <h3>Renta de equipo de alta gama</h3>
          <li>Cámara Alta Definición (4k)</li>
          <li>Micrófono calidad de estudio</li>
          <li>Iluminación profesional</li>
          <li>Pantalla Verde</li>
        </ul>
        <ul>
          <h3>Confiabilidad</h3>
          <li>Conexión a internet de fibra óptica con 100 mbps</li>
          <li>Cuarto con audio aislado</li>
          <li>Conexión a internet alterna</li>
          <li>Experiencia en cómo hacerlo bien</li>
        </ul>
      </div>
      <h2>Casos de Uso</h2>
      <p>Mueve el cursor o manten presionado para ver el antes y el después.</p>
      <div className='prod__images'>
        <div className='prod__image'>
          <div className='prod__image--before'>
            <img src='/prod_1_4px_reduced.jpg' alt='' />
            <span>Antes</span>
          </div>
          <div className='prod__image--after'>
            <img src='/prod_1_reduced.jpg' alt='' />
            <span>Después</span>
          </div>
        </div>
        <div className='prod__image'>
          <div className='prod__image--before'>
            <img src='/gates_0.jpg' alt='' />
            <span>Antes</span>
          </div>
          <div className='prod__image--after'>
            <img src='/gates_1.jpg' alt='' />
            <span>Después</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prod;
