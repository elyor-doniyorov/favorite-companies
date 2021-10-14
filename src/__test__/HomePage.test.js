import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../components/HomePage';
import store from '../redux/configStore';

describe('check if all component are rendered', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Provider store={store}><HomePage /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
