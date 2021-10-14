import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from '../components/DetailsPage';
import store from '../redux/configStore';
import '@testing-library/jest-dom/extend-expect';

describe('Space travelers hub app', () => {
  test('renders details', () => {
    render(<Provider store={store}><BrowserRouter><DetailsPage /></BrowserRouter></Provider>);
    expect(screen.getByText('Learn more about')).toBeInTheDocument();
  });
});
