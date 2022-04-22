import "./App.css";
import Home from "./Pages/home";
import { Provider } from "react-redux";
import configureStore from "./Store/store";

const App = () => {
  return (
    <Provider store={configureStore}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
};

export default App;
