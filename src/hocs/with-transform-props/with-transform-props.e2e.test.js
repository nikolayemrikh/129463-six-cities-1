/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withTransformProps from './with-transform-props';

configure({adapter: new Adapter()});

const MockComponent = ({prop1, prop2}) => <div />;

describe(`HoC transform props`, () => {
  it(`should render component with correct props`, () => {
    const MockComponentWrapped = withTransformProps((props) => {
      return {
        prop1: props.prop9,
        prop2: props.prop10
      };
    })(MockComponent);
    const wrapper = shallow(<MockComponentWrapped prop9={`test1`} prop10={`test2`}/>);

    expect(wrapper.props().prop1).toEqual(`test1`);
    expect(wrapper.props().prop2).toEqual(`test2`);
  });
});
