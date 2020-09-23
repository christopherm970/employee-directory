import React, { Component } from 'react';
import EmployeeTable from './components/Table';
import Navbar from './components/Navbar'
import employeejson from './employee.json';

class App extends Component {
    state = {
        employees: [],
        filteredEmployees: []
    }
    componentDidMount(){
        this.setState({employees: employeejson, filteredEmployees:employeejson})
    }

    sortEmployee= (event) => {
        const {id} = event.target
        console.log(id);
        const {employees} = this.state

        const filtered =  employees.sort((a,b) => a[id] - b[id])
        this.setState({filteredEmployees:filtered})
    }
    render(){
        return (
            <div className="container">
            <Navbar />
            <EmployeeTable 
            employees = {this.state.filteredEmployees}
            sortEmployee = {this.sortEmployee}
            />
            
            </div>
        )
    }
}

export default App;