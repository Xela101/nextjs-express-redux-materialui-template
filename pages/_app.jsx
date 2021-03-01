import '../styles/global.css';
import App from 'next/app';
import { Fragment } from 'react';
import { ReactReduxContext } from 'react-redux';
import wrapper from '../redux/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        pathname: ctx.pathname,
      },
    };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout ? Component.Layout : Fragment;
    return (
      <Layout>
        <ReactReduxContext.Consumer>
          {({ store }) => <Component {...pageProps} store={store} />}
        </ReactReduxContext.Consumer>
      </Layout>
    );
  }
}

export default wrapper.withRedux(MyApp, { debug: false });
