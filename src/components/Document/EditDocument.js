import React from 'react'

const EditDocument = () => {
  return (
    <tr>
       <td>
        <input type="text" required placeholder='Full Name' />
       </td>
       <td>
        <input type="text" required  placeholder='Address'/>
       </td>
       <td>
        <input type="text" required placeholder='PhoneNumber'/>
       </td>
       <td>
        <input type="text" required placeholder='Email '/>
       </td>
       <td>
        <button>Save</button>
        <button>Cancel</button>
       </td>
    </tr>
  )
}

export default EditDocument