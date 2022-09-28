import React, { useState } from "react";
import "./Home.css";
import documents from "../Data/document.json";
import ReadOnlyDocument from "../components/Document/ReadOnlyDocument";
import { nanoid } from "nanoid";
import EditDocument from "../components/Document/EditDocument";
const Home = () => {
  const [documentDatas, setDocumentDatas] = useState(documents);
  const [editId, setEditId] = useState(null);
  const [formValidation, setFormValidatation] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const onChangeValidationForm = (e) => {
    let fildedName = e.target.name;
    let filedValue = e.target.value;
    let newFormData = { ...formValidation };
    newFormData[fildedName] = filedValue;    
    setFormValidatation(newFormData);
  };

const submitFormData = (e)=>{
    e.preventDefault()
    let newFormData ={   
        id: nanoid(),   
        fullName: formValidation.fullName,
        address: formValidation.address,
        phoneNumber:formValidation.phoneNumber,
        email: formValidation.email
    }
   
    setDocumentDatas([...documentDatas, newFormData])
}

const editDocumentInput=(e, document)=>{
    e.preventDefault()
    setEditId(document.id)
}
  return (
    <div className="home-container">
      {/* <-----------------------------------Table Filed------------------------------------> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>EMAIL</th>
            <th>Actions </th>
            <th>
              <input type="text" placeholder="Search Filed" />
            </th>
          </tr>
        </thead>
        <tbody>
          {documentDatas.map((document) => {
            return(
            <>
            {editId === document.id ? <EditDocument/> : <ReadOnlyDocument editDocumentInput={editDocumentInput} document={document}/> }

            </>
          )})}
        </tbody>
      </table>
      {/* <-----------------------------------Table Input Document Filed------------------------------------> */}
      <h2>Add Documents</h2>
      <form onSubmit={submitFormData}>
        <input
          type="text"
          value={formValidation.fullName}
          onChange={onChangeValidationForm}
          name="fullName"
          required
          placeholder=" Nmae..."
        />
        <input
          type="text"
          value={formValidation.address}
          onChange={onChangeValidationForm}
          name="address"
          required
          placeholder="Address..."
        />
        <input
          type="text"
          value={formValidation.phoneNumber}
          onChange={onChangeValidationForm}
          name="phoneNumber"
          required
          placeholder="Phone Number..."
        />
        <input
          type="email"
          value={formValidation.email}
          onChange={onChangeValidationForm}
          name="email"
          required
          placeholder="Email..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Home;
