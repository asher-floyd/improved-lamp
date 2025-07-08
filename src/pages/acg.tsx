import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function PageHeader() {
  return (
    <header>
      <div
        className="hero heroPlain"
        style={{
          justifyContent: 'center',
          justifyItems: 'center',
        }}>
        <ThemedImage
          style={{
            width: '50%',
            height: 'auto',
          }}
          alt="Australian Centre for Geomechanics"
          sources={{
            light: useBaseUrl('/img/branding/ACG_full_white.png'),
            dark: useBaseUrl('/img/branding/ACG_full_white.png'),
          }}
        />
      </div>
    </header>
  );
}

export default function Page(): ReactNode {
  return (
    <Layout title={`Australian Centre for Geomechanics`}>
      <PageHeader />
      <main className="container container--fluid margin-vert--lg">
        <>
          <p>
            The Australian Centre for Geomechanics (ACG) is a not -for-profit
            mining research centre based at The University of Western Australia,
            Perth.The ACG undertakes research, education and training activities
            in the geomechanics disciplines to provide industry with the
            necessary tools and knowledge to ensure that safety is not simply a
            top priority on par with productivity, but rather an ethic that
            guides everything.
          </p>
          <Link to="https://acg.uwa.edu.au/research/">
            <Heading as="h2">Research</Heading>
          </Link>
          <p>
            The Australian mining industry urgently needs to respond to the
            challenges and opportunities presented by the current economic
            climate.Industry must be in a position to readily exchange
            information on the challenges being faced and identify and develop
            the tools and practices that will enable operation
            optimisation.These developments will concurrently improve mine
            safety and community and environmental performance generating
            sustainable growth.The industry in its entirety cannot evolve to
            meet these challenges without developing highly relevant and defined
            research projects.The ACG continues to effectively respond to
            industry's needs by initiating innovative research that provides
            ongoing benefits and viabilities instead of “quick - fix” solutions.
          </p>
          <Link to="https://acg.uwa.edu.au/gsso-project/">
            <Heading as="h3">Ground Support Systems Optimisation</Heading>
          </Link>
          <p>
            Ground support remains one of the largest costs of development
            mining. At the same time, it is the main means of reducing
            rockfall/rockburst risk in underground mines. The challenge to the
            mining industry lies in keeping these risks as low as practicable,
            despite the increasing hazard associated with deepening of mineral
            resources. Controlling the costs and cycle time of installing
            efficient ground support systems remains at the forefront of most
            mining operations' priorities.
          </p>
          <Link to="https://acg.uwa.edu.au/stope-design-phase-2/">
            <Heading as="h3">Stope Design</Heading>
          </Link>
          <p>
            The ACG has been working on a stope design research project since
            late 2017, looking at new ways of performing stope reconciliation
            and optimising open stope design.
          </p>
          <Link to="https://acg.uwa.edu.au/sburst">
            <Heading as="h3">Strainburst</Heading>
          </Link>
          <p>
            As mines continue to extend deeper and open pits expand,
            strainbursts and rockbursts are increasing the cost of mining
            safely, i.e. ground support requirements, microseismic monitoring,
            restrictions to production and sequencing, as well as delays in
            re-entry, sometimes leading to the premature closure of a mine.
            These problems are a major threat to the future exploitation of deep
            resources. Several strainburst/rockburst risk management approaches
            are available and are currently used by many mines. However, once
            the mining method and sequence are determined, the hazard state is
            more or less locked in, leaving implementation of appropriate
            support as one of the only short-term controls of excavation damage
            potential. Knowledge of the location of potential bursts is key to
            appropriate and timely selection.
          </p>
          <Link to="https://acg.uwa.edu.au/events/">
            <Heading as="h2">Training</Heading>
          </Link>
          <p>
            The Australian Centre for Geomechanics presents numerous events each
            year for the global mining industry.Our conferences, seminars, short
            courses and workshops are available to a wide spectrum of the
            industry workforce and are aimed at developing personnel highly
            skilled in the understanding and application of geomechanics
            principles.Through the continuing education and training programs of
            the Centre, particular emphasis is placed on technology transfer, as
            well as on bridging the gaps between the disciplines of geotechnical
            engineering, mining engineering and structural geology.
          </p>
          <p>
            Visit the ACG's Events Website for more information and to book into
            future events.
          </p>
          <Link to="https://acg.uwa.edu.au/resources/">
            <Heading as="h2">Technology Transfer</Heading>
          </Link>
          <p>
            The global mining industry continues to evolve at a rapid rate and
            mining professionals are asked to explore new ways of enhancing
            their performance and contributions. The ACG's specialised
            publications can help industry personnel maintain and develop their
            skills, knowledge and capabilities. Achieving high safety standards
            continues to be recognised as one of the basics for mining companies
            to become successful. It is therefore not surprising to find that
            the improvement for mine safety is consistently at the top of the
            priority list of most mining companies. The ACG addresses this
            industry concern through the provision of current, comprehensive and
            specific geomechanics related publications. Mining is carried out in
            an environment that undergoes frequent and varied changes. The
            factors that affect the safety and productivity of a mine must be
            considered at a number of different levels prior to and during the
            extraction process. Workers are required to readily identify and
            avoid potential hazards. As these skills are likely to arise without
            prior experience, they must be imparted through state-of-the-art
            training. Recognising the vital importance of employee training to
            improve mine safety and production performance, the ACG's training
            platform is designed to enhance the competency, knowledge and skill
            base of the mining workforce. For many mining companies, ACG
            training products have become an integral and essential component of
            their training programs.
          </p>
          <Link to="https://papers.acg.uwa.edu.au/">
            <Heading as="h3">
              Online Repository of Conference Proceedings
            </Heading>
          </Link>
          Since 2005, the ACG has published conference papers across the
          geotechnical mining spectrum, including: underground and open pit
          mining, paste and thickened tailings and mine closure. The repository
          aims to provide the mining geomechanics fraternity with open access,
          peer-reviewed conference proceedings that may assist readers to
          maintain and develop their skills, knowledge and capabilities.
          <center>
            <Link to="https://papers.acg.uwa.edu.au/">
              <ThemedImage
                alt="OR Logo"
                sources={{
                  light: useBaseUrl('/img/branding/Online_Repository.png'),
                  dark: useBaseUrl('/img/branding/Online_Repository_dark.png'),
                }}
                width={'20%'}
              />
            </Link>
          </center>
          <Link to="https://acg.uwa.edu.au/shop/">
            <Heading as="h3">Publications</Heading>
          </Link>
          <p>
            To view the full range of ACG publications and products for
            purchase, visit our online shop.
          </p>
        </>
      </main>
    </Layout>
  );
}
