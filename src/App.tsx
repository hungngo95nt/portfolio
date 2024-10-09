import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Buttons from './components/buttons/Buttons';
import Checkboxes from './components/checkboxes/Checkboxes';
import Header from './components/common/Header';
import Components from './pages/Components';
import { FunctionComponent } from 'react';
import Dropdowns from './components/dropdowns/Dropdowns';
import Inputs from './components/inputs/Inputs';
import Tooltips from './components/tooltips/Tooltips';
import Tabs from './components/tabs/Tabs';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Split from './components/split/Split';

const App: FunctionComponent = () => {
  const location = useLocation();
  const hideNav = location.pathname === '/' || location.pathname === '/blogs';
  return (
    <div id="App">
      <Header />
      <div className={hideNav ? 'w-full' : 'flex flex-row justify-center'}>
        {!hideNav && <Components />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/buttons" element={<Buttons />} />
          <Route path="/components/inputs" element={<Inputs />} />
          <Route path="/components/checkboxes" element={<Checkboxes />} />
          <Route path="/components/dropdowns" element={<Dropdowns />} />
          <Route path="/components/tooltips" element={<Tooltips />} />
          <Route path="/components/tabs" element={<Tabs />} />
          <Route path="/components/buttons" element={<Buttons />} />
          <Route path="/components/split" element={<Split />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
