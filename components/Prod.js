const Prod = () => {
  return (
    <div id='prod'>
      <h2>Renta e instalación de equipo profesional</h2>
      <ul>
        <li>Cámara</li>
        <li>Microfono</li>
        <li>Luz artificial</li>
        <li>Proyector</li>
        <li>Salón de evento</li>
      </ul>
      <div className='prod__images'>
        <div className='prod__image'>
          <img src='/prod_1_4px_reduced.jpg' alt='' loading="lazy" />
          <span>Antes</span>
        </div>
        <div className='prod__image'>
          <img src='/prod_1_reduced.jpg' alt='' loading="lazy" />
          <span>Despues</span>
        </div>
      </div>
    </div>
  );
};

export default Prod;
