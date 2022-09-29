import React from "react";

const EditDocument = ({ editForm, onEditChange, cancelDocument }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          placeholder="Full Name"
          value={editForm.fullName}
          onChange={onEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Address"
          value={editForm.address}
          onChange={onEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="PhoneNumber"
          value={editForm.phoneNumber}
          onChange={onEditChange}
        />
      </td>
      <td>
        <input
          type="email"
          required
          placeholder="Email "
          value={editForm.email}
          onChange={onEditChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button onClick={cancelDocument}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditDocument;
