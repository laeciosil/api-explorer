import Dropzone from 'react-dropzone';

export function UploadImage({ handleDrop, path }) {
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
