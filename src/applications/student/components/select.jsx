import React from "react";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const styles = {
  root: {
    width: "120px"
  },
  input: {
    padding: "10px 14px"
  }
};

class SimpleSelect extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        
        <Select
          value={20}
          className={classes.root}
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleSelect);
