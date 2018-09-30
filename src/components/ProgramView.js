import React from 'react';
import {render} from "react-dom";
import{makeData} from "./Utils";
import {CSVLink} from 'react-csv';
import CSVReader from "react-csv-reader";


import ReactTable from "react-table";
import "react-table/react-table.css";

import treeTableHOC from "react-table/lib/hoc/treeTable";

import testSet from "./test_set";

const TreeTable = treeTableHOC(ReactTable);

function getTdProps(state, ri, ci) {
  console.log({ state, ri, ci });
  return {};
}
class ProgramView extends React.Component {
  
  
  constructor() {
    super();
    this.state = {
      
      data: testSet
    };
  }
  render() {
    const { data } = this.state;
    
    return (
      <div className="StaffPlan">
      <h2>Welcome to the Program Manager View</h2>
        <TreeTable
          filterable
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id;
            return row[id] !== undefined
              ? String(row[id])
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              : true;
          }}
          data={data}
          pivotBy={["Level", "Type", "FM"]}
          columns={[
            //Allows pivot to sort more completely
           
            {
              accessor: "Level"
            },
            {
              accessor: "Type"
            },
            {
              accessor: "FM"
            },

            // More columns we want to display
            {
              Header: "First Name",
              accessor: "First name"
            },
            {
              Header: "Last Name",
              accessor: "Last name"
            },
            {
              Header: "EmpNo",
              accessor: "EmpNo"
            },
            {
              Header: "Dept",
              accessor: "Dept"
            }
          ]}
          defaultPageSize={10}
          SubComponent={row => {
            
            const columns = [
              {
                Header: " ",
                accessor: "property",
                width: 200,
                Cell: ci => {
                  return `${ci.value}:`;
                },
                style: {
                  backgroundColor: "#DDD",
                  textAlign: "right",
                  fontWeight: "bold"
                }
              },
              { Header: "Employee Information", accessor: "value" }
            ];
            const rowData = Object.keys(row.original).map(key => {
              return {
                property: key,
                value: row.original[key].toString()
              };
            });
            return (
              <div style={{ padding: "10px" }}>
                <ReactTable
                  data={rowData}
                  columns={columns}
                  pageSize={rowData.length}
                  showPagination={false}
                />
              </div>
            );
          }}
        />
        <br />
        <CSVLink data={data}>
Download as CSV
    </CSVLink>
      </div>
    );
  }
 
}

export default ProgramView;