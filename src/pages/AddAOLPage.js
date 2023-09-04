import AOLForm from "../components/AOLForm"

const handleAddAOL = (newAOL) => {
  // Perform some action with newAOL data
};


const AddAOLPage = () => {



  return (
    <div>
      <h3> Login </h3>
      <AOLForm onAddAOL={handleAddAOL}/>
    </div>
  )
}

export default AddAOLPage

