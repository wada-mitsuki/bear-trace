import 'src/styles/globals.css';

import { ConfigProvider as AntdConfigProvider } from 'antd';
import jaJP from 'antd/lib/locale/ja_JP';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'src/store';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <AntdConfigProvider locale={jaJP}>
          <Component {...pageProps} />
        </AntdConfigProvider>
      </Provider>
    </>
  );
};

export default MyApp;
