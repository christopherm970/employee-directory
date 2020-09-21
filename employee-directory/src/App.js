import React, { Component } from 'react';
import EmployeeTable from './components/Table';


class App extends Component {
    state = {
        employees: []
    }
    render(){
        return (
            <div className="container">
            <EmployeeTable 
            employees = {this.state.employees}/>
            </div>
        )
    }
}

export default App;