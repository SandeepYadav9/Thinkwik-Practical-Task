import React from "react";

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
      <td>
        <button onClick={(e) => editDocumentInput(e, document)}>Edid</button>
        <button onClick={() => deleteDocumentInput(document)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyDocument;
