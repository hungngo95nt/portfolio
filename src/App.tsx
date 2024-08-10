import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import ListComponents from './components/common/ListComponents';
import Buttons from './components/buttons/Buttons';

function App() {
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route index element={<ListComponents />} />
        <Route path="components/buttons" element={<Buttons />} />
        <Route path="*" element={<ListComponents />} />
      </Routes>
    </div>
  );
}

export default App;
