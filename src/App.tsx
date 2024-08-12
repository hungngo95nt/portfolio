import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import ListComponents from './components/common/ListComponents';
import Buttons from './components/buttons/Buttons';
import Inputs from './components/inputs/Inputs';
import Checkboxes from './components/checkboxes/Checkboxes';

function App() {
  return (
    <div id="App">
      <Header />
      <div id="Body" className="flex w-full">
        <ListComponents />
        <Routes>
          <Route
            index
            element={
              <div className="flex w-3/4 mt-16">
                <h1>Home Page Content</h1>
              </div>
            }
          />
          <Route path="components/buttons" element={<Buttons />} />
          <Route path="components/inputs" element={<Inputs />} />
          <Route path="components/checkboxes" element={<Checkboxes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
