import { Star } from "phosphor-react";
const rating = 5;
const STAR_NUMBER = 5;
function NewProjectForm() {
  return (
    <form className="w-full flex">
      <label forHtml="url" className="flex w-full flex-wrap gap-2 items-center">Endereço do repositório:
        <input
          type="url"
          placeholder="https://example.com"
          pattern="https://.*"
          className="w-full h-9 p-3 rounded-md bg-light-primary dark:bg-dark-primary focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none"
          onChange={() => {}}
          required
        />
      </label>

    </form>
  );
}

export default NewProjectForm;