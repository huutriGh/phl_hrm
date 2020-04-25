import React from 'react';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { extend } from '@syncfusion/ej2-base';

export class KanbanDialogFormTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.assigneeData = this.props.assignee;
    this.statusData = this.props.leaveStatus; // GetInputData('/api/Leave/GetLeaveStatus', this.props.token);
    this.tagsHtmlAttributes = { name: 'Tags' };
    this.state = extend({}, {}, props, true);
    
  }
  onChange(args) {
    let key = args.target.name;
    let value = args.target.value;
    this.setState({ [key]: value });
  }
  render() {
    let data = this.state;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className='e-label'>ID</td>
              <td>
                <div className='e-float-input e-control-wrapper'>
                  <input
                    id='Id'
                    name='Id'
                    type='text'
                    className='e-field'
                    value={data.Id}
                    disabled
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className='e-label'>Title</td>
              <td>
                <div className='e-float-input e-control-wrapper'>
                  <input
                    id='Title'
                    name='Title'
                    type='text'
                    className='e-field'
                    value={data.Title}
                    disabled
                  ></input>
                </div>
              </td>
            </tr>
            <tr>
              <td className='e-label'>Status</td>
              <td>
                <DropDownListComponent
                  id='Status'
                  name='Status'
                  dataSource={this.statusData}
                  className='e-field'
                  // value={data.Status}
                  // fields={{ text: 'LeaveStatusDesc', value: 'LeaveStatusId' }}
                  value={data.Status}
                  fields={{ text: 'LeaveStatusDesc', value: 'LeaveStatusDesc' }}
                ></DropDownListComponent>
              </td>
            </tr>
            <tr>
              <td className='e-label'>EmployeeId</td>
              <td>
                <div className='e-float-input e-control-wrapper'>
                  <input
                    id='RankId'
                    name='RankId'
                    type='text'
                    className='e-field'
                    value={data.RankId}
                    disabled
                  ></input>
                </div>
              </td>
            </tr>
            <tr>
              <td className='e-label'>Assignee</td>
              <td>
                <DropDownListComponent
                  id='Assignee'
                  name='Assignee'
                  className='e-field'
                  dataSource={this.assigneeData}
                  // value={data.Assignee.match(/([^[][^\]]+.*?)/i)[0]}
                  // fields={{ text: 'FullName', value: 'BusinessEntityID' }}
                  value={data.Assignee}
                  fields={{ text: 'FullName', value: 'FullName' }}
                ></DropDownListComponent>
              </td>
            </tr>

            <tr>
              <td className='e-label'>Remark</td>
              <td>
                <div className='e-float-input e-control-wrapper'>
                  <textarea
                    name='Summary'
                    className='e-field'
                    value={data.Remark}
                    onChange={this.onChange.bind(this)}
                  ></textarea>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
