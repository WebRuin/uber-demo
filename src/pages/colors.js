import React, { Component } from 'react';
import styled from 'styled-components';

import PageLayout from '../components/styles/PageLayout';
import Instructions from '../components/styles/Instructions';
import Title from '../components/styles/Title';

const PageHeader = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #333;
`;

const PageNumber = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: conic-gradient(
    rgba(230, 198, 39, 1) 35deg,
    rgba(32, 245, 12, 1) 10deg,
    rgba(245, 59, 121, 1) 100deg,
    rgba(245, 57, 94, 1) 220deg
  );
  color: #eee;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.75);
`;

const PageFooter = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    rgba(245, 57, 94, 1) 0%,
    rgba(245, 59, 121, 1) 51%,
    rgba(32, 245, 12, 1) 65%,
    rgba(230, 198, 39, 1) 100%
  );
`;

const Circle = styled.div`
  background: #eee;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

class Colors extends Component {
  render() {
    return (
      <PageLayout>
        <PageHeader>
          <PageNumber>3</PageNumber>
          <Title>Colors</Title>
          <Instructions>Pick any color</Instructions>
        </PageHeader>
        <PageFooter>
          <Circle />
        </PageFooter>
      </PageLayout>
    );
  }
}

export default Colors;
