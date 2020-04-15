import React from 'react';
import Kanban from './Kanban';

const Approve = ({ token }) => {
  return (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <Kanban token={token} />
        </div>
      </div>
    </div>
  );
};
export default Approve;
