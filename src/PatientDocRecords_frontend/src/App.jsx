import React, { useState } from "react";
import RecordForm from "./RecordForm";
import "./App.css";

const App = () => {
  const [records, setRecords] = useState([]);

  const addRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  return (
    <div className="app-container">
      <h1>Patient-Doctor Records</h1>
      <RecordForm addRecord={addRecord} />
      <div className="record-list">
        <h2>Records</h2>
        {records.length > 0 ? (
          records.map((record, index) => (
            <div key={index} className="record-item">
              <p><strong>Patient:</strong> {record.patientName}</p>
              <p><strong>Doctor:</strong> {record.doctorName}</p>
              <p><strong>Notes:</strong> {record.notes}</p>
            </div>
          ))
        ) : (
          <p>No records available.</p>
        )}
      </div>
    </div>
  );
};

export default App;
