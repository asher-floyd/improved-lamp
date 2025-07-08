import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ReactPlayer from 'react-player/vimeo';
import AppGrid from '../theme/AppGrid';
import Obfuscate from 'react-obfuscate';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <>What is mXrap?</>
        </Heading>
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`What is mXrap?`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          mXrap is a software platform that provides geotechnical engineers with
          many data analysis, monitoring and investigation tools. mXrap users
          can also develop their own apps using the in-built tools. The ACG's
          mXrap team has developed a number of apps, which focus on allowing
          users to make high-quality geotechnical decisions as quickly and
          easily as possible. These apps cover:
          <AppGrid />
          Click here https://mxrap.com/papers to view a list of papers
          referencing mXrap. Licence fees are based on the number of licences
          and which apps are required. Get in touch for information.
          <Heading as="h2">History</Heading>
          mXrap (and its predecessor, MSRAP) were developed under the ACG's Mine
          Seismicity and Rockburst Risk Management project. As part of this
          project, the software served the purpose of a technology transfer tool
          to bring the project outcomes to the sponsor sites. The software
          design and capabilities, however, created the opportunity to extend
          its use outside the field of mining induced seismicity from which it
          originated. Since 2015, the development of mXrap was separated from
          the ACG's research project and further development is sponsored by the
          mXrap consortium https://mxrap.com/consortium/.
          <Heading as="h2">
            A geotechnical data analysis and monitoring platform
          </Heading>
          <ReactPlayer controls src="https://vimeo.com/974845277/d0006c48ee" />
          <Heading as="h2">The mXrap platform</Heading>
          mXrap is a software platform that provides geotechnical engineers with
          many data analysis, monitoring and investigation tools. mXrap users
          can also develop their own apps using the in-built app editor.
          <Heading as="h2">mXrap in action</Heading>
          Read dozens of peer-reviewed case studies demonstrating real-world
          usage of mXrap in a diverse range of mines. Published Papers
          https://mxrap.com/papers/
          <Heading as="h2">Trusted by mines worldwide</Heading>
          mXrap is deployed at over 70 mine sites worldwide, as well as being
          used a valuable tool for consulting and academic research. Meet the
          consortium https://mxrap.com/consortium/
          <Heading as="h2">Support</Heading>
          One-to-one support is included with your licence, over email, phone,
          or remote screen sharing. We have geotechnical and software
          engineering team members based in both Australia and Canada. Meet the
          team https://mxrap.com/mxrap-team/
          https://www.linkedin.com/company/mxrap
          <Heading as="h2">Build your own custom apps</Heading>
          Develop custom apps and extensions tailored for your site's specific
          needs using mXrap's powerful built-in app editor. Code your own
          functions using JavaScript or get in touch with us for bespoke app
          development. The Australian Centre for Geomechanics (ACG) is a
          not-for-profit mining research centre based at The University of
          Western Australia, Perth. The ACG undertakes research, education and
          training activities in the geomechanics disciplines to provide
          industry with the necessary tools and knowledge to ensure that safety
          is not simply a top priority on par with productivity, but rather an
          ethic that guides everything.
          <Heading as="h2">Research projects</Heading>
          The ACG continues to effectively respond to industry's needs by
          initiating innovative research that provides ongoing benefits and
          viabilities instead of “quick-fix” solutions. Ground Support Systems
          Optimisation https://gsso.com.au/ Seismic Risk Management Process
          https://acg.uwa.edu.au/srmp/Home
          <Heading as="h2">Events</Heading>
          The Australian Centre for Geomechanics presents numerous events
          conferences, seminars, short courses and workshops each year for the
          global mining industry. View our upcoming events and conferences
          https://acg.uwa.edu.au/events/ Online Repository of Conference
          Proceedings https://papers.acg.uwa.edu.au/
        </>
      </main>
    </Layout>
  );
}
