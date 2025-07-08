import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FeatureGrid from '@site/src/theme/FeatureGrid';
import SponsorCarousel from '@site/src/theme/SponsorCarousel';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FrontEvents from '@site/_data/events.mdx';
import Heading from '@theme/Heading';
import ContactDetails from '@site/src/theme/ContactDetails';
import NewsList from '@site/src/theme/NewsList';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary heroBanner')}>
      <div className="container">
        <img height={128} src="img/branding/mXrap_white.png" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <div className="container container--fluid margin-vert--lg">
          <FeatureGrid />
        </div>

        <div className="sectionAlt margin-vert--lg">
          <Tabs className="container">
            <TabItem value="news" label="News">
              <NewsList />
            </TabItem>
            <TabItem value="events" label="Events">
              <FrontEvents />
            </TabItem>
            <TabItem value="contact" label="Contact">
              <ContactDetails />
            </TabItem>
          </Tabs>
        </div>

        <section className="text--center">
          <>
            <Heading as="h3">
              mXrap is developed with the financial support of{' '}
              <Link to="consortium">our industry partners.</Link>
            </Heading>
          </>
          <div className="container margin-vert--lg">
            <SponsorCarousel />
          </div>
        </section>
      </main>
    </Layout>
  );
}
