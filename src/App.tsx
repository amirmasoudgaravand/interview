import { Fragment } from "react";
import MainContent from "./components/main/MainContent";
import Header from "./components/nav/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <MainContent />
    </Fragment>
  );
}

export default App;
