import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Pagination from './Pagination';

const ComplaintList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Display 10 accordion items per page

  useEffect(() => {
    // Load data from the JSON file
    fetch('http://localhost:8000/data')
      .then((response) => response.json())
      .then((jsonData) => {
        // Ensure all items have a 'status' property with a default value
        const dataWithStatus = jsonData.map((item) => ({
          ...item,
          status: item.status || 'Pending', // Set 'Pending' as the default status
        }));

        // Store the updated JSON data in state
        setData(dataWithStatus);

        // Check if there is data in local storage
        const localData = localStorage.getItem('complaintData');
        if (localData) {
          // Parse and merge local storage data with the JSON data
          const parsedData = JSON.parse(localData);
          const mergedData = [...dataWithStatus, ...parsedData];
          setData(mergedData);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusChange = (event, item) => {
    const newStatus = event.target.value;
    item.status = newStatus;

    // If you need to save the updated status in local storage, do so here.

    // Force a re-render by updating the data state.
    setData([...data]);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Accordion allowMultiple={false}>
        {currentItems.map((item) => (
          <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header >
              <div>
                {item.Complaint_Title}, {item.Room_No}
              </div>
            </Accordion.Header>
            <Accordion.Body  >
              <p>Date: {item.Date}</p>
              <p>Name: {item.Name}</p>
              <p>Roll No.: {item.Roll_No}</p>
              <p>Room No.: {item.Room_No}</p>
              <p>Complaint Category: {item.Category_of_complaint}</p>
              <p>Complaint Title: {item.Complaint_Title}</p>
              <p>Complaint Description: {item.Complaint_Description}</p>
              <div id="status" className={item.status.toLowerCase()}>
                <span>
                  Completed
                  <input
                    type="radio"
                    name={`status-${item.id}`}
                    value="Completed"
                    checked={item.status === 'Completed'}
                    onChange={(e) => handleStatusChange(e, item)}
                  />
                </span>
                <span>
                  Pending
                  <input
                    type="radio"
                    name={`status-${item.id}`}
                    value="Pending"
                    checked={item.status === 'Pending'}
                    onChange={(e) => handleStatusChange(e, item)}
                  />
                </span>
                <span>
                  Issue
                  <input
                    type="radio"
                    name={`status-${item.id}`}
                    value="Issue"
                    checked={item.status === 'Issue'}
                    onChange={(e) => handleStatusChange(e, item)}
                  />
                </span>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default ComplaintList;
