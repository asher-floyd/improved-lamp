import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Obfuscate from 'react-obfuscate';
// import DmApp from '@site/docs/damage-mapping/_dmapp.mdx';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Damage Mapping</>
          <p>
            <Link
              className="button button--secondary button--sm"
              to="/docs/damage-mapping">
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
    <Layout title={`Damage Mapping`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <p />
        {/* <DmApp /> */}
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Link
                className="button button--block button--primary"
                to="/docs/tags/damage-mapping">
                All Damage Mapping Docs
              </Link>
            </div>
            <div className="col col--6 button button--block button--primary">
              <Obfuscate
                email="info@mxrap.com"
                headers={{
                  subject: 'mXrap Damage Mapping',
                }}
              />
              Get Damage Mapping
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
