import React from "react";
import "./Contact.css";
function Contact(props) {
  var name = props.name.toUpperCase();
  var color = { color: "blue" };
  return (
    <div className="cont">
      <h3 style={props.st}>
        {name} Contact Page - {props.id[0]}
      </h3>
      <label>Email</label>
      <input type="text" />
      <label>Message</label>
      <textarea></textarea>
      <button>Send</button>
    </div>
  );
}

export default Contact;
