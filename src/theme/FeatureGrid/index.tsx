import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {
  FaCircleInfo,
  FaBookOpenReader,
  FaComment,
  FaDownload,
  FaHandshakeAngle,
  FaComputer,
} from 'react-icons/fa6';
import styles from '../styles.module.css';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
  link: string;
  bgColor?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation',
    icon: <FaBookOpenReader />,
    description: <>Self-guided training program and videos.</>,
    link: '/docs',
    bgColor: 'firebrick',
  },
  {
    title: 'Apps',
    icon: <FaComputer />,
    description: <>What can mXrap do?</>,
    link: '/apps',
    bgColor: 'chocolate',
  },
  {
    title: 'Blog',
    icon: <FaComment />,
    description: <>News, updates, and events.</>,
    link: '/blog',
    bgColor: 'gold',
  },
  {
    title: 'Support',
    icon: <FaHandshakeAngle />,
    description: <>FAQs, documentation, and guides.</>,
    link: '/support',
    bgColor: 'forestgreen',
  },
  {
    title: 'Downloads',
    icon: <FaDownload />,
    description: <>Downloads for mXrap users</>,
    link: '/downloads',
    bgColor: 'dodgerblue',
  },
  {
    title: 'About',
    icon: <FaCircleInfo />,
    description: <>What is mXrap?</>,
    link: '/about',
    bgColor: 'darkorchid',
  },
];

function Feature({title, icon, description, link, bgColor}: FeatureItem) {
  return (
    <div className={styles.card}>
      <Link href={link}>
        <p className="iconbutton" style={{backgroundColor: bgColor}}>
          {icon}
        </p>
        <div className={styles.cardContent}>
          <Heading as="h2" className={styles.cardTitle}>
            {title}
          </Heading>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function FeatureGrid(): ReactNode {
  return (
    <div className={styles.cardContainer}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
