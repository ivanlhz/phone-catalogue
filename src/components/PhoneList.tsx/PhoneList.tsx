import React, {FC} from 'react';
import { phoneProps } from '../../types';
import {Link} from '@reach/router';

type PhonelistProps = {
  data: phoneProps[]
}

const PhoneList: FC<PhonelistProps> = ({data}) => {
  return (
    <div>
      {
        data.map( ({name, imageFileName, id}) => (
          <Link to={`phones/${id}`}>
            <div className="block" key={id}>
              <img alt={name} src={`images/${imageFileName}`}/>
              <h3>{name}</h3>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default PhoneList;