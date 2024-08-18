import { Link } from 'react-router-dom';
import Header from './components/common/Header';
import ListComponents from './components/common/ListComponents';

function App() {
  return (
    <div id="App">
      <Header />
      <div id="Body" className="flex w-full">
        <ListComponents />
        <Link to="components/buttons" />
        <Link to="components/inputs" />
        <Link to="components/checkboxes" />
        <Link to="components/dropdowns" />
        <Link to="components/tooltips" />
      </div>
    </div>
  );
}

export default App;
