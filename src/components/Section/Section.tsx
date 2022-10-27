import React, { FC } from 'react';
import './Section.css'

interface ISection {
  title: string;
  children: React.ReactNode;
  border?: boolean
}

export const Section: FC<ISection> = ({ title, children, border }) => {
  return (
    <section className={`section ${border ? 'border' : ''}`}>
      <h2 className='section-title'>
        {title}
      </h2>
      {children}
    </section>
  );
}