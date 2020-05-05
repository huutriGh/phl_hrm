import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRemainingHours } from '../../redux/employee/employee.selectors';
import { loadRemainingHoursStart } from '../../redux/employee/employee.actions';
const RemainingHours = ({ remainingHours, loadRemainingHour, token }) => {
  useEffect(() => {
    loadRemainingHour(token);
  }, [loadRemainingHour]);
  return (
    <div className='col-lg-3 property-section'>
      <table
        id='property'
        title='Properties'
        className='property-panel-table'
        style={{ width: '100%' }}
      >
        <tbody>
          <tr style={{ height: '50px' }}></tr>
          <tr>
            <td>
              <h3>
                Remaining :
                {remainingHours
                  ? ` ${remainingHours.RemainingVacationHours} (day)`
                  : 'NA'}
              </h3>
            </td>
          </tr>
          <tr>
            <td color='primary'>
              <h3>
                Privious Year remaining:
                {remainingHours
                  ? ` ${remainingHours.PreviousYearVacationHours} (day)`
                  : 'NA'}
              </h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  remainingHours: selectRemainingHours,
});
const mapDispatchToProps = (dispatch) => ({
  loadRemainingHour: (token) => dispatch(loadRemainingHoursStart(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RemainingHours);
