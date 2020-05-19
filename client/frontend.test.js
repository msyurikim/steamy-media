import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('<App />', () => {
  it('renders 1 App component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  })
})