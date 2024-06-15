
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import DataGridComponent from './components/DataGridComponent';
import axios from 'axios';
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const pushToCRM = () => {
    const apiToken = 'patL62O1FZfAyLIT2.6a7e8a50489573e1081dbe1c2548a9e83c3ccd448b3b70f4a8eb9b72e5768177'; 
    const baseId = 'appLQ5GTrD1AsQnlC';
    const tableName = 'contacts'; 

    users.forEach(user => {
      const newContact = {
        fields: {
          'First Name': user.firstName,
          'Last Name': user.lastName,
          'Email': user.email,
          'Phone': user.phone,
          'Company Name': user.companyName,
          'Designation': user.designation
        }
      };

      axios.post(`https://api.airtable.com/v0/${baseId}/${tableName}`, newContact, {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log('Data pushed to Airtable successfully:', response.data);
        setUsers([])
      })
      .catch(error => {
        console.error('Error pushing data to Airtable:', error);
      });
    });
  };

  return (
    <div>
      <h1 >CRM Data Collector</h1>
      <FormComponent addUser={addUser} />
      <DataGridComponent users={users} pushToCRM={pushToCRM} />
    </div>
  );
};

export default App;
