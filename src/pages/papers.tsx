import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import PaperList from '@site/src/theme/PaperList';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Papers</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Papers`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <section>
          <p>
            This page provides a list of some of the literature that we are
            aware of, that utilises mXrap or its predecessor MS-RAP or makes
            reference to this software.
          </p>
          <p>
            If you would like to cite mXrap, please use the following reference:
          </p>
          <blockquote>
            Harris, PC, Heinsen Egan, M, Niedzielski LG & Cumming-Potvin, D
            2024, mXrap software, version 6.0, Australian Centre for
            Geomechanics, The University of Western Australia, Perth.
            https://mxrap.com/
          </blockquote>
        </section>
        <br></br>
        <PaperList />
      </main>
    </Layout>
  );
}
