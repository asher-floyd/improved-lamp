import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
// import SupportPage from '@site/docs/support.mdx';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Support</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Support`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        {/* <SupportPage /> */}
      </main>
    </Layout>
  );
}
