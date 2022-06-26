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
import axios from 'axios';

const Upload = () => {

  const [imageURL, setImageURL] = useState(null);
  const [image, setImage] = useState(null)


  const [user1, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user1){
      navigate("/login")
    }
  },[user1])

  const handleUpload = (event) => {

    const { files } = event.target;
    setImageURL(URL.createObjectURL(files[0]));
    setImage(files[0])
};

const handleDelete = () => {
    setImageURL(null);
}

const handleSubmit = (event) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget);
  formData.append('file', image);
  for(var key of formData.entries()){
    console.log(key[0] + ', ' + key[1]);
  }
  // axios.post("", formData).then((response) => {

  // }, (error) => {
  //   console.log(error);
  // })
}

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} >
    <Grid className='upload' container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            {!imageURL && <Typography component='h1' variant="h4">Upload your Image</Typography>}
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
              {imageURL && <><img src={imageURL} alt="uploaded" />
              <Typography component='div' variant='subtitle1'>Proceed with given image?</Typography>
              </> }
            </div>
        </Grid>
        {!imageURL ? 
        
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