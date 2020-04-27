import { Paper } from '@material-ui/core';
import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from '@syncfusion/ej2-react-kanban';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { leavePendingApprove } from '../../api/componentData.api';
import { loadAssigneeStart } from '../../redux/employee/employee.actions';
import { selectAssignee } from '../../redux/employee/employee.selectors';
import { loadDataStart } from '../../redux/leaveStatus/leaveStatus.actions';
import { selectCurrentLeaveStatus } from '../../redux/leaveStatus/leaveStatus.selectors';
import { selectUserFunction } from '../../redux/user/user.selectors';
import './index.css';
import { KanbanDialogFormTemplate } from './KanbanDialogFormTemplate';

class Kanban extends React.Component {
  constructor() {
    super(...arguments);
    this.position = { X: 'Right' };
    this.props.loadLeaveStatus();
    this.props.loadAssignee();
    this.data = leavePendingApprove(this.props.token);

    // this.fields = [
    //   { text: 'Title', key: 'Title', type: 'Input' },
    //   { key: 'Status', type: 'DropDown', name: 'Status' },
    //   { text: 'ID', key: 'RankId', type: 'Input', name: 'RankId' },
    //   { text: 'Assignee', key: 'Assignee', type: 'DropDown', name: 'Assignee' },
    //   { key: 'Summary', type: 'TextArea', name: 'Summary' },
    // ];
  }
  columnTemplate = (props) => {
    return (
      <div className='header-template-wrap'>
        <div className={'header-icon e-icons ' + props.keyField}></div>
        <div className='header-text'>{props.headerText}</div>
      </div>
    );
  };
  cardTemplate = (props) => {
    return (
      <div className={'card-template ' + props.Priority}>
        <div className='e-card-header'>
          <div className='e-card-header-caption'>
            <div className='e-card-header-title e-tooltip-text'>
              {props.Title}
            </div>
          </div>
        </div>
        <div className='e-card-content e-tooltip-text'>
          <div className='e-text'>{props.RankId}</div>
        </div>
        <div className='e-card-footer'>
          {props.Tags.split(',').map((tag) => (
            <div key={tag} className='e-card-tag e-tooltip-text'>
              {tag}
            </div>
          ))}
          <div className='e-card-avatar'>{this.getString(props.Assignee)}</div>
        </div>
      </div>
    );
  };
  getString = (assignee) => {
    return assignee.split(']')[1].match(/[A-Z]/g).join('').toUpperCase();
  };

  OnActionBegin(args) {}
  OndialogOpen = async (args) => {
    const userFunc = JSON.parse(this.props.userFuntion);
    const empid = this.props.businessEntityID;
    let func = 'Applied|Created';

    // let funid = '0|1';
    if (userFunc.find((f) => f === 'F1') || empid === args.data.AssigneeApp) {
      func += '|Approved';
      // funid += '|3';
    }
    if (userFunc.find((f) => f === 'F2') || empid === args.data.AssigneeVer) {
      func += '|Verified';
    }
    if (userFunc.find((f) => f === 'F3')) {
      func += '|Rejected';
    }
    let formElement = args.element.querySelector('.e-kanban-form');

    let validator = formElement.ej2_instances[0];
    validator.rules['Status'] = {
      regex: [
        `^(${func})$`,
        `Perrmission is deny. You can only choose ${func}`,
      ],
    };
    //Assignee_wrapper

    document.getElementsByName('RankId').readOnly = true;
  };

  onFailure = (args) => {
    try {
      const errorMessage = args.error[0].error.responseText;
      this.toastObj.show({
        title: 'Warning!',
        content: errorMessage,
        cssClass: 'e-toast-warning',
        icon: 'e-warning toast-icons',
      });
    } catch (error) {
      console.log(error);
    }
  };

  onDatabound = () => {};
  dialogTemplate = (props) => {
    return (
      <KanbanDialogFormTemplate
        assignee={this.props.assignee}
        leaveStatus={this.props.leaveStatus}
        {...props}
      />
    );
  };
  render() {
    return (
      <Paper>
        <div className='col-lg-12 control-section toast-type-section'>
          <div className='e-sample-resize-container'>
            <ToastComponent
              ref={(toast) => {
                this.toastObj = toast;
              }}
              id='toast_type'
              position={this.position}
            ></ToastComponent>
          </div>
        </div>
        <KanbanComponent
          id='kanban'
          cssClass='kanban-overview'
          keyField='Status'
          dataSource={this.data}
          enableTooltip={true}
          swimlaneSettings={{ keyField: 'Assignee' }}
          cardSettings={{
            headerField: 'Title',
            template: this.cardTemplate,
            selectionType: 'Multiple',
            priority: 'Title',
          }}
          // dialogSettings={{ fields: this.fields }}
          dialogSettings={{ template: this.dialogTemplate }}
          actionBegin={this.OnActionBegin}
          dialogOpen={this.OndialogOpen}
          actionFailure={this.onFailure}
          dataBound={this.onDatabound}
        >
          <ColumnsDirective>
            {this.props.leaveStatus
              ? this.props.leaveStatus.map((l) => {
                  return (
                    <ColumnDirective
                      key={l.LeaveStatusId}
                      headerText={l.LeaveStatusDesc}
                      keyField={l.LeaveStatusDesc}
                      allowToggle={true}
                      template={this.columnTemplate}
                    />
                  );
                })
              : null}
          </ColumnsDirective>
        </KanbanComponent>
      </Paper>
    );
  }
}
const mapStateToprops = createStructuredSelector({
  leaveStatus: selectCurrentLeaveStatus,
  assignee: selectAssignee,
  userFuntion: selectUserFunction,
});

const mapDispatchToProps = (dispatch) => ({
  loadLeaveStatus: () => dispatch(loadDataStart()),
  loadAssignee: () => dispatch(loadAssigneeStart()),
});
export default connect(mapStateToprops, mapDispatchToProps)(Kanban);
