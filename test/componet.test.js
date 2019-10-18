import  {TheIncreaseBtn} from '../src/components/utility/TheIncreaseBtn';
import React from 'react';

import renderer from 'react-test-renderer';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// test file
import { shallow, mount, render } from 'enzyme';

test('Simple enzyme test example', () => {

  const wrapper = mount(
   <h1>The Increase Button 1</h1>
  );

  const text =wrapper.text();
  expect(text).toBe('The Increase Button 1');
});

test('testing component', () => {

  const wrapper = mount(
    <TheIncreaseBtn label={'The Increase Button'}/>
  );

  const text =wrapper.text();
  expect(text).toBe('The Increase Button 1');
});


test('Click button shuld increse it ', () => {

  const wrapper = mount(
    <TheIncreaseBtn label={'The Increase Button'}/>
  );
  wrapper.simulate('click');
  const text =wrapper.text();
  expect(text).toBe('The Increase Button 2');
});


//If we think this change is correct, we can run jest with the -u flag,
// it check if the component mach with previus snapshot
describe('Todo component renders the todo correctly', () => {
  it('renders correctly', () => {

    const rendered = renderer.create(
      <TheIncreaseBtn label={'The Increase Button'}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});