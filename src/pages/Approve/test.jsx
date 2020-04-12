// import { render } from 'react-dom';
import { Paper } from '@material-ui/core';
import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from '@syncfusion/ej2-react-kanban';
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { SampleBase } from './sample-base';
// import * as dataSource from './datasource.json';
import { leavePendingApprove } from './../../api/componentData.api';
import { loadDataStart } from './../../redux/leaveStatus/leaveStatus.actions';
import { selectCurrentLeaveStatus } from './../../redux/leaveStatus/leaveStatus.selectors';
import './index.css';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { selectUserFunction } from '../../redux/user/user.selectors';
/**
 * Kanban Overview sample
 */
class Test extends React.Component {
  constructor() {
    super(...arguments);
    this.position = { X: 'Right' };
    this.props.loadLeaveStatus();
    this.data = leavePendingApprove(this.props.token);

    this.fields = [
      { text: 'Title', key: 'Title', type: 'Input' },
      { key: 'Status', type: 'DropDown', name: 'Status' },
      { text: 'ID', key: 'RankId', type: 'Input', name: 'RankId' },
      { key: 'Summary', type: 'TextArea', name: 'Summary' },
    ];
  }
  columnTemplate(props) {
    return (
      <div className='header-template-wrap'>
        <div className={'header-icon e-icons ' + props.keyField}></div>
        <div className='header-text'>{props.headerText}</div>
      </div>
    );
  }
  cardTemplate(props) {
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
  }
  getString(assignee) {
    return assignee.split(']')[1].match(/[A-Z]/g).join('').toUpperCase();
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('nextprop:', nextProps);
  //   this.setState({ leaveStatus: nextProps.leaveStatus.leaveStatus });

  //   this.forceUpdate();
  // }

  OnActionBegin(args) {
    console.log('OnActionBegin', args);
  }
  OndialogOpen = (args) => {
    let formElement = args.element.querySelector('.e-kanban-form');
    console.log(formElement);
    let validator = formElement.ej2_instances[0];
    validator.rules['Status'] = {
      regex: [
        '^(Applied|Created)$',
        'Perrmission is deny. You can only choose Applied or Created',
      ],
    };
    document.getElementsByName('RankId').readOnly = true;
  };

  onFailure = (args) => {
    console.log('Onfailure:', args);
    const errorMessage = args.error[0].error.responseText;
    console.log('errorMessage', errorMessage);
    this.toastObj.show({
      title: 'Warning!',
      content: errorMessage,
      cssClass: 'e-toast-warning',
      icon: 'e-warning toast-icons',
    });
  };

  render() {
    console.log('render called');
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
              // created={this.create.bind(this)}
              // close={this.onclose.bind(this)}
              // beforeOpen={this.onbeforeOpen.bind(this)}
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
            template: this.cardTemplate.bind(this),
            selectionType: 'Multiple',
            priority: 'Title',
          }}
          dialogSettings={{ fields: this.fields }}
          actionBegin={this.OnActionBegin}
          dialogOpen={this.OndialogOpen}
          actionFailure={this.onFailure}
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
                      template={this.columnTemplate.bind(this)}
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
  userFuntion: selectUserFunction,
});

const mapDispatchToProps = (dispatch) => ({
  loadLeaveStatus: () => dispatch(loadDataStart()),
});
export default connect(mapStateToprops, mapDispatchToProps)(Test);
