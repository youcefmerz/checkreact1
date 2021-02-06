import React from 'react'
import './Form.css';

const Form = (props) =>{
     return (
        <div className="Form">
<form className="form-horizontal" action='' method="POST">
  
    <div id="legend">
      <legend className="">Register</legend>
    </div>
    <div className="control-group">
      
      <label className="control-label"  for="username">Username</label>
      <div className="controls">
        <input type="text" id="username" name="username" placeholder="" className="input-xlarge"/>
        
      </div>
    </div>
 
    <div className="control-group">
      
      <label className="control-label" for="email">E-mail</label>
      <div className="controls">
        <input type="text" id="email" name="email" placeholder="" className="input-xlarge"/>
        <p className="help-block">Please provide your E-mail</p>
      </div>
    </div>
 
    <div className="control-group">
      
      <label className="control-label" for="password">Password</label>
      <div className="controls">
        <input type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
        <p className="help-block">Password should be at least 4 characters</p>
      </div>
    </div>
 
    <div className="control-group">
     
      <label className="control-label"  for="password_confirm">Password (Confirm)</label>
      <div className="controls">
        <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge"/>
        <p className="help-block">Please confirm password</p>
      </div>
    </div>
 
    <div className="control-group">
      
      <div className="controls">
        <button className="btn btn-success">Register</button>
      </div>
    </div>
  
</form>
          
        </div>
    )
}

export default Form