'use client'

import React, { useState, FormEvent } from 'react';

import { FormSelect, FormInput, FormRadio } from './form-fields';
import { getAcctPredction } from '@/utils';
import apiServer from '@/config/index'
import toast from 'react-hot-toast';


const formFields = [
  {
    title: 'Age',
    name: "age",
    type: "number"
  },
  {
    title: 'Household Size',
    name: "householdSize",
    type: "number"
  },
  {
    title: 'Gender',
    name: "gender",
    type: "radio",
    options: [
      {
        text: "Male",
        value: "Male"
      },
      {
        text: "Female",
        value: "Female"
      }
    ]
  },
  {
    title: 'Location',
    name: "locationType",
    type: "radio",
    options: [
      {
        text: "Urban",
        value: "Urban"
      },
      {
        text: "Rural",
        value: "Rural"
      }
    ]
  },
  {
    title: 'Cellphone Access',
    name: "cellphoneAccess",
    type: "radio",
    options: [
      {
        text: "Yes",
        value: "Yes"
      },
      {
        text: "No",
        value: "No"
      }
    ]
  },
  {
    title: 'Relationship with head of household',
    name: "relationshipWithHead",
    type: "select",
    options: [
      {
        text: "Head of Household",
        value: "Head of Household"
      },
      {
        text: "Spouse",
        value: "Spouse"
      },
      {
        text: "Child",
        value: "Child"
      },
      {
        text: "Parent",
        value: "Parent"
      },
      {
        text: "Non-relative",
        value: "Other non-relative"
      },
      {
        text: "Relative",
        value: "Other relative"
      }
    ]
  },
  {
    title: 'Marital_status',
    name: "maritalStatus",
    type: "select",
    options: [
      {
        text: "Married/Living together",
        value: "Married/Living together"
      },
      {
        text: "Widowed",
        value: "Widowed"
      },
      {
        text: "Single/Never Married",
        value: "Single/Never Married"
      },
      {
        text: "Divorced/Seperated",
        value: "Divorced/Seperated"
      }
    ]
  },
  {
    title: 'Education Level',
    name: "educationLevel",
    type: "select",
    options: [
      {
        text: "No formal education",
        value: "No formal education"
      },
      {
        text: "Vocational/Specialised training",
        value: "Vocational/Specialised training"
      },
      {
        text: "Primary education",
        value: "Primary education"
      },
      {
        text: "Secondary education",
        value: "Secondary education"
      },
      {
        text: "Tertiary education",
        value: "Tertiary education"
      }
    ]
  },
  {
    title: 'Job Type',
    name: "jobType",
    type: "select",
    options: [
      {
        text: "Government Dependent",
        value: "Government Dependent"
      },
      {
        text: "Formally employed (Government)",
        value: "Formally employed Government"
      },
      {
        text: "Formally employed (Private)",
        value: "Formally employed Private"
      },
      {
        text: "Informally employed",
        value: "Informally employed"
      },
      {
        text: "Self employed",
        value: "Self employed"
      },
      {
        text: "Farming and Fishing",
        value: "Farming and Fishing"
      },
      {
        text: "Remittance Dependent",
        value: "Remittance Dependent"
      },
      {
        text: "Other Income",
        value: "Other Income"
      },
      {
        text: "No Income",
        value: "No Income"
      }
    ]
  }
]

const FiaForm = () => {


  const [result, setResult] = useState<any>();




  const handleSubmit = async (event: FormEvent): Promise<void> => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const reqBody = {
      age: form["age"].value as number,
      gender: form["gender"].value as string,
      householdSize: form["householdSize"].value as number,
      maritalStatus: form["maritalStatus"].value as string,
      locationType: form["locationType"].value as string,
      cellphoneAccess: form["cellphoneAccess"].value as string,
      relationshipWithHead: form["relationshipWithHead"].value as string,
      educationLevel: form["educationLevel"].value as string,
      jobType: form["jobType"].value as string
    }

    // Send the form data to prediction API and get a response.
    const response = await getAcctPredction(`${apiServer}/account_prediction`, reqBody)

    // Save data if fetch is successful
    if (response) {
      setResult(response.data)
      showResult(response)
    }

  }

  const showResult = (response: any) => {
    

      toast((t) => {
        t.duration = 7000

        return (
          
          <div className='grid justify-center px-4 py-6'>
            <h6 className='font-bold pb-3 text-2xl'> {response.message} </h6>
            {response.data &&
              <div>
                <p className='text-black pb-1'> Owns a bank account? </p>
                <div>
                  <span> Base Model: </span>
                  <span className='font-bold text-yellow-800 ml-2'> {response.data.base_model.prediction} </span>
                </div>
                <div>
                  <span> Optimized Model: </span>
                  <span className='font-bold text-yellow-800 ml-2'> {response.data.opt_model.prediction} </span>
                </div>
              </div> 
            }
          </div>    
        )
      })
  } 

  return (
    <>
      <form className="mx-auto grid gap-y-6" onSubmit={handleSubmit}>
        {formFields.map((field, index) => {
          let fieldType = field.type

          switch (fieldType) {
            case "number":
            case "text":
              return <FormInput key={index} {...field} />
              break;
            case "select":
              return <FormSelect key={index} {...field} />
              break;
            case "radio":
              return <FormRadio key={index} {...field} />
              break;
            default:
              <></>
              break;
          }
        })}


        <button
          type="submit"
          // className="btn-light hover:bg-gray-100"
          className="btn-dark text-2xl text-yellow-500"
        >
          Submit
        </button>
      </form>
    </>
  );
};


export default FiaForm;