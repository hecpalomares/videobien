import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import '../styles.scss';

const isServer = typeof window === 'undefined';
const AOS = !isServer ? require('aos') : null;

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));
  }

  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>VideoBien</title>
        </Head>
        <div className='root'>
          <div className='main-content'>
            <Component {...pageProps} />
          </div>
        </div>
      </>
    );
  }
}
