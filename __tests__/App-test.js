/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MainPage } from '../src/pages/MainPage/MainPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<MainPage />);
});
