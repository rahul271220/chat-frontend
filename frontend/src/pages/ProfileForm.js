
import './profile.css'
import { use, useEffect, useState } from 'react'
import FormSection from './FormSection';
export default function ProfileForm({}) {

      
      
    const [steps, setSteps] = useState(  [
        {
          name: "personal details",
          fields: [
            {
              name: "first_name",
              value: "",
              type: 'TEXT',
              VALIDATION: ["REQUIRED"],
            },
            {
              name: "last_name",
              value: "",
              type: 'TEXT',
              VALIDATION: ["REQUIRED"]
            },
            {
              name: "phone_number",
              value: null,
              type: 'NUMBER',
              VALIDATION: ["REQUIRED"]
            }
          ]
        },
        {
          name: "professional Details",
          fields: [
            {
              name: "Designation",
              value: "",
              type: 'TEXT',
              VALIDATION: ["REQUIRED"]
            },
            {
              name: "Field",
              value: "",
              type: 'TEXT',
              VALIDATION: ["REQUIRED"]
            },
            {
              name: "YOE",
              value: null,
              type: 'NUMBER',
              VALIDATION: ["REQUIRED"]
            }
          ]
        },
        {
          name: "Education",
          fields: [
            {
              name: "Degree",
              value: "",
              type: 'TEXT',
              VALIDATION: ["REQUIRED"]
            },
            {
              name: "CollegName",
              value: "",
              type: 'TEXT',
              VALIDATION: ["REQUIRED"]
            },
            {
              name: "NOC",
              value: null,
              type: 'NUMBER',
              VALIDATION: ["REQUIRED"]
            }
          ]
        }
      ])

const [currentStepNo, setCurrentStepNo] = useState(0);

const currentForm = steps[currentStepNo];

function previousForm() {


}
function handleFormSubmission(data) {
    console.log(data);
    setSteps((prevSteps) =>
        prevSteps.map((item) =>
          item.name === data.name ? { ...item, ...data } : item
        )
    );
    setCurrentStepNo((prevStep) => Math.min(prevStep + 1, steps.length));

}

useEffect(()=> {
    console.log(steps)

}, [steps])

    return <div className='profile-container'>
    <FormSection emitPrevious={previousForm} emitFormValue={handleFormSubmission} currentStep={currentForm}></FormSection>
    </div>
}