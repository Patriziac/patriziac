import { FC } from 'react';
import './Experience.css';
import { ExperienceDate } from './ExperienceDate';

interface IExperience {
  title: string;
  company: string;
  description: string;
  from: string;
  to: string;
}

export const Experience: FC<IExperience> = ({ title, company, description, from, to }) => {
  return (
    <div className='experience'>
      <div className='experience-content'>
        <ExperienceDate
          from={from}
          to={to} />
        <h3 className='experience-title'>
          {title}
        </h3>
        <strong className='experience-company'>
          {company}
        </strong>
        <p className='experience-description'>
          {description}
        </p>
      </div>
    </div>
  );
}