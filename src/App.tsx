import Header from './components/common/Header';
import ListComponents from './components/common/ListComponents';
import { FunctionComponent } from 'react';

const App: FunctionComponent<JSX.Element> = (Content) => {
  return (
    <div id="App">
      <Header />
      <div id="Body" className="flex w-full">
        <ListComponents />
        {Content}
      </div>
    </div>
  );
};

export default App;
