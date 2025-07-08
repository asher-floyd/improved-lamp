import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import JsonData from '@site/_data/consortium.json';
import {FaGlobe} from 'react-icons/fa6';
import collect from 'collect.js';
import styles from '../styles.module.css';

//TODO - map with OSM using json coords

type JsonData = {
  company: string;
  usertype: string;
  logo: string;
  url: string;
  name: string;
  country: string;
  coords: string;
  otherProp?: any;
}[];

const UserList = collect(JsonData).shuffle();

function User({company, usertype, logo, url, name, country}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={logo} alt={company} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{company}</h3>
        <div className={styles.cardDescription}>
          {name}, {country}
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className="col col--6" style={{padding: '2px'}}>
          <div className="button button--block button--sm button--secondary">
            {usertype}
          </div>
        </div>
        <div className="col col--6" style={{padding: '2px'}}>
          <Link to={url}>
            <button className="button button--block button--sm button--primary">
              <FaGlobe />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function UserShowcase(): ReactNode {
  return (
    <div className={styles.cardContainer}>
      {UserList.map((props, idx) => (
        <User key={idx} {...props} />
      ))}
    </div>
  );
}
