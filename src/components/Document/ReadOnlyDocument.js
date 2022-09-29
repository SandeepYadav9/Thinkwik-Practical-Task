import React from "react";
import './ReadOnlyDocument.css'
const ReadOnlyDocument = ({
  document,
  editDocumentInput,
  deleteDocumentInput,
}) => {
  return (
    <tr>
      <td>{document.fullName}</td>
      <td>{document.address}</td>
      <td>{document.phoneNumber}</td>
      <td>{document.email}</td>
      <td className="actions-read">
        <button onClick={(e) => editDocumentInput(e, document)}>Edit</button>
        <button onClick={() => deleteDocumentInput(document)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyDocument;
