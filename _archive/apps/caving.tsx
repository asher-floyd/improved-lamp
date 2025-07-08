import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Obfuscate from 'react-obfuscate';

//import CavingApp from '@site/docs/caving/_cavingapp.mdx';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Caving</>
          <p>
            <Link
              className="button button--secondary button--sm"
              to="/docs/caving">
              Documentation
            </Link>
          </p>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Caving`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <p />

        {/* <CavingApp /> */}

        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Link
                className="button button--block button--primary"
                to="/docs/tags/caving">
                All Caving Docs
              </Link>
            </div>
            <div className="col col--6 button button--block button--primary">
              <Obfuscate
                email="info@mxrap.com"
                headers={{
                  subject: 'mXrap Caving',
                }}
              />
              Get Stope Reconciliation
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
