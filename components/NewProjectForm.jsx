import { UploadImage } from './UploadImage';

function NewProjectForm({
  setUrl, setUrlDeploy, handleDrop, path,
}) {
  return (
    <form className="w-full flex flex-col space-y-3">
      <label forhtml="url" className="flex w-full flex-wrap gap-2 items-center">
        Endereço do repositório:
        <input
          type="url"
          placeholder="https://github.com/user/repo"
          pattern="https://.*"
          className="w-full h-9 p-3 rounded-md bg-light-primary dark:bg-dark-primary focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none"
          onChange={({ target }) => setUrl(target.value)}
          required
        />
      </label>
      <label forhtml="url_deploy" className="flex w-full flex-wrap gap-2 items-center">
        Endereço do seu site (opcional):
        <input
          type="url"
          placeholder="https://seusite.com"
          pattern="https://.*"
          className="w-full h-9 p-3 rounded-md bg-light-primary dark:bg-dark-primary focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none"
          onChange={({ target }) => setUrlDeploy(target.value)}
          required
        />
      </label>
      <label htmlFor="upload">
        Foto de capa:
      </label>
      <UploadImage handleDrop={handleDrop} path={path} />

    </form>
  );
}

export default NewProjectForm;
