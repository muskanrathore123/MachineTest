import React from "react";
import Card from "./Components/Card";
import FirstHeader from "./Components/FirstHeader";
import SecondHeader from "./Components/SecondHeader";
import ThirdHeader from "./Components/ThirdHeader";

function App() {
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      <ThirdHeader/>
      <Card />
    </div>
  );
}

export default App;
