/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

it('renders without crashing', () => {
  const component = renderer.create(
    <Header />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
