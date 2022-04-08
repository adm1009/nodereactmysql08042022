import React from "react";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
import "../Home.css"
type props = {
 username:any
}
class MyRegularize extends React.Component<props,{username:any}>{
  constructor(props:props){
    super(props);
    this.state = {
      username:this.props.username
    }  
  }
  data=localStorage.getItem("regularizedetails") as string;
  dataArray = JSON.parse(this.data);
  render(){
    
  if (!this.data)
    {return (
      <>
        <Navbar personalData leaveData employeeData username={this.props.username}/>
      <div style={{textAlign:"center"}}>

        <span style={{ textDecoration: "underline" }}>My Regularization</span>
        <hr />
        <span style={{ color: "green" }}>Nothing in Regularizartion</span>
      </div>
      </>
    );
    } 
  return (
    <>
      <Navbar personalData leaveData employeeData username={this.props.username}/>
      <div style={{textAlign:"center"}}>
      <span style={{ textDecoration: "underline" }}>My Regularization</span>
      <hr />
      <table id="data" style={{marginLeft:"430px"}}>
        <thead>
          <tr>
            <td>
              <h3>Approver</h3>
            </td>
            <td>
              <h3>Date</h3>
            </td>
            <td>
              <h3>Checkin</h3>
            </td>
            <td>
              <h3>Checkout</h3>
            </td>
            <td>
              <h3>Reason</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.dataArray.approver}</td>
            <td>{this.dataArray.date}</td>
            <td>{this.dataArray.checkin}</td>
            <td>{this.dataArray.checkout}</td>
            <td>{this.dataArray.reason}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};
}
export default MyRegularize;
