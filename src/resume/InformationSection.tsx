import { FunctionComponent } from 'react';

const InformationSection: FunctionComponent = () => {
  return (
    <div id="section-information" className="column-list">
      <div
        id="information-overview"
        style={{ width: '50%' }}
        className="column"
      >
        <p id="bcaa57dd-f42c-4135-ba64-f6840c3b0ac3">
          <strong>
            Experienced and driven website development over 2 years. Proficient
            in a range of programming languages and dedicated to continuous
            learning and innovation. Strong proficiency in .NET core and REACT.
          </strong>
        </p>
      </div>
      <div id="information-contact" style={{ width: '50%' }} className="column">
        <p id="phone">📲 (+84)8-9999-4867</p>
        <p id="mail">✉️ hungngo95nt@gmail.com</p>
        <p id="location">🗺️ Ho Chi Minh City</p>
        <p id="nation">🇻🇳 Vietnamese</p>
      </div>
    </div>
  );
};

export default InformationSection;
