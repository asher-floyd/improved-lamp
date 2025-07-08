import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import newsData from '@site/_data/news.json';
import collect from 'collect.js';
import styles from '../styles.module.css';

interface NewsData {
  title: string;
  details: string;
  date: string;
  link: string;
  image?: string;
}

// Fix: Properly type the imported news data as an array
const typedNews: NewsData[] = newsData as unknown as NewsData[];
const News = collect(typedNews).sortByDesc('date').take(3);

// Fix: Use all required props and improve JSX structure
function NewsItem({title, details, date, link, image}: NewsData) {
  return (
    <div className={styles.card} style={{marginBottom: '1em'}}>
      <div className={styles.cardContent}>
        <div className={styles.cardDescription} style={{textAlign: 'left'}}>
          <div className={styles.cardImage}>
            <img src={image} />
          </div>
          <h3>{title}</h3>
          <p>{details}</p>
          <p>
            <strong>Date:</strong> {date}
          </p>
          {link && (
            <Link to={link} className="button button--primary">
              Read More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Fix: Pass all required props to NewsItem
export default function NewsList(): ReactNode {
  return (
    <div className={styles.cardContainer}>
      {News.all().map((news: NewsData, idx: number) => (
        <NewsItem
          key={idx}
          title={news.title}
          details={news.details}
          date={news.date}
          link={news.link}
          image={news.image}
        />
      ))}
    </div>
  );
}
