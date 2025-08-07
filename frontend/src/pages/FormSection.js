import { useState, useEffect } from 'react';

export default function FormSection({ currentStep, emitFormValue, emitPrevious }) {
  const [fields, setFields] = useState(currentStep.fields);
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e, fieldData) {
    const { value } = e.target;
    const updatedFields = fields.map((field) =>
      field.name === fieldData.name ? { ...field, value } : field
    );
    setFields(updatedFields);
  }

  useEffect(() => {
    setFields(currentStep.fields);
  }, [currentStep]);

  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    for (const field of fields) {
      if (field.VALIDATION?.includes("REQUIRED") && !field.value) {
        setErrorMsg(`${field.name} is required`);
        return;
      }
    }

    setErrorMsg('');
    emitFormValue({ name: currentStep.name, fields });
  }

  return (
    <div>
      <h1>{currentStep?.name}</h1>

      <form onSubmit={handleSubmit}>
        {fields.map((data) => (
          <div key={data.name} className='form-field'>
            <label htmlFor={data.name}>{data.name}</label>
            <input
              type={data.type === 'NUMBER' ? 'number' : 'text'}
              name={data.name}
              value={data.value || ''}
              onChange={(e) => handleChange(e, data)}
            />
          </div>
        ))}

        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            emitPrevious();
          }}
        >
          Previous
        </button>
      </form>
    </div>
  );
}
