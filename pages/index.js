import Head from 'next/head'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header';
import WhereAreWe from '../components/WhereAreWe';
import Problem from '../components/Problem';
import Solutions from '../components/Solutions';
import Prepro from '../components/Prepro';
import Prod from '../components/Prod';
import Postpro from '../components/Postpro';

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Problem />
        <AboutUs />
        <WhereAreWe />
        {/* <Solutions /> */}
        {/* <hr></hr> */}
        {/* <Prepro /> */}
        {/* <hr></hr> */}
        <Prod />
        {/* <hr></hr> */}
        {/* <Postpro /> */}
      </main>

      <footer>
        <a href='https://hectorpalomares.com' target='_blank' rel='noopener noreferrer'>
          VideoBien™ <br /> by Héctor Palomares
        </a>
      </footer>

      <style jsx>{`
        main  {
          margin-bottom: 2rem;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2em;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
