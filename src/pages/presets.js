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
    rgba(230, 39, 55, 1) 45deg,
    rgba(12, 183, 245, 1) 40deg,
    rgba(61, 245, 178, 1) 45deg,
    rgba(59, 223, 245, 1) 45deg
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
    rgba(59, 223, 245, 1) 0%,
    rgba(61, 245, 178, 1) 51%,
    rgba(12, 125, 245, 1) 65%,
    rgba(230, 39, 55, 1) 100%
  );
`;

const Circle = styled.div`
  background: #eee;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

class Presets extends Component {
  render() {
    return (
      <PageLayout>
        <PageHeader>
          <PageNumber>2</PageNumber>
          <Title>Presets</Title>
          <Instructions>Manage presets</Instructions>
        </PageHeader>
        <PageFooter>
          <Circle />
        </PageFooter>
      </PageLayout>
    );
  }
}

export default Presets;
