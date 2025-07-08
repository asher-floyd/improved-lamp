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
          <>Inspections and Data Entry</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Inspections and Data Entry`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          This app is a general-purpose data entry app designed for offline use
          with tablet devices which can be customised to fit each site's exact
          needs. The app allows simple and fast input of multiple data types
          (selection, text, numerical inputs, orientation etc.) as well as
          attaching photos and sketches to reports. Inputs can be grouped into
          sections, or into different pages for easier use. The location of
          inspections can be georeferenced using the mineplans and a polyline
          system to show where the inspection was done. Data can also be
          attached to this polyline, to indicate different data in different
          areas. An example of this is rock mass characterisation mapping, where
          different sections of drive can be assigned values.
          <img src="/img/Inspections-Polylines-1.png" />{' '}
          <img src="/img/Inspections-mXrap.png" />
          The application allows you to access data from past reports.
          Additionally, this view can be exported as a PDF document, which can
          then be presented to management and others as needed. The desktop
          mXrap side of the app is also completely customisable, and the mXrap
          team can help you to build exactly what you want to achieve the
          analysis you need to do. Tables with inspections registers, charts for
          monthly reports, 3D views to show the underground locations of
          inspections and even automatically generated reports are all possible.
        </>
      </main>
    </Layout>
  );
}
