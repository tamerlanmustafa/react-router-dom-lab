import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({ boxSize: "Small", boxholder: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder Name:
        <input
          type="text"
          value={formData.boxholder}
          onChange={(e) => setFormData({ ...formData, boxholder: e.target.value })}
          required
        />
      </label>
      <label>
        Box Size:
        <select
          value={formData.boxSize}
          onChange={(e) => setFormData({ ...formData, boxSize: e.target.value })}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
