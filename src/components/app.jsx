import React, {Fragment} from "react";
import Main from "./main/main.jsx";

const App = () => {
  const places = [{
    name: `Beautiful & luxurious apartment at great location`,
  }, {
    name: `Wood and stone place`
  }, {
    name: `Canal View Prinsengracht`
  }, {
    name: `Nice, cozy, warm big bed apartment`
  }, {
    name: `Wood and stone place`
  }];
  return (
    <Fragment>
      <Main places={places}/>
    </Fragment>
  );
};

export default App;
