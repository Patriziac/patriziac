
import { FC } from 'react';

interface ITheme {
  title: string;
}

export const Theme: FC<ITheme> = ({ title }) => {
  // let darkToggle = document.querySelector('#darkToggle');

  // darkToggle.addEventListener('change', () => {
  //   document.body.classList.toggle('dark');
  // });

  return (
    <button>{title}</button>
  );
}





