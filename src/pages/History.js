import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { renderProgress } from '@mui/x-data-grid-generator';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { auth } from '../assets/firebase';
import { allDiagnosis } from '../assets/allDiagnosis';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'Diagnosis ID', flex: 1, hideable: false, headerAlign: 'center' },
  { field: 'patientId', headerName: 'Patient ID', flex: 1, hideable: false, headerAlign: 'center' },
  { field: 'firstName', headerName: 'First Name', flex: 1, hideable: false, headerAlign: 'center' },
  { field: 'lastName', headerName: 'Last Name', flex: 1, hideable: false, headerAlign: 'center' },
  { field: 'age', headerName: 'Age', type: 'number', flex: 1, hideable: true, headerAlign: 'center'},
  { field: 'sex', headerName: 'Gender', flex: 1, hideable: true, headerAlign: 'center'},
  { field: 'date', headerName: 'Date', type: 'date', flex: 1, hideable: true, headerAlign: 'center', valueGetter: ({ value }) => value && new Date(value)},
  { field: 'diagnosisProb', headerName: 'Probability', flex: 1, renderCell: renderProgress, hideable: true, headerAlign: 'center' },
  { field: 'prediction', headerName: 'Prediction', flex: 1, hideable: false, headerAlign: 'center' },
];



const History = () => {

  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  const [hdata, setHdata] = React.useState()
  var data
  useEffect(() => {
    if(!user){
      navigate("/login")
    }


  },[user])


  useEffect(() => {
      const getHistoryData = async () => {
        data = await axios.get("https://swapi.dev/api/people/1/") //add localhost link for all patient history here
        setHdata(data)
      }
      getHistoryData()

      // allDiagnosis.map((data) => {
      //   data.id = data.diagnosisId
      // })
    
  },[hdata])
    

    const rows = allDiagnosis

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
            
              
          }}
      />
    </div>
  );
}

export default History;