import { FC } from 'react';
import './Intro.css';

interface IIntro {
  name: string;
  position: string;
  about: string;
}

export const Intro: FC<IIntro> = ({ name, position, about }) => {
  return (
    <div className='intro'>

      <div className='intro-content'>
        <h1 className='intro-name'>
          {name}
        </h1>
        <strong>
          {position}
        </strong>
        <p>
          {about}
        </p>
      </div>

      <div className='intro-picture'>
        <img src="https://dummyimage.com/400x400/aaaaaa/ffffff.png" alt="" />
      </div>

    </div>
  );
}

