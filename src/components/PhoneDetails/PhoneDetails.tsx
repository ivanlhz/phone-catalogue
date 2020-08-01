import React, { FC } from 'react';
import { phoneProps } from '../../types';

const PhoneDetails: FC<phoneProps> = ({
  color,
  name,
  imageFileName,
  manufacturer,
  description,
  price,
  processor,
  ram,
  screen,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{manufacturer}</h3>
      <div>
        <img src={`/images/${imageFileName}`} alt={name} />
      </div>
      <div>
        <p>{description}</p>
        <ul>
          <li>RAM: {ram}</li>
          <li>Processor: {processor}</li>
          <li>Screen: {screen}</li>
          <li>Color: {color}</li>
        </ul>
      </div>
      <div>{price}€</div>
    </div>
  );
};

export default PhoneDetails;
