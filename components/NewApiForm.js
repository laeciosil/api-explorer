import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function NewApiForm(props) {
  const {categories} = useContext(AppContext);
  const {setUrl, setCategory, setDescription} = props;
 
  return (
    <form className="w-full flex flex-col gap-4">
      <label forHtml="url" className="flex flex-col gap-2">Endereço do repositório:
        <input
          type="url"
          placeholder="https://example.com"
          pattern="https://.*"
          className="h-10 p-3 rounded-md bg-light-primary dark:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-light-secondary text-light-text dark:text-dark-text"
          onChange={({target}) => setUrl(target.value)}
          required
        />
      </label>
      <label forHtml="categorieselect" className="flex flex-col gap-2">Selecione a categoria:
        <select 
          name="carmodel" 
          id="categorieselect"
          className="h-10 rounded-md bg-light-primary dark:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-light-secondary text-light-text dark:text-dark-text" 
          onChange={({target}) => setCategory(target.value)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
      </label>
      <textarea
        type="text"
        placeholder="Descrição"
        className="w-full h-28 p-3 rounded-md bg-light-primary dark:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-light-secondary text-light-text dark:text-dark-text"
        name="description"
        onChange={({target}) => setDescription(target.value)}
      />
    </form>
  );
}

export default NewApiForm;