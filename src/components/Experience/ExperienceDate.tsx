import { FC } from 'react';
import './ExperienceDate.css';

interface IExperienceDate {
  from: string;
  to: string;
}

export const ExperienceDate: FC<IExperienceDate> = ({ from, to }) => {
  return (
    <span className='experience-date'>
      <span className='experience-date__from'>{from}</span>
      <span>-</span>
      <span className='experience-date__to'>{to}</span>
    </span>
  );
}