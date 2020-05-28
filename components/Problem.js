import Typewriter from 'typewriter-effect';

const Problem = () => {
  return (
    <div id='top-section'>
      <h1>
        <span>Mis videoconferencias </span>
        <span style={{ width: '8px' }}> </span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .changeDeleteSpeed(50)
              .pauseFor(500)
              .typeString(' se ven borrosas.')
              .pauseFor(600)
              .deleteAll()
              .typeString(' se escuchan mal.')
              .pauseFor(600)
              .deleteAll()
              .typeString(' son complicadas.')
              .pauseFor(600)
              .deleteAll()
              .typeString(
                'pueden tener <span class="bold underlined">calidad de estudio</span> con un clic.',
              )
              .callFunction(() => {
                console.log(this);
              })
              .start();
          }}
        />
      </h1>
    </div>
  );
};

export default Problem;
