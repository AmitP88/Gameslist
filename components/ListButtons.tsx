import React from "react";
import Button from '@mui/material/Button';
// import SvgIcon from '@mui/material/SvgIcon';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

import "../styles/ListButtons.scss";


export default function ListButtons() {
  return (
    <div className="ListButtons">
      <Button variant="contained" className="createButton"><AddIcon />Create List</Button>
      <Button variant="contained" className="deleteButton"><ClearIcon />Delete List</Button>
    </div>
  )
}