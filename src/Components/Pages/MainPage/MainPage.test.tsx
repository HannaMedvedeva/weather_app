import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import {MainPage} from './MainPage';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MainPage />
    </Provider>
  );

  // expect(getByText(/learn/i)).toBeInTheDocument();
});
