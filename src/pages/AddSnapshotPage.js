import React, {useEffect} from 'react';
import SnapshotForm from '../components/SnapshotForm';
import { useParams } from 'react-router-dom';

const AddSnapshotPage = () => {
  const { todayId } = useParams(); // Get the todayId from the URL parameters

  const handleAddSnapshot = (newSnapshot) => {
    // Perform some action with the newSnapshot data
  };

    // Debugging: Log the todayId when the component mounts
    useEffect(() => {
    }, []);

  return (
    <div>
      <h3> Add New Snapshot </h3>
      <SnapshotForm onAddSnapshot={handleAddSnapshot} todayId={todayId} /> {/* Pass todayId as a prop */}
    </div>
  );
};

export default AddSnapshotPage;
