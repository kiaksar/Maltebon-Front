import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

function ControlledOpenSelect() {
    const [values, setValues] = React.useState([
        "Bam",
        "Kate",
        "Nicole",
        "Aaron"
      ]);
      const [selected, setSelected] = React.useState("Bam");
    
      function handleChange(event) {
        setSelected(event.target.value);
      }
    
      return (
        <FormControl>
          <InputLabel htmlFor="agent-simple">Agent</InputLabel>
          <Select
            value={selected}
            onDoubleClick={handleChange}
            inputProps={{
              name: "agent",
              id: "age-simple"
            }}
          >
            {values.map((value, index) => {
              return <MenuItem key={value} value={value}>{value}</MenuItem>;
            })}
          </Select>
        </FormControl>
      );
}


export default ControlledOpenSelect;