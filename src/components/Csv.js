import React from 'react';
import CSVReader from "react-csv-reader";
import { render } from 'react-dom';

import ReactTable from "react-table";
import "react-table/react-table.css";

class Csv extends React.Component{
  render() {
        const handleCsv = data=> {
        this.state=data;
        console.log(this.state)
        console.log(data)
      }
    return(
      <div className="container">

      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV"
        onFileLoaded={handleCsv}
      />
      <button type="submit"> Load </button>



<ReactTable
          data={this.data}
          columns={[
            {
              Header: "Full Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "First Name"
                },
                {
                  Header: "Last Name",
                 accessor:"Last Name"
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Hours Logged",
                  accessor: "Hours"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "ProjectsCompleted",       
                   accessor: "Completed"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        
      
    </div>
)
 };
}
export default Csv;