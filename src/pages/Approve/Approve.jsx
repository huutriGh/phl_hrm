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

/**
 * Kanban Overview sample
 */
class Approve extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      leaveStatus: [],
    };
    this.props.loadLeaveStatus();
    this.data = leavePendingApprove(this.props.token);

    this.fields = [
      { text: 'ID', key: 'Title', type: 'Input' },
      { key: 'Status', type: 'DropDown', name: 'Status' },
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
          <div className='e-text'>{props.Summary}</div>
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.state.leaveStatus.length !== nextProps.leaveStatus.leaveStatus.length
    ) {
      console.log('setstate');
      this.setState({ leaveStatus: nextProps.leaveStatus.leaveStatus });
    }
  }
  OnActionBegin(args) {
    console.log('OnActionBegin', args);
  }
  OndialogOpen(args) {
    console.log('OndialogOpen', args);
    let formElement = args.element.querySelector('.e-kanban-form');
    console.log(formElement);
    let validator = formElement.ej2_instances[0];
    console.log('validator', validator);
    validator.rules['Status'] = {
      regex: [
        '^(Applied|Created)$',
        'Perrmission is deny. You can only choose Applied or Created',
      ],
    };
    document.getElementsByName('RankId').readOnly = true;
  }
  render() {
    console.log('render called');
    console.log('length:', this.state.leaveStatus.length);
    return this.state.leaveStatus.length > 0 ? (
      <Paper>
        <div className='schedule-control-section'>
          <div className='col-lg-12 control-section'>
            <div className='control-wrapper'>
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
                  priority: 'RankId',
                }}
                dialogSettings={{ fields: this.fields }}
                actionBegin={this.OnActionBegin}
                dialogOpen={this.OndialogOpen}
              >
                <ColumnsDirective>
                  {this.state.leaveStatus.map((l) => {
                    console.log('directive');
                    return (
                      <ColumnDirective
                        key={l.LeaveStatusId}
                        headerText={l.LeaveStatusDesc}
                        keyField={l.LeaveStatusDesc}
                        allowToggle={true}
                        template={this.columnTemplate.bind(this)}
                      />
                    );
                  })}
                </ColumnsDirective>
              </KanbanComponent>
            </div>
          </div>
        </div>
      </Paper>
    ) : null;
  }
}
const mapStateToprops = createStructuredSelector({
  leaveStatus: selectCurrentLeaveStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadLeaveStatus: () => dispatch(loadDataStart()),
});
export default connect(mapStateToprops, mapDispatchToProps)(Approve);
