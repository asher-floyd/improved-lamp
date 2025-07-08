import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Paste Backfill Design</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Paste Backfill Design`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          mXrap's Paste Backfill Design app is designed to help engineers to do
          the following:
          <ul>
            <li>Calculate paste fill volumes and bund capacities</li>
            <li>
              Analyse UCS test results and fit a strength prediction model
            </li>
            <li>
              Assess the fill stresses and stability for vertical and horizontal
              exposures
            </li>
            <li>
              Analyse UCS test results and fit a strength prediction model
            </li>
            <li>
              Assess the pressure and friction profile of the paste reticulation
              path
            </li>
          </ul>
          <p />
          <b>Principal authors</b>: Stuart Tierney
          <b>Contributing authors</b>: Matthew Heinsen Egan, Dan Cumming-Potvin
          Tierney, S 2021, <i>mXrap software app, Paste Backfill Design</i>,
          Australian Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com">mxrap.com</Link>
          <img src="/img/Paste-volume.png" />{' '}
          <img src="/img/Paste-Binder-s.png" />
        </>
      </main>
    </Layout>
  );
}
