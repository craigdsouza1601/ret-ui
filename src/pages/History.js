import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { renderProgress } from '@mui/x-data-grid-generator';

const columns = [
  { field: 'id', headerName: 'Patient ID', flex: 1, hideable: false, headerAlign: 'center' },
  { field: 'firstName', headerName: 'First Name', flex: 1, hideable: false, headerAlign: 'center' },
  { field: 'lastName', headerName: 'Last Name', flex: 1, hideable: false, headerAlign: 'center' },
  { field: 'age', headerName: 'Age', type: 'number', flex: 1, hideable: true, headerAlign: 'center'},
  { field: 'date', headerName: 'Date', type: 'date', flex: 1, hideable: true, headerAlign: 'center', valueGetter: ({ value }) => value && new Date(value)},
  { field: 'prediction', headerName: 'Prediction', flex: 1, hideable: false, headerAlign: 'center' },
  { field: 'probability', headerName: 'Probability', flex: 1, renderCell: renderProgress, hideable: true, headerAlign: 'center' },

];



const History = () => {

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, date: '2000-01-16', prediction: 'Yes', probability: 0.92 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, probability: 0.72 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, probability: 0.62 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, probability: 0.52 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, probability: 0.42 },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, probability: 0.32 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, probability: 0.22 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, probability: 0.12 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, probability: 0.82 },
        { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35, probability: 0.92 },
        { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35, probability: 0.92 },
        { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42, probability: 0.72 },
        { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45, probability: 0.62 },
        { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16, probability: 0.52 },
        { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null, probability: 0.42 },
        { id: 16, lastName: 'Melisandre', firstName: null, age: 150, probability: 0.32 },
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44, probability: 0.22 },
        { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36, probability: 0.12 },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65, probability: 0.82 },
      ];

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        sx={{
            boxShadow: 2,
            border: 2,
            borderColor: '#000',
            '& .MuiDataGrid-iconSeparator': {
                color: '#a9a9a9',
              },
            '& .MuiDataGrid-cell': {
                backgroundColor: '#ececec',
            },
              
          }}
      />
    </div>
  );
}

export default History;