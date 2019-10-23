import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '../../../components/Header'
export default function DefaulrLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

DefaulrLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
