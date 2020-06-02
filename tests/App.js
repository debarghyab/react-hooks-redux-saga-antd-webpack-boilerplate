import React from 'react';
import App from './src/App';
import { mount } from 'enzyme';

test('renders without crashing', () => {
    mount(<App />);
});