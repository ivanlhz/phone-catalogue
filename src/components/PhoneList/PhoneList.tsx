import React, { FC } from 'react';
import { phoneProps } from '../../types';
import { Link } from '@reach/router';
import styled from '@emotion/styled';

type PhonelistProps = {
  data: phoneProps[];
};
const ListStyled = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageContent = styled.div`
  height: 300px;
`
const TextContent = styled.div`
    color: #272343;
    text-decoration: none;
    :hover {
      color: #bae8e8
    }
`


const PhoneList: FC<PhonelistProps> = ({ data }) => {
  return (
    <ListStyled>
      {data.map(({ name, imageFileName, id }) => (
        <Link key={id} to={`phones/${id}`}>
          <Block>
            <ImageContent>
              <Image alt={name} src={`images/${imageFileName}`} />
            </ImageContent>
            <TextContent>
              <h3>{name}</h3>
            </TextContent>
          </Block>
        </Link>
      ))}
    </ListStyled>
  );
};

export default PhoneList;
