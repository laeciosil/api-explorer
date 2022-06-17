function NewProjectForm({ setUrl, setUrlDeploy }) {
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
      <input type="file" accept=".png" className="h-9 rounded-md focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none" />
    </form>
  );
}

export default NewProjectForm;
