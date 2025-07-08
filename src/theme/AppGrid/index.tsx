import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {
  FaAnglesDown,
  FaChartLine,
  FaHelmetSafety,
  FaHouseCrack,
  FaList,
  FaMountain,
  FaRulerCombined,
  FaTable,
  FaTabletScreenButton,
  FaWater,
  FaWaveSquare,
} from 'react-icons/fa6';
import styles from '../styles.module.css';

type AppItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
  link: string;
};

const AppDesc: AppItem[] = [
  {
    title: 'Mining Induced Seismicity',
    icon: <FaWaveSquare />,
    description: (
      <>
        Tools for analysing and interpreting mining-induced seismicity, as well
        as managing seismic hazards.
      </>
    ),
    link: 'apps/seismic',
  },
  {
    title: 'Stope Reconciliation and Prediction',
    icon: <FaAnglesDown />,
    description: (
      <>
        For quick and easy reconciliation of mined surveys and design shapes.
        Uses machine learning to predict stope geometry and performance.
      </>
    ),
    link: 'apps/stope',
  },
  {
    title: 'Rock Mass Data Analyser',
    icon: <FaChartLine />,
    description: (
      <>
        Allows users to input and analyse various geotechnical data, which aids
        in building a detailed database that includes borehole, mapping, stress
        measurement and rock testing data.
      </>
    ),
    link: 'apps/rmda',
  },
  {
    title: 'Inspections and Data Entry',
    icon: <FaTabletScreenButton />,
    description: (
      <>
        A data entry application designed for offline use on tablet devices,
        customisable to meet the specific needs of each site.
      </>
    ),
    link: 'apps/inspections',
  },
  {
    title: 'Instrumentation',
    icon: <FaRulerCombined />,
    description: (
      <>
        Tools for importing and evaluating various formats of extensometer and
        in situ stress data.
      </>
    ),
    link: 'apps/instrumentation',
  },
  {
    title: 'Caving',
    icon: <FaHelmetSafety />,
    description: (
      <>
        Integrates various cave monitoring methods to provide users with a
        comprehensive understanding of the activities within their cave mine.
      </>
    ),
    link: 'apps/caving',
  },
  {
    title: 'Numerical Modelling Integration',
    icon: <FaTable />,
    description: (
      <>
        Facilitates the creation of clean models for input into numerical
        modelling packages along with visualisation of the results of numerical
        models along with other monitoring data.
      </>
    ),
    link: 'apps/numerical-modelling',
  },
  {
    title: 'Damage Mapping',
    icon: <FaHouseCrack />,
    description: (
      <>
        Enables users to damage map their underground excavations using a tablet
        device while offline.
      </>
    ),
    link: 'apps/damage-mapping',
  },
  {
    title: 'Surface Monitoring',
    icon: <FaMountain />,
    description: (
      <>
        Tools for importing and evaluating prism data, commonly utilised for
        tracking ground movements.
      </>
    ),
    link: 'apps/surface-monitoring',
  },
  {
    title: 'Paste Backfill',
    icon: <FaWater />,
    description: (
      <>
        Designed to assist engineers in calculating paste fill volumes and bund
        capacities, fill strength requirements and reticulation paths along with
        hosting a strength testing database with calculated curing models.
      </>
    ),
    link: 'apps/paste-backfill',
  },
  {
    title: 'Utilities',
    icon: <FaList />,
    description: (
      <>
        A collection of tools designed to convert between formats and generally
        make tasks easier.
      </>
    ),
    link: 'apps/utilities',
  },
];

function App({title, icon, description, link}: AppItem) {
  return (
    <div className={styles.card}>
      <Link href={link}>
        <p className="iconbutton" style={{backgroundColor: '#262262'}}>
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

export default function AppGrid(): ReactNode {
  return (
    <div className={styles.cardContainer}>
      {AppDesc.map((props, idx) => (
        <App key={idx} {...props} />
      ))}
    </div>
  );
}
