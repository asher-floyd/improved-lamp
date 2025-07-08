import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import teamData from '@site/_data/authors.json';
import {FaLinkedin} from 'react-icons/fa6';
import collect from 'collect.js';
import styles from '../styles.module.css';

interface TeamMember {
  title: string;
  name: string;
  description: string;
  image_url: string;
  url: string;
  page: boolean;
  show_team: boolean;
  otherProp?: any;
}

interface TeamData {
  [key: string]: TeamMember;
}

interface TeamMemberProps {
  title: string;
  name: string;
  description: string;
  image_url: string;
  url: string;
}

const typedTeam: TeamData = teamData;
const Team = collect(Object.values(typedTeam))
  .filter((member: TeamMember) => member.show_team === true)
  .shuffle();

function TeamMember({
  title,
  name,
  description,
  image_url,
  url,
}: TeamMemberProps) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image_url} alt={name} />
      </div>

      <div className="card__header row">
        <h3 className="col col--11 text--left">
          {name}
          <br />
          <small>{title}</small>
        </h3>
        <Link
          href={url}
          className="col col--1"
          aria-label={`${name}'s LinkedIn profile`}
          style={{fontSize: '2em'}}>
          <FaLinkedin />
        </Link>
      </div>

      <div className="card__body">{description}</div>
    </div>
  );
}

export default function TeamList(): ReactNode {
  return (
    <div className={styles.cardContainer}>
      {Team.all().map((member: TeamMember, idx: number) => (
        <TeamMember
          key={member.name || idx}
          title={member.title}
          name={member.name}
          description={member.description}
          image_url={member.image_url}
          url={member.url}
        />
      ))}
    </div>
  );
}
