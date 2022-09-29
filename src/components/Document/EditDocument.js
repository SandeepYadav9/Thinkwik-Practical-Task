import React from "react";
import './EditDocument.css'
const EditDocument = ({ editForm, onEditChange, cancelDocument }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          name="fullName"
          placeholder="Full Name"
          value={editForm.fullName}
          onChange={onEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          required
          name="address"
          placeholder="Address"
          value={editForm.address}
          onChange={onEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          required
          name="phoneNumber"
          placeholder="PhoneNumber"
          value={editForm.phoneNumber}
          onChange={onEditChange}
        />
      </td>
      <td>
        <input
          type="email"
          required
          name="email"
          placeholder="Email "
          value={editForm.email}
          onChange={onEditChange}
        />
      </td>
      <td className="actions-edit">
        <button type="submit">Save</button>
        <button onClick={cancelDocument}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditDocument;
