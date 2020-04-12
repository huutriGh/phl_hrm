import React from 'react';
import Test from './test';

const Approve = ({ token }) => {
  return (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <Test token={token} />
        </div>
      </div>
    </div>
  );
};
export default Approve;
