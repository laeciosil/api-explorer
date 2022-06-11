import { Star } from "phosphor-react";
const rating = 5;
const STAR_NUMBER = 5;
function NewProjectForm() {
  return (
    <form className="w-full flex">
      <label forHtml="url" className="flex flex-wrap gap-2 items-center">Endereço do repositório:
        <input
          type="url"
          placeholder="https://example.com"
          pattern="https://.*"
          className="h-7 p-3 rounded-md bg-light-primary dark:bg-gray-600"
          onChange={() => {}}
          required
        />
      </label>

    </form>
  );
}

export default NewProjectForm;