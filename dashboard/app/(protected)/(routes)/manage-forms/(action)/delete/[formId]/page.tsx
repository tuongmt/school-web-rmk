import React from 'react'

const FormDetails = ({ params }: { params: { formId: number } }) => {
  return <div>FormDetails {params.formId}</div>
}

export default FormDetails
