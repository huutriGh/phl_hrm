import React, { useEffect } from 'react';
import Kanban from './Kanban';
import { loadDataStart } from '../../redux/leaveStatus/leaveStatus.actions';
import { loadAssigneeStart } from '../../redux/employee/employee.actions';
import { connect } from 'react-redux';
import { selectAssignee } from '../../redux/employee/employee.selectors';
import { selectCurrentLeaveStatus } from '../../redux/leaveStatus/leaveStatus.selectors';
import { createStructuredSelector } from 'reselect';
const Approve = ({
  token,
  businessEntityID,
  leaveStatus,
  assignee,
  loadLeaveStatus,
  loadAssignee,
}) => {
  useEffect(() => {
    if (leaveStatus || assignee) {
    } else {
      loadLeaveStatus(token);
      loadAssignee(token);
    }
  });

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
const mapStateToprops = createStructuredSelector({
  leaveStatus: selectCurrentLeaveStatus,
  assignee: selectAssignee,
});
const mapDispatchToProps = (dispatch) => ({
  loadLeaveStatus: (token) => dispatch(loadDataStart(token)),
  loadAssignee: (token) => dispatch(loadAssigneeStart(token)),
});
export default connect(mapStateToprops, mapDispatchToProps)(Approve);
//export default Approve;
