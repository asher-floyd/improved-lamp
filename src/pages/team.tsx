import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import TeamShowcase from '../theme/TeamShowcase';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Team</>
        </Heading>
      </div>
    </header>
  );
}
export default function Page(): ReactNode {
  return (
    <Layout title={`Team`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <TeamShowcase />
      </main>
    </Layout>
  );
}
