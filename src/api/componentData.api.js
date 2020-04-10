import { DataManager, WebApiAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';

const GetInputData = (url, token, postmethod) => {
  return new DataManager({
    url: `https://localhost:44358${url}`,
    adaptor: postmethod ? new UrlAdaptor() : new WebApiAdaptor(),
    crossDomain: true,
    headers: [
      {
        Authorization: `Bearer ${token}`,
      },
    ],
  });
};

const employeeLeave = (token) => {
  return new DataManager({
    url: `https://localhost:44358/api/EmployeeLeave/GetEmployeeLeave`,
    adaptor: new UrlAdaptor(),
    crudUrl: 'https://localhost:44358/api/EmployeeLeave/UpdateData',
    crossDomain: true,
    headers: [
      {
        Authorization: `Bearer ${token}`,
      },
    ],
  });
};
const leavePendingApprove = (token) => {
  return new DataManager({
    url: `https://localhost:44358/api/EmployeeLeave/GetLeavePendingApprove`,
    adaptor: new UrlAdaptor(),
    crudUrl: 'https://localhost:44358/api/EmployeeLeave/Approve',
    crossDomain: true,
    headers: [
      {
        Authorization: `Bearer ${token}`,
      },
    ],
  });
};

export { GetInputData, employeeLeave, leavePendingApprove };
