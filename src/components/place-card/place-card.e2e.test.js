import React from 'react';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlaceCard from './place-card.jsx';

configure({adapter: new Adapter()});


describe(`E2E: PlaceCard`, () => {
  let imageClickHandler;
  let titleClickHandler;
  let placeCard;
  let titleLink;
  let imageLink;

  beforeEach(() => {
    imageClickHandler = jest.fn();
    titleClickHandler = jest.fn();
    placeCard = shallow(<PlaceCard title={`some-name`} handleImageClick={imageClickHandler} handleTitleClick={titleClickHandler}/>);
    titleLink = placeCard.find(`.place-card__name a`);
    imageLink = placeCard.find(`.place-card__image-wrapper a`);
  });

  it(`should have title link`, () => {
    expect(titleLink).toHaveLength(1);
  });

  describe(`before click on title link`, () => {
    it(`handler shouldn't be called`, () => {
      expect(titleClickHandler).toBeCalledTimes(0);
    });
  });

  describe(`click on title link`, () => {
    beforeEach(() => {
      titleLink.simulate(`click`, {
        preventDefault() {}
      });
    });

    it(`title click handler should be called once`, () => {
      expect(titleClickHandler).toBeCalledTimes(1);
    });
  });

  it(`should have image link`, () => {
    expect(imageLink).toHaveLength(1);
  });

  describe(`before click on image link`, () => {
    it(`handler shouldn't be called`, () => {
      expect(imageClickHandler).toBeCalledTimes(0);
    });
  });

  describe(`click on image link`, () => {
    beforeEach(() => {
      imageLink.simulate(`click`, {
        preventDefault() {}
      });
    });

    it(`image click handler should be called once`, () => {
      expect(imageClickHandler).toBeCalledTimes(1);
    });
  });
});
