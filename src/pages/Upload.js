import React, { useState } from 'react';
import './Upload.css'
import { Button, Grid, Input, Typography } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { auth } from '../assets/firebase';
import { TextField, Box } from '@mui/material';

const Upload = () => {

  const [image, setImage] = useState(null);

  const [user1, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user1){
      navigate("/login")
    }
  },[user1])

  const handleUpload = (event) => {

    const { files } = event.target;
    setImage(URL.createObjectURL(files[0]));
};

const handleDelete = () => {
    setImage(null);
}

const handleSubmit = (event) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget);
  const pid = data.get('patientId');
  console.log(pid);
}

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} >
    <Grid className='upload' container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            {!image && <Typography component='h1' variant="h4">Upload your Image</Typography>}
        </Grid>
        <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="patientId"
                  required
                  id="patientId"
                  label="Patient ID"
                  autoFocus
                />
              </Grid>
        <Grid item xs={12}>
            <div>
              {image && <><img src={image} alt="uploaded" />
              <Typography component='div' variant='subtitle1'>Proceed with given image?</Typography>
              </> }
            </div>
        </Grid>
        {!image ? 
        
        <Grid item xs={12}>

        <label htmlFor="FundusImage-file">
        <Input
                            style={{ display: "none" }}
                            accept="image/*"
                            id="FundusImage-file"
                            type="file"
                            name="FundusImage"
                            onChange={handleUpload}
                        />
            <Button variant="contained" component="span"  startIcon={<FileUploadIcon />}>Upload</Button>
          </label>
        </Grid> :
      <><Grid item xs={12}>
         <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={handleDelete}>Clear</Button>
        </Grid>
        <Grid item xs={12}>
         <Button type='submit' variant="contained" color="success" startIcon={<VisibilityOutlinedIcon />}>Submit</Button>
        </Grid></>}
    </Grid>
    </Box>
  )
}

export default Upload