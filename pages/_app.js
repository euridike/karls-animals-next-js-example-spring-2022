import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html {
            background: #7bba8c;
          }
        `}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
