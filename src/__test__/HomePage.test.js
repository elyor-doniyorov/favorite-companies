import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import store from '../redux/configStore';

describe('check if all component are rendered', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Provider store={store}><HomePage /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Link to="/">
            <img className="homepage-logo-img" src="/images/favorite.png" alt="logo" />
          </Link>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
