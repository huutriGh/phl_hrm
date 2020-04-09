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
// const dataManager = async url => {
//   return await getToken()
//     .then(user => {
//       let currentUser = {};
//       if (user.currentUser) {
//         currentUser = JSON.parse(JSON.parse(user).user).currentUser;
//       }
//       return new DataManager({
//         url: `https://localhost:44358${url}`,
//         adaptor: new WebApiAdaptor(),
//         crossDomain: true,
//         headers: [
//           {
//             Authorization: `Bearer ${
//               currentUser.token ? currentUser.token : ''
//             }`
//           }
//         ]
//       });
//     })
//     .catch(er => {
//       return new DataManager({
//         url: `https://localhost:44358${url}`,
//         adaptor: new WebApiAdaptor(),
//         crossDomain: true,
//         headers: [
//           {
//             Authorization: `Bearer ${''}`
//           }
//         ]
//       });
//     });
// };

// const employeeLeave = async () => {
//   return await getToken()
//     .then(user => {
//       let currentUser = {};
//       if (user.currentUser) {
//         currentUser = JSON.parse(JSON.parse(user).user).currentUser;
//       }
//       return new DataManager({
//         url: `https://localhost:44358/api/EmployeeLeave/GetEmployeeLeave`,
//         adaptor: new UrlAdaptor(),
//         crudUrl: 'https://localhost:44358/api/EmployeeLeave/UpdateData',
//         crossDomain: true,
//         headers: [
//           {
//             Authorization: `Bearer ${
//               currentUser.token ? currentUser.token : ''
//             }`
//           }
//         ]
//       });
//     })
//     .catch(er => {
//       return new DataManager({
//         url: `https://localhost:44358/api/EmployeeLeave/GetEmployeeLeave`,
//         adaptor: new UrlAdaptor(),
//         crudUrl: 'https://localhost:44358/api/EmployeeLeave/UpdateData',
//         crossDomain: true,
//         headers: [{ Authorization: `Bearer ${''}` }]
//       });
//     });
// };

export { GetInputData, employeeLeave };
