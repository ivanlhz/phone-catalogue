import React, { FC } from 'react';
import { phoneProps } from '../../types';
import styled from '@emotion/styled';

const Card = styled.div`
  text-align: left;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 30% 1fr max-content;
  grid-template-rows: min-content 1fr 1fr;
  grid-template-areas:
    "poster hleft       hright"
    "poster description description"
    "poster price price";
`
const Poster = styled.div` 
  grid-area:poster;
  height: 100%;
`
const Description = styled.div` 
  grid-area: description;
`
const HeaderLeft = styled.h2` 
  grid-area: hleft;
`
const HeaderRight = styled.h3` 
  grid-area: hright;
`
const Price = styled.div` 
  margin-left: auto;
  grid-area: price;
  font-size: 3rem;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


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
    <Card>
      <HeaderLeft>{name}</HeaderLeft>
      <HeaderRight>{manufacturer}</HeaderRight>
      <Poster>
        <Image src={`/images/${imageFileName}`} alt={name} />
      </Poster>
      <Description>
        <p>{description}</p>
        <ul>
          <li>RAM: {ram}</li>
          <li>Processor: {processor}</li>
          <li>Screen: {screen}</li>
          <li>Color: {color}</li>
        </ul>
      </Description>
      <Price>{price}€</Price>
    </Card>
  );
};

export default PhoneDetails;
