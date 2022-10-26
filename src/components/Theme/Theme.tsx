
import { FC } from 'react';
import './Theme.css'

interface ITheme {
  title: string;
}

export const Theme: FC<ITheme> = ({ title }) => {
  // let darkToggle = document.querySelector('#darkToggle');

  // darkToggle.addEventListener('change', () => {
  //   document.body.classList.toggle('dark');
  // });

  return (
    <select>
      <option value="">Dark</option>
      <option value="">Light</option>
    </select>
  );
}





