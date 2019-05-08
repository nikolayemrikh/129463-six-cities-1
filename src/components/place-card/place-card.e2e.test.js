import React from 'react';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlaceCard from './place-card.jsx';

configure({adapter: new Adapter()});


describe(`E2E: PlaceCard`, () => {
  let clickHandler;
  let placeCard;
  let header;

  beforeEach(() => {
    clickHandler = jest.fn();
    placeCard = shallow(<PlaceCard name={`some-name`} handleClick={clickHandler}/>);
    header = placeCard.find(`.place-card__name a`);
  });

  it(`should have title`, () => {
    expect(header).toHaveLength(1);
  });

  describe(`before click on title`, () => {
    it(`handler shouldn't be called`, () => {
      expect(clickHandler).toBeCalledTimes(0);
    });
  });

  describe(`click on title`, () => {
    beforeEach(() => {
      header.simulate(`click`);
    });

    it(`handler should be called once`, () => {
      expect(clickHandler).toBeCalledTimes(1);
    });
  });
});
