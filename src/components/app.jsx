import React, {Fragment} from "react";
import Main from "./main/main.jsx";

const App = (props) => {
  return (
    <Fragment>
      <Main {...props}/>
    </Fragment>
  );
};

export default App;
