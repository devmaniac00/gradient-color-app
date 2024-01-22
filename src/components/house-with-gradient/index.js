import React from 'react';
import styles from './styles.module.css';
import { isValidColor } from '../../utils/isValidColor';

const HouseWithGradient = ({ house }) => {
  const colors = house.houseColours.split(' and ');
  const isValid = colors.every(isValidColor);

  const gradientStyle = {
    background: isValid
      ? `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
      : 'linear-gradient(to right, white, black)',
  };

  const { container, header, name, gradient, footer, founder } = styles;

  return (
    <div className={container}>
      <div className={header}>
        <div className={name}>{house.name}</div>
        <div>{house.animal}</div>
      </div>
      <div className={gradient} style={gradientStyle}></div>
      <div className={footer}>
        <div>
          Founder: <span className={founder}>{house.founder}</span>
        </div>
      </div>
    </div>
  );
};

export { HouseWithGradient };
