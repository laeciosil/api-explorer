import { UploadImage } from './UploadImage';

function EditPhotoForm({ handleDrop, path }) {
  return (
    <form className="w-full flex flex-col space-y-3">
      <label htmlFor="upload" className="text-light-text dark:text-dark-text">
        Foto de capa:
      </label>
      <UploadImage handleDrop={handleDrop} path={path} />

    </form>
  );
}

export default EditPhotoForm;
