import { createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { TextBox } from '@syncfusion/ej2-react-inputs';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  TimelineMonth,
  TimelineYear,
  ViewDirective,
  ViewsDirective,
  Week,
  WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import * as React from 'react';
import { employeeLeave, GetInputData } from './../../api/componentData.api';
import { applyCategoryColor } from './../../helpers/helper';
import './index.css';
/**
 * Schedule editor template sample
 */
export default class EditorCustomField extends React.Component {
  constructor() {
    super(...arguments);
    this.data = employeeLeave(this.props.token);
    this.leaveType = GetInputData('/api/Leave/GetLeaveType', this.props.token);
    this.position = { X: 'Right' };
  }

  EditorScheduleValidation = {
    subject: {
      name: 'Subject',
      validation: {
        required: true,
        regex: [
          '^[a-zA-Z0-9- ]*$',
          'Special character(s) not allowed in this field',
        ],
      },
    },
    startTime: { name: 'StartTime', validation: { required: true } },
    endTime: {
      name: 'EndTime',
      validation: { required: true },
    },
  };

  onPopupOpen(args) {
    if (args.type === 'Editor') {
      // Create required custom elements in initial time
      if (!args.element.querySelector('.custom-field-row')) {
        let row = createElement('div', { className: 'custom-field-row' }); // tạo div LV1
        let formElement = args.element.querySelector('.e-schedule-form');
        let rowResidence = createElement('div', {
          className: 'custom-field-row',
        });
        let rowLocation = createElement('div', {
          className: 'custom-field-row',
          id: 'location-custom-field-row',
        });
        let rowTellorEmail = createElement('div', {
          className: 'custom-field-row',
        });
        let rowPersonCover = createElement('div', {
          className: 'custom-field-row',
        });
        formElement.firstChild.insertBefore(
          rowPersonCover,
          formElement.firstChild.firstChild
        );
        formElement.firstChild.insertBefore(
          rowTellorEmail,
          formElement.firstChild.firstChild
        );
        formElement.firstChild.insertBefore(
          rowLocation,
          formElement.firstChild.firstChild
        );
        formElement.firstChild.insertBefore(
          rowResidence,
          formElement.firstChild.firstChild
        );
        formElement.firstChild.insertBefore(
          row,
          formElement.firstChild.firstChild
        );
        //===========Add Type Leave Field============================
        let container = createElement('div', {
          className: 'custom-field-container',
        });
        let inputEle = createElement('input', {
          className: 'e-field',
          attrs: { name: 'Subject' },
        });
        container.appendChild(inputEle);
        row.appendChild(container);
        let drowDownList = new DropDownList({
          dataSource: this.leaveType,
          fields: { text: 'Description', value: 'LeaveTypeId' },
          value: args.data.Subject,
          floatLabelType: 'Always',
          placeholder: 'Event Type',
        });
        drowDownList.appendTo(inputEle);
        inputEle.setAttribute('name', 'Subject');
        //=========Add Type Residence Field================
        let containerResidence = createElement('div', {
          className: 'custom-field-container',
        });
        let inputResidence = createElement('input', {
          className: 'e-field',
          attrs: { name: 'Residence' },
        });

        let dropdownResidence = new DropDownList({
          dataSource: [
            { text: 'Place of residence', value: 'residence' },
            { text: 'Travel out of residence', value: 'OutOfresidence' },
          ],
          fields: { text: 'text', value: 'value' },
          value: args.data.Residence,
          floatLabelType: 'Always',
          placeholder: 'Residence',
          change: this.onDataBound.bind(this),
        });
        containerResidence.appendChild(inputResidence);
        rowResidence.appendChild(containerResidence);
        inputResidence.setAttribute('name', 'Residence');
        inputResidence.setAttribute('id', 'residence');
        dropdownResidence.appendTo(inputResidence);
        //========Add Where of Residence ===========
        let containerLocation = createElement('div', {
          className: 'custom-field-container',
        });
        let inputLocation = createElement('input', {
          className: 'e-field e-input',
          attrs: { name: 'Location' },
        });

        let textLocation = new TextBox({
          placeholder: 'To',
          floatLabelType: 'Always',
          value: args.data.cLocation,
        });
        containerLocation.appendChild(inputLocation);
        rowLocation.appendChild(containerLocation);
        inputLocation.setAttribute('name', 'cLocation');
        inputLocation.setAttribute('id', 'cLocation');
        textLocation.appendTo(inputLocation);
        if (args.data.cLocation) {
          document.getElementById('location-custom-field-row').style.display =
            'block';
        }
        //========Add Where of TellOrEmail ===========
        let containerTellOrEmail = createElement('div', {
          className: 'custom-field-container',
        });
        let inputTellOrEmail = createElement('input', {
          className: 'e-field e-input',
          attrs: { name: 'TellOrEmail' },
        });

        let textTellOrEmail = new TextBox({
          placeholder: 'Tell Or Email',
          floatLabelType: 'Always',
          value: args.data.TellOrEmail,
        });
        containerTellOrEmail.appendChild(inputTellOrEmail);
        rowTellorEmail.appendChild(containerTellOrEmail);
        inputTellOrEmail.setAttribute('name', 'TellOrEmail');
        inputTellOrEmail.setAttribute('id', 'TellOrEmail');
        textTellOrEmail.appendTo(inputTellOrEmail);
        //========Add Where of rowPersonCover ===========
        let containerPersonCover = createElement('div', {
          className: 'custom-field-container',
        });
        let inputPersonCover = createElement('input', {
          className: 'e-field e-input',
          attrs: { name: 'PersonCover' },
        });

        let textPersonCover = new TextBox({
          placeholder: 'Person cover',
          floatLabelType: 'Always',
          value: args.data.PersonCover,
        });
        containerPersonCover.appendChild(inputPersonCover);
        rowPersonCover.appendChild(containerPersonCover);
        inputPersonCover.setAttribute('name', 'PersonCover');
        inputPersonCover.setAttribute('id', 'PersonCover');
        textPersonCover.appendTo(inputPersonCover);
        //========Remove Title anh Location Default
        let title_location = document.querySelector('.e-title-location-row');
        title_location.remove();

        //=======Add validation for custom field
        // let formElement = args.element.querySelector('.e-schedule-form');
        let validator = formElement.ej2_instances[0];
        validator.addRules('Residence', {
          required: [true, 'This field is required'],
        });
      }
    }
  }
  onEventRendered(args) {
    applyCategoryColor(args, this.scheduleObj.currentView);
  }
  onFailure = (args) => {
    const errorMessage = args.error[0].error.responseText;
    console.log(errorMessage);
    this.toastObj.show({
      title: 'Warning!',
      content: errorMessage,
      cssClass: 'e-toast-warning',
      icon: 'e-warning toast-icons',
    });
  };
  onDataBound(args) {
    var sch = document.querySelector('#residence').ej2_instances[0];
    let formElement = document.querySelector('.e-schedule-form');
    let validator = formElement.ej2_instances[0];
    if (sch.itemData) {
      if (sch.itemData.value === 'OutOfresidence') {
        document.getElementById('location-custom-field-row').style.display =
          'block';
        validator.addRules('cLocation', {
          required: [true, 'This field is required'],
        });
        validator.rules['cLocation'] = {
          required: [true, 'This field is required'],
        };
      } else {
        validator.rules['cLocation'] = undefined;

        document.getElementById('location-custom-field-row').style.display =
          'none';
        document.querySelector('#cLocation').ej2_instances[0].value = null;
      }
    } else {
      document.getElementById('location-custom-field-row').style.display =
        'none';

      document.querySelector('#cLocation').ej2_instances[0].value = null;
    }
  }
  onActionCompleted(args) {}
  onEventClick(args) {}
  render() {
    return (
      <div className='schedule-control-section'>
        <div className='col-lg-9 control-section'>
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
          <div className='control-wrapper'>
            <ScheduleComponent
              width='100%'
              height='650px'
              selectedDate={new Date()}
              
              ref={(t) => (this.scheduleObj = t)}
              eventSettings={{
                dataSource: this.data,
                fields: this.EditorScheduleValidation,
                enableTooltip: true,
              }}
              popupOpen={this.onPopupOpen.bind(this)}
              eventRendered={this.onEventRendered.bind(this)}
              actionComplete={this.onActionCompleted.bind(this)}
              eventClick={this.onEventClick.bind(this)}
              actionFailure={this.onFailure}
              startHour='08:00'
              endHour='17:30'
              workHours={{ start: '08:00' }}
              showQuickInfo={false}
              currentView='Month'
            >
              <ViewsDirective>
                <ViewDirective option='Day' />
                <ViewDirective option='Week' />
                <ViewDirective option='WorkWeek' />
                <ViewDirective option='Month' />

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
