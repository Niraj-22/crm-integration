
import React from 'react';

const DataGridComponent = ({ users, pushToCRM }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.companyName}</td>
              <td>{user.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={pushToCRM}>Push to CRM</button>
    </div>
  );
};

export default DataGridComponent;
