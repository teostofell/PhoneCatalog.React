import React from 'react';
import './Spinner.css'

function Spinner(props) {
  const { isSpinning } = props;
  const renderSpinner = (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
  return isSpinning ? renderSpinner : null;
};

export default Spinner;