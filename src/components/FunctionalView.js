import React from 'react';
import {render} from "react-dom";
import{makeData} from "./Utils";


import ReactTable from "react-table";
import "react-table/react-table.css";

class FunctionalView extends React.Component{
  constructor(){
    super();
    this.state={
      data: makeData()
    };
    this.renderEditable= this.renderEditable.bind(this);
  }

  renderEditable(cInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cInfo.index][cInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cInfo.index][cInfo.column.id]
        }}
      />
    );
  }
    render(){
        const { data } = this.state;
        return (
            <div className="StaffPlan">
            <h2>Welcome to the Functional Manager View</h2>
            
          <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Hours Logged",
                  accessor: "hours",
                  Cell:this.renderEditable
                },
                {
                  Header: "Status",
                  accessor: "status",
                  Cell:this.renderEditable
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "ProjectsCompleted",
                  accessor: "ProjectsCompleted",
                  Cell:row =>(
                    <div 
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#dadada',
                      }}
                    >
                    <div 
                      style={{
                        width: `${row.value}%`,
                        height: '100%',
                        backgroundColor: row.value >80 ?'#85cc00'
                            :row.value > 50 ? '#ffbf00'
                            :'#ff2e00',
                            borderRadius:'2px',
                            transition: 'all .2s eas-out'
                      }}
                      />
                    </div>
                  )  
              }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />  
            </div>
        );
    }
}

export default FunctionalView;