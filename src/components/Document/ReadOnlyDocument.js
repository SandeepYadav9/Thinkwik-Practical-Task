import React from 'react'

const ReadOnlyDocument = ({document, editDocumentInput}) => {
  return (
    <tr>
    <td>{document.fullName}</td>
    <td>{document.address}</td>
    <td>{document.phoneNumber}</td>
    <td>{document.email}</td>
    <td>
      <button onClick={(e)=>editDocumentInput(e, document)}>Edid</button>
      <button>Remove</button>
    </td>
  </tr>
  )
}

export default ReadOnlyDocument