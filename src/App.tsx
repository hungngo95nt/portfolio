import { Routes, Route, Navigate } from 'react-router-dom';
import Buttons from './components/buttons/Buttons';
import Checkboxes from './components/checkboxes/Checkboxes';
import Header from './components/common/Header';
import ListComponents from './components/common/ListComponents';
import { FunctionComponent } from 'react';
import Dropdowns from './components/dropdowns/Dropdowns';
import Inputs from './components/inputs/Inputs';
import Tooltips from './components/tooltips/Tooltips';
import Tabs from './components/tabs/Tabs';

const App: FunctionComponent = () => {
  return (
    <div id="App">
      <Header />
      <div id="Body" className="flex w-full">
      <Routes>
        <Route path='/components' element={<ListComponents />} />
        <Route path ='/components/buttons'   element={<Buttons />} />
        <Route path ='/components/inputs'   element={<Inputs />} />
        <Route path ='/components/checkboxes'   element={<Checkboxes />} />
        <Route path ='/components/dropdowns'   element={<Dropdowns />} />
        <Route path ='/components/tooltips'   element={<Tooltips />} />
        <Route path ='/components/tabs'   element={<Tabs />} />
        <Route path ='/components/buttons'   element={<Buttons />} />
        <Route path='*' element={<Navigate to="/components" replace />} />
      </Routes>
      </div>
      
    </div>
  );
};

export default App;
