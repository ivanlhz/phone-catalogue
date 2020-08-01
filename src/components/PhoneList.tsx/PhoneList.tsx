import React, {FC} from 'react';
import { phoneProps } from '../../types';

type PhonelistProps = {
  data: phoneProps[]
}

const PhoneList: FC<PhonelistProps> = ({data}) => {
  return (
    <div>
      {
        data.map( ({name, imageFileName, id}) => (
          <div className="block" key={id}>
            <img alt={name} src={`images/${imageFileName}`}/>
            <h3>{name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default PhoneList;