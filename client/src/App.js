import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';
import Uploader from './components/Uploader/Uploader';
import Loader from './components/Loader/Loader';
import LoadedImg from './components/LoadedImg/LoadedImg';

function App() {

  const [providedFile, setUpload] = useState(undefined);
  const [isLoading, setLoad] = useState(false);
  const [hasFile, setFile] = useState(false);

  useEffect(()=> {
    if(providedFile){
      setLoad(true);
      axios.post()
    }
  }, [providedFile]);

  return (
    <Container disableGutters={true}>
      {!hasFile ? 
        !isLoading ? 
          <Uploader setUpload={setUpload} />
          : 
          <Loader />
        : 
        <LoadedImg />
      }
    </Container>
  );
}

export default App;
