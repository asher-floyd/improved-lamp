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
          <>Instrumentation</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Instrumentation`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          ## Extensometers ** _Description: _ ** This app provides the tools to
          import and evaluate various formats of extensometer data.Data is
          assessed over the life of the instrument and for a period of
          interest.Displacement is expressed as a cumulative value over the
          instrument length and per node values.Instruments are plotted in 3D
          with markers displaying displacement measurement along with nearby
          seismic events and blasts.Cumulative and per node displacement values
          are charted over time and summarised in tables.
          <p />_ ** Principal author:** _ Kyle Woodward _ ** Contributing
          author:** _ Paul Harris Woodward, KR 2017, _mXrap software app,
          Extensometers_, Australian Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          <img src="/img/Extos_4.png" />
          ## In Situ Stress Monitoring _ ** Description:** _ Continual
          monitoring of in situ stress is done by installing stress measurement
          devices like the CSIRO stress cell, or vibrating wire stress cell, and
          monitoring the measured changes over time.This app receives the strain
          measurement recorded by the stress measurement device and inverts for
          the in situ stress state.This allows for the analysis of changes in
          stress magnitude and orientation over time.
          <p />_ ** Principal author:** _ Kyle Woodward _ ** Contributing
          author:** _ Paul Harris Woodward, KR 2017, _mXrap software app, In
          Situ Stress Monitoring_, Australian Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
          <img src="/img/In - Situ - stress - monitoring - 1.png" />
          <img src=" /img/In - Situ - stress - monitoring - 2.png" />
        </>
      </main>
    </Layout>
  );
}
