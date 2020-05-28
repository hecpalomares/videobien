const WhereAreWe = () => {
  return (
    <div id='whereAreWe'>
      <h2>¿Dónde estamos?</h2>
      <div className='cities'>
        <div className='city'>
          <h5>Monterrey</h5>
          <img src='/cities/mty.png' alt='' loading='lazy' />
        </div>
        <div className='city'>
          <h5>Ciudad de México</h5>
          <img src='/cities/mexcity.png' alt='' loading='lazy' />
          <p>Proximamente</p>
        </div>
        <div className='city'>
          <h5>Guadalajara</h5>
          <img src='/cities/gdl.png' alt='' loading='lazy' />
          <p>Proximamente</p>
        </div>
      </div>
    </div>
  );
};

export default WhereAreWe;
