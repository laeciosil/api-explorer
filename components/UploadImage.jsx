import Dropzone from 'react-dropzone';

export function UploadImage({ handleDrop, path }) {
  return (
    <Dropzone onDropAccepted={handleDrop}>
      {({
        getInputProps,
      }) => (
        <label
          className="border-[1px] border-[#6B7280] text-light-text dark:text-dark-text border-dashed rounded-md cursor-pointer p-[6px]"
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
