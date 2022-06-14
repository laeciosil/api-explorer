import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
function NewApiForm() {
  const {categories} = useContext(AppContext);
  
  return (
    <form className="w-full flex flex-col gap-4">
      <label forHtml="url" className="flex flex-col gap-2">Endereço do repositório:
        <input
          type="url"
          placeholder="https://example.com"
          pattern="https://.*"
          className="h-10 p-3 rounded-md bg-light-primary dark:bg-dark-primary focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none text-light-text dark:text-dark-text"
          onChange={() => {}}
          required
        />
      </label>
      <label forHtml="categorieselect" className="flex flex-col gap-2">Selecione a categoria:
        <select 
          name="carmodel" 
          id="categorieselect"
          className="h-10 rounded-md bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-300 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin" 
        >
          {categories.map((category) => (
            <option key={category.name} value={category.id}>{category.name}</option>
          ))}
        </select>
      </label>
      <textarea
        type="text"
        placeholder="Descrição..."
        className="w-full h-28 p-3 rounded-md bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-300 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin"
        name="description"
        onChange={() => {}}
      />
    </form>
  );
}

export default NewApiForm;