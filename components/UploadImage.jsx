import Dropzone from 'react-dropzone';
import { useState } from 'react';
import { api } from '../services';

export function UploadImage({ setUrlImg, setIsUploading }) {
  const [path, setPath] = useState('Escolha uma imagem');

  function handleDrop([uploadedFile]) {
    setIsUploading(true);
    setPath('Carregando imagem...');
    const data = new FormData();
    data.append('file', uploadedFile, uploadedFile.name);
    api
      .post('/fronts/up', data)
      .then((response) => {
        setUrlImg(response.data.url);
        setPath(response.data.url);
        setIsUploading(false);
      })
      .catch(() => {
        console.log('error');
      });
  }
  return (
    <Dropzone onDropAccepted={handleDrop}>
      {({
        getInputProps,
      }) => (
        <label style={{
          border: '1px dashed #ddd',
          borderRadius: '4px',
          cursor: 'pointer',
          padding: '7px',
        }}
        >
          <input
            {...getInputProps()}
          />
          {path}
        </label>
      ) }
    </Dropzone>
  );
}
