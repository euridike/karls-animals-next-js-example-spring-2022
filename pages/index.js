import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const headerStyles = css`
  padding: 8px 14px;
  background: #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  > div > a + a {
    marging-left: 10px;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="DAshboard for application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header css={headerStyles}>
        🐵
        <Link href="/team">Team</Link>
        <div>
          <Link href="/about">About</Link>
        </div>
      </header>

      <main>
        <h1>Animal park</h1>

        <p>Get started by editing</p>
      </main>
    </div>
  );
}
