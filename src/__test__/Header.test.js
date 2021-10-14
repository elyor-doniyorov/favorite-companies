import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import store from '../redux/configStore';
import '@testing-library/jest-dom/extend-expect';

describe('check if all component are rendered', () => {
  it('renders correctly', () => {
    render(<Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>);
    expect(screen.getByText('FAVORITE COMPANIES')).toBeInTheDocument();
  });
});
