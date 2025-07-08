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
          <>Surface Monitoring</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Surface Monitoring`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          The Prism Monitoring app provides the tools to import and evaluate
          prism data which is routinely used to monitor ground movements, for
          example, slopes in open pits, underground drives or subsidence zones
          associated with caving. Displacement and rate data are plotted in 3D
          as a vector and interpolated values on triangulations, charted over
          time, and summarised in tables. Data from the period of interest can
          be selected for individual, multiple, or predefined zones of prisms.
          Additional analysis options include piecewise linear fitting to assess
          rates of deformation and persistent quality tags for excluding
          erroneous data.
          <p />
          <b>Principal authors</b>: Dan Cumming-Potvin
          <b>Contributing authors</b>: Paul Harris, Kyle Woodward
          Cumming-Potvin, D, 2020, _mXrap software app_, _Prism Monitoring_,
          Australian Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          <img src="/img/prism_1.png" />{' '}
          <img src=" /static/Prism-Tracking-monitor_2.png" />{' '}
          <img src="/img/prism-displacement_3.png" />
        </>
      </main>
    </Layout>
  );
}
