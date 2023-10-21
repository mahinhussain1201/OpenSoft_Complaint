import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FileComplaint = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    roomNumber: '',
    category: 'Mess',
    complaintTitle: '',
    complaintDescription: '',
    currentDate: '', // Add a field for the current date
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Set the current date in ISO format
    const currentDate = new Date().toISOString();

    // Update the form data with the current date
    setFormData({ ...formData, currentDate });

    // Store the form data in local storage
    localStorage.setItem('complaintData', JSON.stringify(formData));

    // Close the modal
    handleClose();
  };

  return (
    <section className="FileComplaint" >
      <div variant="primary" onClick={handleShow}>
        File Complaint
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Complaint</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleFormChange}
              />

<label htmlFor="rollNumber">Roll Number</label>
              <input
                type="text"
                id="rollNumber"
                name="rollNumber"
                className="form-control"
                value={formData.rollNumber}
                onChange={handleFormChange}
              />

              <label htmlFor="roomNumber">Room Number</label>
              <input
                type="text"
                id="roomNumber"
                name="roomNumber"
                className="form-control"
                value={formData.roomNumber}
                onChange={handleFormChange}
                placeholder="(eg. A-000)"
              />

              <label htmlFor="category">Category: </label>
              <select
                id="category"
                name="category"
                className="form-control"
                value={formData.category}
                onChange={handleFormChange}
              >
                <option value="Mess">Mess</option>
                <option value="Electrical">Electrical</option>
                <option value="Hygiene">Hygiene</option>
                <option value="Internet">Internet</option>
                <option value="Misc.">Misc.</option>
              </select>

              <label htmlFor="complaintTitle">Complaint Title</label>
              <input
                type="text"
                id="complaintTitle"
                name="complaintTitle"
                className="form-control"
                value={formData.complaintTitle}
                onChange={handleFormChange}
              />

              <label htmlFor="complaintDescription">Complaint Description</label>
              <textarea
                id="complaintDescription"
                name="complaintDescription"
                className="form-control"
                value={formData.complaintDescription}
                onChange={handleFormChange}
              />

              <input
                type="hidden" // Hidden input for the current date
                name="currentDate"
                value={formData.currentDate}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default FileComplaint;
