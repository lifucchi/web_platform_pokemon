import Header from "./componens/Layout/Header";
import React, {Fragment} from "react";
import Pokemon from "./componens/Pokemon/Pokemon";

function App() {
  return (
    <Fragment>
        <Header/>
        <main>
            <Pokemon/>
        </main>
    </Fragment>
  );
}

export default App;