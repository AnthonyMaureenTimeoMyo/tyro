import React from "react";

//Company, Salary, Job title,status,platform
export default function Applications(){
    return (
        <div class = "applicationInfo">
            <h1>Application Info:</h1>
            <form action="">
                <label htmlFor="company">Company </label>
                <input id="company" type="text"/>
                <br>
                </br>
                <label htmlFor="Salary">Salary </label>
                <input id="salary" type="text"/>
                <br>
                </br>
                <label htmlFor="jobTitle">Job Title </label>
                <input id="jobTitle" type="text"/>
                <br>
                </br>
                <label htmlFor="status">App. Status </label>
                <input id="status" type="text"/>
                <br>
                </br>
                <label htmlFor="platform">Platform </label>
                <input id="platform" type="text"/>
                <button type='submit'>Apply</button>
            </form>
        </div>
    )
}
//<form>
{/* <h1>Log in here:</h1>    
<input
  type='email'
  placeholder='Email'
  onChange={this.userInfo}
/><br></br>
 <input */}