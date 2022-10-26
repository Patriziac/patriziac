import { FC } from 'react';
import './Section.css'

interface ISection {
  title: string;
  children: React.ReactNode;
}

export const Section: FC<ISection> = ({ title, children }) => {
  return (
    <section className='section'>
      <h2 className='section-title'>{title}</h2>
      {children}
    </section>
  );
}