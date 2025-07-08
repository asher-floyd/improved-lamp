import type {ReactNode} from 'react';
import Obfuscate from 'react-obfuscate';
import {FaMailBulk, FaPhone, FaLinkedin} from 'react-icons/fa';
import Heading from '@theme/Heading';
import styles from '../styles.module.css';

type ContactItem = {
  title: string;
  icon: ReactNode;
  type: string;
  link: string;
};

const ContactList: ContactItem[] = [
  {
    title: 'Email Us',
    icon: <FaMailBulk />,
    type: 'email',
    link: 'info@mxrap.com',
  },
  {
    title: 'Call Us',
    icon: <FaPhone />,
    type: 'tel',
    link: '+61864887201',
  },
  {
    title: 'Follow Us',
    icon: <FaLinkedin />,
    type: 'href',
    link: 'http://linkedin.com/company/mxrap',
  },
];

function Contact({title, icon, type, link}: ContactItem) {
  return (
    <div className={styles.card}>
      <Obfuscate {...{[type]: link}}>
        <p style={{fontSize: '3em'}}>{icon}</p>
        <div className={styles.cardContent}>
          <Heading as="h2" className={styles.cardTitle}>
            {title}
          </Heading>
        </div>
      </Obfuscate>
    </div>
  );
}

export default function ContactDetails(): ReactNode {
  return (
    <div className={styles.cardContainer}>
      {ContactList.map((props, idx) => (
        <Contact key={idx} {...props} />
      ))}
    </div>
  );
}
