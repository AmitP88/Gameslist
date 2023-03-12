import React from "react";
import Button from '@mui/material/Button';
import "../styles/ListButtons.scss";


export default function ListButtons() {
  return (
    <div className="ListButtons">
      <Button variant="contained">Create List</Button>
      <Button variant="contained">Delete List</Button>
    </div>
  )
}