import './index.css';
import * as React from 'react';
import {
  TimelineViews,
  TimelineMonth,
  Agenda,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';

import { GetInputData } from './../../api/componentData.api';

/**
 * schedule timeline resource grouping sample
 */
export default class Dashboard extends React.Component {
  constructor() {
    super(...arguments);
    this.Departmentdata = GetInputData(
      '/api/Department/getDepartment',
      this.props.token
    );
    this.DepartmentEmployee = GetInputData(
      '/api/Employee/EmployeeLeaveGroup',
      this.props.token
    );
    this.data = GetInputData(
      '/api/EmployeeLeave/GetEmployeeLeaveDashBoard',
      this.props.token,
      true
    );
  }

  render() {
    return (
      <div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent
              cssClass='timeline-resource-grouping'
              width='100%'
              height='650px'
              selectedDate={new Date()}
              currentView='TimelineMonth'
              eventSettings={{
                dataSource: this.data,
              }}
              readonly={true}
              startHour='08:00'
              endHour='17:30'
              workHours={{ start: '08:00' }}
              group={{ resources: ['DepartmentGroup', 'EmployeeGroup'] }}
            >
              <ResourcesDirective>
                <ResourceDirective
                  field='DepartmentID'
                  title='Choose Department'
                  name='DepartmentGroup'
                  allowMultiple={false}
                  dataSource={this.Departmentdata}
                  textField='DepartmentName'
                  idField='DepartmentID'
                  colorField='Color'
                ></ResourceDirective>
                <ResourceDirective
                  field='BusinessEntityID'
                  title='Choose Employee'
                  name='EmployeeGroup'
                  allowMultiple={true}
                  dataSource={this.DepartmentEmployee}
                  textField='EmployeeName'
                  idField='BusinessEntityID'
                  groupIDField='DepartmentID'
                  colorField='Color'
                ></ResourceDirective>
              </ResourcesDirective>
              <ViewsDirective>
                <ViewDirective option='TimelineWeek' />
                <ViewDirective option='TimelineMonth' />
                <ViewDirective option='Agenda' />
              </ViewsDirective>
              <Inject
                services={[
                  TimelineViews,
                  TimelineMonth,
                  Agenda,
                  Resize,
                  DragAndDrop,
                ]}
              />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    );
  }
}
