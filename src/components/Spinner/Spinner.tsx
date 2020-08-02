import React, {FC} from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: #318fb5;
  animation: ${spin} 1s ease-in-out infinite;
`;

const Spinner:FC = () => <StyledSpinner role="spinbutton" />;

export default Spinner;
