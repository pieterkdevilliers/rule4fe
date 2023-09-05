import React, { useState, useEffect } from 'react';
import AOLItem from '../components/AOLItem';
import AOLForm from '../components/AOLForm';
import AddAOLButton from '../components/AddAOLButton';

const AOLListPage = () => {
  let [aols, setAOLs] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    getAOLs();
  }, []);

  let getAOLs = async () => {
    const token = localStorage.getItem('token');
    let response = await fetch('/snapshots/api/v1/aols', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the header
      },});

    let data = await response.json();
    setAOLs(data);
  };

  const handleAddAOL = (newAOL) => {
    setAOLs([...aols, newAOL]);
    setIsFormVisible(false); // Hide the form after adding AOL
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Step 2
  };

  return (
    <div>
      <div>
        {aols.map((aol, index) => (
          <AOLItem key={index} aol={aol} />
        ))}
      </div>
      <AddAOLButton onClick={toggleFormVisibility} />
      {isFormVisible && <AOLForm onAddAOL={handleAddAOL} />}
    </div>
  );
};

export default AOLListPage;
