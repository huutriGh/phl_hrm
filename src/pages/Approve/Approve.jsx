import React from 'react';
import Kanban from './Kanban';
// import { loadDataStart } from '../../redux/leaveStatus/leaveStatus.actions';
// import { loadAssigneeStart } from '../../redux/employee/employee.actions';
// import { connect } from 'react-redux';
const Approve = ({
  token,
  businessEntityID,
  // loadLeaveStatus,
  // loadAssignee,
}) => {
  // loadLeaveStatus();
  // loadAssignee();
  return (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <Kanban token={token} businessEntityID={businessEntityID} />
        </div>
      </div>
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   loadLeaveStatus: () => dispatch(loadDataStart()),
//   loadAssignee: () => dispatch(loadAssigneeStart()),
// });
// export default connect(null, mapDispatchToProps)(Approve);
export default Approve;
