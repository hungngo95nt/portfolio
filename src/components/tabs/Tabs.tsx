import { FunctionComponent } from 'react';

const Tabs: FunctionComponent = () => {
  const openCity = (cityName: string) => {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].setAttribute('style', 'display: none');
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    const cityElement = document.getElementById(cityName);
    if (cityElement) {
      cityElement.setAttribute('style', 'display: block');
    }
  };
  return (
    <div className="flex flex-col gap-4 w-3/4 mt-20 p-4">
      <div className="tab">
        {/* Tab buttons */}
        <button className="tablinks" onClick={() => openCity('London')}>
          London
        </button>
        <button className="tablinks" onClick={() => openCity('Paris')}>
          Paris
        </button>
        <button className="tablinks" onClick={() => openCity('Tokyo')}>
          Tokyo
        </button>

        {/* Tab content */}
        <div id="London" className="tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>
        <div id="Paris" className="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>
        <div id="Tokyo" className="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
