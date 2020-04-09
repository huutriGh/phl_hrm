
import { extend } from '@syncfusion/ej2-base';
import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  TimelineYear,
  ViewDirective,
  ViewsDirective,
  Week,
  WorkWeek
} from '@syncfusion/ej2-react-schedule';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import React, { useRef } from 'react';
import { applyCategoryColor } from '../../helpers/helper';
// import EditorScheduleTemplate from './../../components/EditorScheduleTemplate/EditorScheduleTemplate';
import EditorScheduleValidation from './../../components/EditorScheduleTemplate/EditorScheduleValidation';
import * as datasource from './../../dataSource.json';
import dataManager from './../../api/componentData.api';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
const Examination = () => {
  const scheduleObj = useRef(null);
  const commentDialogObj = useRef(null);
  const EditorScheduleTemplate = props => {
    const datasource = dataManager('/api/Leave/GetLeaveType');
    return props !== undefined ? (
      <table
        className='custom-event-editor'
        style={{ width: '100%', cellpadding: '5' }}
      >
        <tbody>
          <tr>
            <td className='e-textlabel'>Type</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='subject'
                placeholder='Choose type'
                name='Subject'
                data-name='Subject'
                className='e-field'
                style={{ width: '100%' }}
                fields={{ text: 'Description', value: 'LeaveTypeId' }}
                dataSource={datasource}
                value={props.EventType || null}
              ></DropDownListComponent>
            </td>
          </tr>

          <tr>
            <td className='e-textlabel'>From</td>
            <td colSpan={4} style={{ width: '65%' }}>
              <DateTimePickerComponent
                format='dd/MM/yy hh:mm a'
                id='StartTime'
                data-name='StartTime'
                value={new Date(props.startTime || props.StartTime)}
                className='e-field'
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>To</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format='dd/MM/yy hh:mm a'
                id='EndTime'
                data-name='EndTime'
                value={new Date(props.endTime || props.EndTime)}
                className='e-field'
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td className='e-textlabel'>Place of residence</td>
            <td colSpan={4}>
              <CheckBoxComponent
                name='residence'
                data-name='residence'
                className='e-field e-input'
              />
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td className='e-textlabel'>Travel out of residence</td>
            <td colSpan={4}>
              <CheckBoxComponent
                name='OutOfresidence'
                data-name='OutOfresidence'
                className='e-field e-input'
              />
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td className='e-textlabel'>Location</td>
            <td colSpan={4}>
              <input
                id='Location'
                className='e-field e-input'
                type='text'
                name='Location'
                style={{ width: '100%' }}
              />
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>Tell or mail</td>
            <td colSpan={4}>
              <input
                id='TellOrMail'
                className='e-field e-input'
                type='text'
                name='TellOrMail'
                style={{ width: '100%' }}
              />
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>Person to cover duties</td>
            <td colSpan={4}>
              <input
                id='Person'
                className='e-field e-input'
                type='text'
                name='Person'
                style={{ width: '100%' }}
              />
            </td>
          </tr>
          {
            //   <tr></tr>
            // <tr>
            //   <td className='e-textlabel'>All day</td>
            //   <td colSpan={4}>
            //     <CheckBoxComponent
            //       name='isAllDay'
            //       data-name='isAllDay'
            //       className='e-field'
            //     />
            //   </td>
            // </tr>
          }
        </tbody>
      </table>
    ) : (
      <div></div>
    );
  };
  const data = extend([], datasource.scheduleData, null, true);
  //const onActionComplete = args => {};
  const onActionBegin = args => {
    console.log('onActionBegin', 'onActionBegin');
    console.log('commentDialogObj', commentDialogObj.current.visible);
    if (args.requestType === 'eventCreate') {
      if (args.data[0].StartTime.getTime() > args.data[0].EndTime.getTime()) {
        commentDialogObj.current.visible = true;
      }
    }
    if (args.requestType === 'eventChange') {
      if (args.data.StartTime.getTime() > args.data.EndTime.getTime()) {
        console.log('commentDialogObj', commentDialogObj);
        commentDialogObj.current.visible = false;
      }
    }
  };
  const onEventRendered = args => {
    applyCategoryColor(args, scheduleObj.currentView);
  };

  const buttons = [
    {
      click: () => {
        updateBtnClick();
      },
      buttonModel: {
        isPrimary: true,
        content: 'Ok'
      }
    }
  ];

  const updateBtnClick = () => {
    commentDialogObj.current.visible = false;
  };

  const onDataBound = args => {
    console.log('onDataBound', args);
    var sch = document.querySelector('.e-schedule').ej2_instances[0];
    sch.eventWindow.dialogObject.beforeClose = 
    (args => {
      console.log('args.cancel', args.cancel);
      if (
        document
          .querySelectorAll('.e-datetimepicker')[0]
          .ej2_instances[0].currentDate.getTime() >
        document
          .querySelectorAll('.e-datetimepicker')[1]
          .ej2_instances[0].currentDate.getTime()
      ) {
        args.cancel = true;
      } else {
        args.cancel = false;
      }
      console.log('args.cancel', args.cancel);
    })();
  };

  return (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <DialogComponent
            ref={commentDialogObj}
            visible={false}
            isModal='true'
            buttons={buttons}
            showCloseIcon={true}
            target={document.body}
            width='400px'
            header='Alert'
          >
            <div>
              <div>
                The selected end date occurs before the start date.
                <br />
                <br />
              </div>
            </div>
          </DialogComponent>
          <ScheduleComponent
            ref={scheduleObj}
            editorTemplate={EditorScheduleTemplate}
            width='100%'
            height='650px'
            selectedDate={new Date()}
            eventSettings={{
              dataSource: data,
              fields: EditorScheduleValidation,
              enableTooltip: true
            }}
            showQuickInfo={false}
            eventRendered={onEventRendered}
            actionBegin={onActionBegin}
            dataBound={onDataBound}
            // actionComplete={onActionComplete}
           // popupOpen={onPopupOpen}
          >
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
              <ViewDirective option='TimelineYear' displayName='Year' />
            </ViewsDirective>
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                TimelineYear,
                Resize,
                DragAndDrop
              ]}
            />
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );
};

export default Examination;
