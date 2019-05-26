/* eslint-disable react/prop-types */
import React from 'react';
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withActiveItem from './with-active-item';

configure({adapter: new Adapter()});

const MockComponent = ({activeItem, setActiveItem}) => (
  <ul>
    {Array.from({length: 10}, (it, i) => i).map((index) => (
      <li
        key={`li-${index}`}
        onClick={() => setActiveItem(index)}
        className={`li-${index} ${index === activeItem ? `active` : ``}`}
      >{index}</li>
    ))}
  </ul>
);

describe(`activeItem prop defined`, () => {
  it(`should render component with correct activeItem state value`, () => {
    const ActiveMockComponent = withActiveItem(MockComponent);
    const wrapper = mount(<ActiveMockComponent activeItem={2} handleSetActiveItem={() => {}}/>);
    // childAt(2) — не живой объект, hasClass будет возвращать false, если не найти ноду снова
    expect(wrapper.find(`ul`).childAt(2).hasClass(`active`)).toEqual(true);
    expect(wrapper.state()).toHaveProperty(`activeItem`, 2);
  });
});

describe(`click on list item in mock component`, () => {
  it(`should define correct activeItem`, () => {
    const ActiveMockComponent = withActiveItem(MockComponent);
    const wrapper = mount(<ActiveMockComponent activeItem={2} handleSetActiveItem={() => {}}/>);

    const nodeNum1 = 8;
    wrapper.find(`ul`).childAt(nodeNum1).simulate(`click`);

    expect(wrapper.find(`ul`).childAt(nodeNum1).hasClass(`active`)).toEqual(true);
    expect(wrapper.state()).toHaveProperty(`activeItem`, nodeNum1);

    const nodeNum2 = 3;
    wrapper.find(`ul`).childAt(nodeNum2).simulate(`click`);

    expect(wrapper.find(`ul`).childAt(nodeNum2).hasClass(`active`)).toEqual(true);
    expect(wrapper.state()).toHaveProperty(`activeItem`, nodeNum2);
  });
});

describe(`handleSetActiveItem prop defined`, () => {
  it(`handler should be called correct number of times`, () => {
    const ActiveMockComponent = withActiveItem(MockComponent);
    const mockFn = jest.fn();
    const wrapper = mount(<ActiveMockComponent activeItem={2} handleSetActiveItem={mockFn}/>);

    wrapper.find(`ul`).childAt(8).simulate(`click`);
    expect(mockFn).toBeCalledTimes(1);

    wrapper.find(`ul`).childAt(4).simulate(`click`);
    expect(mockFn).toBeCalledTimes(2);
  });
});
