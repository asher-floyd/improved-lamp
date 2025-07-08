import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import UserShowcase from '@site/src/theme/UserShowcase';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Consortium</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Consortium`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <text className="padding-horiz--md">
          <>
            The mXrap consortium brings together many of the mining and
            consulting industry's top clients and sponsors to develop software
            tailored to their needs.
          </>
        </text>
        <UserShowcase />
      </main>
    </Layout>
  );
}
