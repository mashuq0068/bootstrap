// Card.js
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included if needed

// Sample data for the table
const data = [
  { id: 1, bikeName: 'Mountain Bike', renterName: 'John Doe', startTime: '2024-09-10 09:00 AM', endTime: '2024-09-10 12:00 PM', cost: '$30' },
  { id: 2, bikeName: 'Road Bike', renterName: 'Jane Smith', startTime: '2024-09-11 10:00 AM', endTime: '2024-09-11 02:00 PM', cost: '$40' },
  { id: 3, bikeName: 'Hybrid Bike', renterName: 'Mike Johnson', startTime: '2024-09-12 08:00 AM', endTime: '2024-09-12 11:30 AM', cost: '$25' },
  { id: 1, bikeName: 'Mountain Bike', renterName: 'John Doe', startTime: '2024-09-10 09:00 AM', endTime: '2024-09-10 12:00 PM', cost: '$30' },
  { id: 2, bikeName: 'Road Bike', renterName: 'Jane Smith', startTime: '2024-09-11 10:00 AM', endTime: '2024-09-11 02:00 PM', cost: '$40' },
  { id: 3, bikeName: 'Hybrid Bike', renterName: 'Mike Johnson', startTime: '2024-09-12 08:00 AM', endTime: '2024-09-12 11:30 AM', cost: '$25' },
  { id: 1, bikeName: 'Mountain Bike', renterName: 'John Doe', startTime: '2024-09-10 09:00 AM', endTime: '2024-09-10 12:00 PM', cost: '$30' },
  { id: 2, bikeName: 'Road Bike', renterName: 'Jane Smith', startTime: '2024-09-11 10:00 AM', endTime: '2024-09-11 02:00 PM', cost: '$40' },
  { id: 3, bikeName: 'Hybrid Bike', renterName: 'Mike Johnson', startTime: '2024-09-12 08:00 AM', endTime: '2024-09-12 11:30 AM', cost: '$25' },
  { id: 1, bikeName: 'Mountain Bike', renterName: 'John Doe', startTime: '2024-09-10 09:00 AM', endTime: '2024-09-10 12:00 PM', cost: '$30' },
  { id: 2, bikeName: 'Road Bike', renterName: 'Jane Smith', startTime: '2024-09-11 10:00 AM', endTime: '2024-09-11 02:00 PM', cost: '$40' },
  { id: 3, bikeName: 'Hybrid Bike', renterName: 'Mike Johnson', startTime: '2024-09-12 08:00 AM', endTime: '2024-09-12 11:30 AM', cost: '$25' },
  { id: 1, bikeName: 'Mountain Bike', renterName: 'John Doe', startTime: '2024-09-10 09:00 AM', endTime: '2024-09-10 12:00 PM', cost: '$30' },
  { id: 2, bikeName: 'Road Bike', renterName: 'Jane Smith', startTime: '2024-09-11 10:00 AM', endTime: '2024-09-11 02:00 PM', cost: '$40' },
  { id: 3, bikeName: 'Hybrid Bike', renterName: 'Mike Johnson', startTime: '2024-09-12 08:00 AM', endTime: '2024-09-12 11:30 AM', cost: '$25' },
  { id: 1, bikeName: 'Mountain Bike', renterName: 'John Doe', startTime: '2024-09-10 09:00 AM', endTime: '2024-09-10 12:00 PM', cost: '$30' },
  { id: 2, bikeName: 'Road Bike', renterName: 'Jane Smith', startTime: '2024-09-11 10:00 AM', endTime: '2024-09-11 02:00 PM', cost: '$40' },
  { id: 3, bikeName: 'Hybrid Bike', renterName: 'Mike Johnson', startTime: '2024-09-12 08:00 AM', endTime: '2024-09-12 11:30 AM', cost: '$25' },
];

// Define columns
const columns = [
  {
    name: 'Bike Name',
    selector: row => row.bikeName,
    sortable: true,
  },
  {
    name: 'Renter Name',
    selector: row => row.renterName,
    sortable: true,
  },
  {
    name: 'Start Time',
    selector: row => row.startTime,
    sortable: true,
  },
  {
    name: 'End Time',
    selector: row => row.endTime,
    sortable: true,
  },
  {
    name: 'Cost',
    selector: row => row.cost,
    sortable: true,
  },
];

const Card = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Bike Rentals</h1>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive
        striped
      />
    </div>
  );
};

export default Card;
