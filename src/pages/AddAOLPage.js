import AOLForm from "../components/AOLForm"

const handleAddAOL = (newAOL) => {
  // Perform some action with newAOL data
};


const AddAOLPage = () => {



  return (
    <div>
      <AOLForm onAddAOL={handleAddAOL}/>
    </div>
  )
}

export default AddAOLPage

