import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Obfuscate from 'react-obfuscate';

//import UtilitiesApp from '@site/docs/utilities/_utilitiesapp.mdx';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Utilities</>
          <p>
            <Link
              className="button button--secondary button--sm"
              to="/docs/utilities">
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
    <Layout title={`Utilities`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <p />
        {/* <UtilitiesApp /> */}
        <>
          During the course of our work, some apps are developed simply as
          utilities to make our and other users' lives easier and to form the
          components for re-use in other apps.
          <p />
          These apps are also available to the mXrap consortium members.
          <p />
          <Heading as="h2">Plane Grid Generator</Heading>
          <p />
          This app was developed for the purpose of easily generating cutting
          planes for displaying calculation results from other software and
          within mXrap apps. Survey files (dxf, dtm) or Map3D (inp) files are
          used as input geometry to the app. A user specified plane is
          descritised onto square elements with different sizes according to a
          user specified grading to generate smaller elements closer to
          excavation boundaries. The algorithm detects which element vertices
          are inside or outside excavations. The plane can be exported in
          different formats to be used in other software or other mXrap apps.
          <p />
          <Heading as="h3">Details</Heading>
          <p />
          Status: Beta
          <p />
          Principal author: Chun Wei Ho
          <p />
          Contributing authors: Paul Harris, Johan Wesseloo
          <p />
          Development support: Initially developed under{' '}
          <Link to="https://acg.uwa.edu.au/gsso-project/">
            Ground Support Systems Optimisation
          </Link>
          , Phase 1
          <p />
          Ho, CW, Harris, PC & Wesseloo, J 2017, _mXrap software app, Plane Grid
          Generator,_ version 1. Perth, Australian Centre for Geomechanics,
          Perth, <Link to="https://mxrap.com/">mxrap.com</Link>
          <p />
          <img src="/img/plane_grid_1.png" />{' '}
          <img src="/img/plane_grid_2.png" />{' '}
          <img src="/img/plane_grid_3.png" />
          <p />
          <Heading as="h2">Survey format converter</Heading>
          <p />
          The app imports 3D geometries from dxf, dtm, str, pnt and inp format
          and provides options to export the geometries in dtm, str and pnt
          format. Surveys can also be cut into smaller sections via a 3D
          selection.
          <p />
          <Heading as="h3">Details</Heading>
          <p />
          Principal authors: Chun Wei Ho
          <p />
          Contributing authors: Paul Harris, Matthew Heinsen Egan, Johan
          Wesseloo, Daniel Cumming-Potvin
          <p />
          Ho, C.W., Harris, P.C., Heinsen Egan, M. (2017) mXrap software app,
          Survey Format Converter, version 1. Perth, Western Australia: The
          Australian Centre for Geomechanics, The University of Western
          Australia. [mXrap.com](https://www.mxrap.com/)
        </>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Link
                className="button button--block button--primary"
                to="/docs/tags/utilities">
                All Utilities Docs
              </Link>
            </div>
            <div className="col col--6 button button--block button--primary">
              <Obfuscate
                email="info@mxrap.com"
                headers={{
                  subject: 'mXrap Utilities',
                }}
              />
              Get Utilities
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
