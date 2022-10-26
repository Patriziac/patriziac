import { FC } from 'react';
import './Experience.css';
import { ExperienceDate } from './ExperienceDate';

interface IExperience {
  title: string;
  company: string;
  description: string;
}

export const Experience: FC<IExperience> = ({ title, company, description }) => {
  return (
    <div className='experience'>
      <ExperienceDate from='2015' to='2022' />
      <div className='experience-content'>
        <h3 className='experience-title'>{title}</h3>
        <strong className='experience-company'>{company}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
}