import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import AppGrid from '@site/src/theme/AppGrid';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>Apps</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Apps`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          mXrap is a geotechnical analysis software platform in which suites of
          apps can be developed. The [ACG team](https://mxrap.com/mxrap-team/)
          and some of our users develop their own apps. The suites available in
          mXrap can be broadly summarised under the following areas of interest:
        </>
        <AppGrid />
        <>
          The following research projects are using mXrap as a technology
          transfer tool and apps will be developed under the research project
          for both internal use and for transferring the research outcomes to
          sponsor sites as useful software: - [Ground Support Systems
          Optimisation](https://gsso.com.au/) - [Stope
          Reconciliation](https://acg.uwa.edu.au/stope-design-phase-2/) Many of
          these apps have been developed over several years, with a number of
          them having roots in the ACG's [Mine Seismicity and Rockburst Risk
          Management
          project](https://acg.uwa.edu.au/mine-seismicity-and-rockburst-risk-management-project/).
        </>
      </main>
    </Layout>
  );
}
