import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About the app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About the app</h1>
      </main>
    </div>
  );
}
