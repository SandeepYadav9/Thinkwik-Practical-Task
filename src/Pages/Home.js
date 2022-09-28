import React, { Fragment, useState } from "react";
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

  const [editForm, setEditForm] = useState({
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

  const submitFormData = (e) => {
    e.preventDefault();
    let newFormData = {
      id: nanoid(),
      fullName: formValidation.fullName,
      address: formValidation.address,
      phoneNumber: formValidation.phoneNumber,
      email: formValidation.email,
    };

    setDocumentDatas([...documentDatas, newFormData]);
  };
  // <-------------------------Edit Form --------------------->
 const onEditChange=(e)=>{
    let editName = e.target.name;
    let editValue = e.target.value;
    let newEditForm = { ...editForm };
    newEditForm[editName] = editValue;
    setEditForm(newEditForm);
 }

  const editDocumentInput = (e, document) => {
    e.preventDefault();
    setEditId(document.id);
    const formValues = {
        fullName:document.fullName,
        address: document.address,
        phoneNumber: document.phoneNumber,
        email: document.email
      };
 
     setEditForm(formValues)   
  };
const editFormSubmit=(e)=>{
    e.preventDefault();

   

}
  return (
    <div className="home-container">
      {/* <-----------------------------------Table Filed------------------------------------> */}
      <form onSubmit={editFormSubmit}>
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
          {documentDatas.map((document) =>(
              <Fragment key={document.id}>
                {editId === document.id ? (
                  <EditDocument
                  editForm={editForm}
                  onEditChange={onEditChange}
                 
                  />
                ) : (
                  <ReadOnlyDocument
                    editDocumentInput={editDocumentInput}
                    document={document}
                  />
                )}
              </Fragment>
            )
          )}
        </tbody>
      </table>
      </form>
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
