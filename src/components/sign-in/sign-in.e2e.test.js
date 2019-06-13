import React from 'react';
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {SignIn} from './sign-in.jsx';

configure({adapter: new Adapter()});


describe(`E2E: SignIn`, () => {
  it(`should call logIn callback on submit if email and password were present`, () => {
    const logInCallbackMock = jest.fn();
    const logIn = mount(<SignIn logIn={logInCallbackMock}/>);
    const emailInput = logIn.find(`.form__input[name="email"]`);
    const passwordInput = logIn.find(`.form__input[name="password"]`);

    emailInput.simulate(`change`, {
      target: {
        value: `email-test`
      }
    });
    passwordInput.simulate(`change`, {
      target: {
        value: `password-test`
      }
    });
    const preventDefault = jest.fn();
    logIn.find(`.form`).simulate(`submit`, {preventDefault});
    expect(logInCallbackMock).toBeCalledTimes(1);
    expect(logInCallbackMock).toBeCalledWith({
      email: `email-test`,
      password: `password-test`
    });
    expect(preventDefault).toBeCalledTimes(1);
  });
});
