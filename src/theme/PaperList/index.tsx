import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import collect from 'collect.js';
import JsonData from '@site/_data/citations.json';
import styles from '../styles.module.css';
import {FaUnlock} from 'react-icons/fa';

type JsonData = {
  title: string;
  publication_date: Date;
  publication_year: number;
  open_access: boolean;
  link: string;
  paper_authors: string;
  journal_name: string;
  proceedings_author: string;
  vol_page_thesis: string;
  link_to_paper: string;
  pubtype: string;
  otherProp?: any;
}[];

const Paper = collect(JsonData).sortByDesc('publication_year');

function PaperItem({
  title,
  paper_authors,
  journal_name,
  proceedings_author,
  vol_page_thesis,
  link_to_paper,
  pubtype,
  open_access,
  publication_year,
}) {
  return (
    <div className={styles.card} style={{marginBottom: '1em'}}>
      <div
        className={styles.cardContent}
        style={{
          flexDirection: 'row',
          padding: '1em',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <div className={styles.cardDescription} style={{textAlign: 'left'}}>
          {paper_authors} {publication_year}, {title},{' '}
          {proceedings_author && ','} <i>{journal_name}</i>, {vol_page_thesis}{' '}
          <Link to={link_to_paper}>{link_to_paper}</Link>
        </div>
        <div className="col col--1" style={{textAlign: 'right'}}>
          {open_access && (
            <Link to={link_to_paper}>
              <FaUnlock />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PaperList(): ReactNode {
  return (
    <div className="container row--no-gutters">
      {Paper.map((props, idx) => (
        <PaperItem key={idx} {...props} />
      ))}
    </div>
  );
}
