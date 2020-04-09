const EditorScheduleValidation= {
  subject: { name: 'Subject', validation: { required: true } },
  location: {
    name: 'Location',
    validation: {
      required: true,
      regex: [
        '^[a-zA-Z0-9- ]*$',
        'Special character(s) not allowed in this field'
      ]
    }
  },
  startTime: { name: 'StartTime', validation: { required: true } },
  endTime: {
    name: 'EndTime',
    validation: { required: true }
  }
};
export default EditorScheduleValidation;
