import React from 'react';
import "components/InterviewerListItem.scss";
const classNames = require('classnames');

export default function InterviewerListItem(props) {

  const interviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected":props.selected
  })

  return (
    <li onClick={() => props.setInterviewer(props.id)} className={interviewersClass} >
     <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
      />
    {props.selected? props.name:""}
    </li>
  );

}