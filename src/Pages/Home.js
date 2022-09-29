import React, { Fragment, useState } from "react";
import "./Home.css";
import documents from "../Data/document.json";
import ReadOnlyDocument from "../components/Document/ReadOnlyDocument";
import { nanoid } from "nanoid";
import EditDocument from "../components/Document/EditDocument";
import Pagination from "../components/Pagination/Pagination";
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

  // <-----------------------------------Paginaton State ----------------------->
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);

  // <-----------------------------------Vlidate form  ----------------------->
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
  const onEditChange = (e) => {
    let editName = e.target.name;
    let editValue = e.target.value;
    let newEditForm = { ...editForm };
    newEditForm[editName] = editValue;
    setEditForm(newEditForm);
  };

  const editDocumentInput = (e, document) => {
    e.preventDefault();
    setEditId(document.id);
    const formValues = {
      fullName: document.fullName,
      address: document.address,
      phoneNumber: document.phoneNumber,
      email: document.email,
    };
    setEditForm(formValues);
  };

  const editFormSubmit = (e) => {
    e.preventDefault();
    const editedDocument = {
      id: editId,
      fullName: editForm.fullName,
      address: editForm.address,
      phoneNumber: editForm.phoneNumber,
      email: editForm.email,
    };
    const newDocuments = [...documentDatas];
    const index = documentDatas.findIndex((contact) => contact.id === editId);
    newDocuments[index] = editedDocument;
    setDocumentDatas(newDocuments);
    setEditId(null);
  };

  // <-----------------------------------Delete Document Input  ----------------------->
  const deleteDocumentInput = (documentId) => {
    const newDocuments = [...documentDatas];
    const index = documentDatas.findIndex(
      (contact) => contact.id === documentId
    );
    newDocuments.splice(index, 1);
    setDocumentDatas(newDocuments);
  };
  // <-----------------------------------Cancel Document  ----------------------->
  const cancelDocument = () => {
    setEditId(null);
  };

  // <----------------------------------- Pagination Per page number of list----------------------->
  let indexOfLastPost = currentPage * postPerPage;
  let indexOfFirstPost = indexOfLastPost - postPerPage;
  let currentPosts = documentDatas.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="home-container">
        {/* <-----------------------------------Table Input Document Filed------------------------------------> */}
        <div className="home-container1">
          <h2>Add Documents</h2>
          <form className="add-document" onSubmit={submitFormData}>
            <input
              className="add-input"
              type="text"
              value={formValidation.fullName}
              onChange={onChangeValidationForm}
              name="fullName"
              required
              placeholder=" Nmae..."
            />
            <input
              className="add-input"
              type="text"
              value={formValidation.address}
              onChange={onChangeValidationForm}
              name="address"
              required
              placeholder="Address..."
            />
            <input
              className="add-input"
              type="text"
              value={formValidation.phoneNumber}
              onChange={onChangeValidationForm}
              name="phoneNumber"
              required
              placeholder="Phone Number..."
            />
            <input
              className="add-input"
              type="email"
              value={formValidation.email}
              onChange={onChangeValidationForm}
              name="email"
              required
              placeholder="Email..."
            />
            <button className="submit-button" type="submit">
              Add
            </button>
          </form>
          {/* <-----------------------------------Table Filed------------------------------------> */}
          <form onSubmit={editFormSubmit}>
            <table>
              {documentDatas.length > 0 && (
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>EMAIL</th>
                    <th>Actions </th>
                  </tr>
                </thead>
              )}
              <tbody>
                {currentPosts.map((document) => (
                  <Fragment key={document.id}>
                    {editId === document.id ? (
                      <EditDocument
                        editForm={editForm}
                        onEditChange={onEditChange}
                        cancelDocument={cancelDocument}
                      />
                    ) : (
                      <ReadOnlyDocument
                        editDocumentInput={editDocumentInput}
                        document={document}
                        deleteDocumentInput={deleteDocumentInput}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
            {documentDatas.length === 0 && (
              <div className="document-empty"> No document found!!</div>
            )}
          </form>
        </div>
      </div>
      {/* <----------------------------------- Pagination -----------------------> */}
      <div>
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={documentDatas.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Home;
