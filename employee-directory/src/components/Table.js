import React from "react";

const EmployeeTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th onClick={props.sortEmployee} id="name" scope="col">Name</th>
          <th onClick={props.sortEmployee} id="position" scope="col">Position</th>
          <th onClick={props.sortEmployee} id="email"scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
          {props.employees.map(employee => (
            <tr>
          <th scope="row">{employee.id}</th>
          <td>{employee.name}</td>
          <td>{employee.position}</td>
          <td>{employee.email}</td>
        </tr>   
        ))}
        
      </tbody>
    </table>
  );
};

export default EmployeeTable;