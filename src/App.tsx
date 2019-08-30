import React, { FC } from "react";
import _ from "lodash";
import { AdverseExplorer } from "./adverseExplorer";
import "semantic-ui-css/semantic.min.css";
import datas from "./data.json";

const App: FC = () => {
  return (
    <div className="App">
      <AdverseExplorer datas={datas} />
    </div>
  );
};

export default App;
