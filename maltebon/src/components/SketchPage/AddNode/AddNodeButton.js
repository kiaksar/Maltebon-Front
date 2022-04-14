import React from 'react';
import Button from "@material-ui/core/Button";
import './AddNodeStyle.css'

const AddNodeTrigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    
    <Button
      ref={buttonRef}
      onClick={showModal}
      type="button"
      color="primary"
      style={{ width: "100%" , borderRadius:100 }}
    >
      {triggerText}
    </Button>
  );
};
export default AddNodeTrigger;