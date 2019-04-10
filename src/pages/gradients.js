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
    rgba(39, 169, 230, 1) 35deg,
    rgba(12, 183, 245, 1) 10deg,
    rgba(159, 54, 245, 1) 100deg,
    rgba(60, 54, 245, 1) 220deg
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
    rgba(60, 54, 245, 1) 0%,
    rgba(159, 54, 245, 1) 51%,
    rgba(12, 183, 245, 1) 65%,
    rgba(39, 169, 230, 1) 100%
  );
`;

const Circle = styled.div`
  background: #eee;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

class Gradients extends Component {
  render() {
    return (
      <PageLayout>
        <PageHeader>
          <PageNumber>1</PageNumber>
          <Title>Gradients</Title>
          <Instructions>Start, end, angle</Instructions>
        </PageHeader>
        <PageFooter>
          <Circle />
        </PageFooter>
      </PageLayout>
    );
  }
}

export default Gradients;
