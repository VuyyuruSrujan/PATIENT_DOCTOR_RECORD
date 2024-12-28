import React, { useState } from "react";

const RecordForm = ({ addRecord }) => {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientName && doctorName && notes) {
      addRecord({ patientName, doctorName, notes });
      setPatientName("");
      setDoctorName("");
      setNotes("");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <form className="record-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Doctor Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Add Record</button>
    </form>
  );
};

export default RecordForm;
