import React from "react";

import TextField from '@material-ui/core/TextField';
  
function Calendar(){
  
  return (
    <div style={{
		margin: "10px auto",
      	display: 'block',
      	width: 'fit-content'
    }}>
      <h3 style={{marginBottom:"10px"}}>Calendar</h3>
      <TextField
        id="date"
        label="Choose your birthdate"
        type="date"
        defaultValue="2023-02-13"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
  
export default Calendar;