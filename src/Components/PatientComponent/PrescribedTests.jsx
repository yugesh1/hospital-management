import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { updatePrescribedTests } from "../../actions/patientActions";

const PrescribedTests = ({ patientData }) => {
  const { id } = useParams();

  const patientId = id.slice(0, 24);

  const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), title: "", description: "" },
  ]);

  const handleChangeInput = (id, e) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[e.target.name] = e.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), title: "", description: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePrescribedTests(patientId, inputFields));
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <div>
      <div className="flex">
        <h1>Prescribed Tests</h1>{" "}
        <button onClick={handleAddFields} className="mx-4 bg-red-400 px-4">
          +
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id} className="flex">
            <input
              name="title"
              placeholder="title"
              className="border border-black my-4"
              value={inputField.title}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <input
              name="description"
              placeholder="description"
              className="border border-black my-4"
              value={inputField.description}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <div>
              <button
                className="border border-red-500 my-4"
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
        <button
          className="px-4 bg-red-800 text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PrescribedTests;
