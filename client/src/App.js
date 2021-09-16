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

  const uploadFile = async () => {
    const data = new FormData();
    data.append('image', providedFile);
    try{
      const response = await axios.post(process.env.REACT_APP_API_URI + '/img/post', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      const imageData = await {
        id: response.data._id,
        binary: arrayBufferToBase64(response.data.img.data)
      };
      setFile(imageData);
    } catch (err) {
      console.log(err);
    }
  }

  const arrayBufferToBase64 = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer.data));

    bytes.forEach((b) => binary += String.fromCharCode(b));

    return window.btoa(binary);
  }

  useEffect(()=> {
    if(providedFile){
      setLoad(true);
      uploadFile();
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
        <LoadedImg imageData={hasFile} />
      }
    </Container>
  );
}

export default App;
