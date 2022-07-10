import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Select , { SelectChangeEvent } from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';
import ControlledOpenSelect from './AddNodeSelectPlugin';
import TextField from "@material-ui/core/TextField";

export const AddNodeForm = ({ onSubmit }) => {


  const [state , setState] = useState({
    plugin:"",
    target:""
  })
  return (
    <form onSubmit={onSubmit} style={{textAlign:'center'}}>
    <div className="form-group">
      <TextField
                      onChange={(e) => {
                        setState({ plugin: e.target.value });
                      }}
                      id="Plugin-basic"
                      label="Plugin"
                      variant="filled"
                      defaultValue="user"
                      style={{width:'17vw', marginBottom:'1vh', background:'#9ef01a', }}
                      inputProps={{ readOnly: true, }}
                      
      />

      </div>
      <div className="form-group">
      <TextField
                      onChange={(e) => {
                        setState({ target: e.target.value });
                      }}
                      id="Token-basic"
                      label="Target"
                      variant="filled"
                      style={{width:'17vw', marginBottom:'2vh', background:'#9ef01a'}}

                      
      />
      </div>
      <div className="form-group">
          <Button
          className="form-control btn btn-primary" 
          type="submit"
          color="primary"
          style={{ width: "auto" , borderRadius:100,background:'#008000',color:'#FFF' }}
        >
          Add
        </Button>
    </div>
    </form>
  );
};
export default AddNodeForm;