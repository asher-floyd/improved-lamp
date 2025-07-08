import type {ReactNode} from 'react';
import JsonData from '@site/_data/consortium.json';
import collect from 'collect.js';
import styles from '../styles.module.css';
import {Carousel} from 'nuka-carousel';

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

const SponsorList = collect(JsonData)
  .filter(item => item.usertype === 'Consortium')
  .random(20);

function Sponsor({logo, company}) {
  return (
    <div className="col col--2">
      <div style={{alignItems: 'center', maxHeight: '200px'}}>
        <img className={styles.cardImage} src={logo} alt={company} />
      </div>
    </div>
  );
}

export default function SponsorCarousel(): ReactNode {
  return (
    <Carousel showDots wrapMode="wrap">
      {SponsorList.map((props, idx) => (
        <Sponsor key={idx} {...props} />
      ))}
    </Carousel>
  );
}
