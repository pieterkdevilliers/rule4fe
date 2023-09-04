import SnapshotForm from "../components/SnapshotForm";

const handleAddSnapshot = (newSnapshot) => {
  console.log('handleAddSnapshot called with:', newSnapshot);
  // Perform some action with newAOL data
};


const AddSnapshotPage = () => {



  return (
    <div>
      <h3> Add New Snapshot </h3>
      <SnapshotForm onAddSnapshot={handleAddSnapshot}/>
    </div>
  )
}

export default AddSnapshotPage

