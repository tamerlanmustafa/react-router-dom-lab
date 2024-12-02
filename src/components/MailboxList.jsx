import React from "react";
import { Link } from "react-router-dom";
import './MailboxList.css'

const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-list">
      {mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mail-box">
          <p>Box Number: {mailbox._id}</p>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;
