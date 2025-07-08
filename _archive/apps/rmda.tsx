import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ReactPlayer from 'react-player/vimeo';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Rock Mass Data Analyser</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Rock Mass Data Analyser`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          The Rock Mass Data Analyser(RMDA) suite allows a user the ability to
          input various types of geotechnical data into mXrap, creating a
          geotechnical database of borehole and mapping data, which may be
          easily visualised and analysed in 3D, on charts and in stereonets.Thus
          far, the suite has been developed to allow for the visualisation and
          assessment of:
          <ul>
            <li>Rock mass quality data (e.g.RQD, RMR, Q, Q', GSI, etc.)</li>
            <li>
              Structural data (i.e.joint orientations and joint conditions from
              scanline mapping and logging data)
            </li>
            <li>Laboratory test results (e.g.UCS, TCS, and BTS)</li>
          </ul>
          Once geotechnical data have been imported, there are multiple filter
          options available for borehole IDs, lithologies, data sources, joint
          sets, and rock strength test types. Pre - set legends for all
          geotechnical data are also provided within the app, as well as the
          ability to select and filter data based on 3D locations. Histograms
          and CDF curves of rock mass quality data are also available for the
          various lithologies and boreholes in the database.These lithologies
          may be combined or plotted separately. The ability to select data
          based on 3D location also provides the user the opportunity to create
          histograms for a specific geotechnical domain or area of interest.Both
          scanline mapping data and borehole structural logs can be imported and
          viewed in 3D and on stereonets. Once structural data are imported, the
          user has the option to assign discontinuity sets on stereonets. As
          sets are assigned or as filters are applied, real time updates to
          discontinuity set statistics are provided. For intact strength
          laboratory test results, along with visualisation of the test result
          locations along boreholes, Hoek-Brown failure envelopes can be
          produced for specific lithologies, a group of data or for specific
          boreholes. The RMDA is also integrated with mXrap's discrete fracture
          network(DFN) generation app and our data collection web app(which
          allows for efficient scanline mapping with the use of a tablet).
          Currents plans for the RMDA include the development of a section for
          the creation and analysis of geotechnical and structural domains and
          for the analysis of window mapping and point load test data.The RMDA
          will also act a feeder app into the stope reconciliation and
          geotechnical block model applications, which are currently under
          development.
          <ReactPlayer
            className="centered"
            controls
            src="https://vimeo.com/973814369/54a352b745"
          />
          <img src="/img/rock-mass-data-analyser.png" />{' '}
          <img src="/img/rockmass-data-analyser-updates" />{' '}
          https://mxrap.com/mxvideos/#/page/RMDA
          <Link to="https://mxrap.com/mxvideos/#/page/RMDA">
            Rock Mass Data Analyser Video Library
          </Link>
          See the suite in action and access training resources on mXvideos.
          <Heading as="h3">Details</Heading>
          <b>Principal author</b>: Denisha Sewnun
          <b>Contributing authors</b>: Daniel Cumming - Potvin, Johan Wesseloo,
          Kyle Woodward Sewnun, D, Cumming - Potvin, D, Wesseloo, J & Woodward,
          KR 2020, _mXrap software app, Rock Mass Data Analyser_, Australian
          Centre for Geomechanics, Perth,{' '}
          <Link to="https://mxrap.com/">mxrap.com</Link>
        </>
      </main>
    </Layout>
  );
}
