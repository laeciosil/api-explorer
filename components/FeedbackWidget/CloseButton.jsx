import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <Popover.Button
      className="absolute top-3 right-5 rounded-md p-2 text-gray-400 hover:text-light-text hover:bg-gray-200 dark:hover:text-dark-text dark:hover:bg-gray-600 transition-all"
      title="Fechar botão de formulário de feedback"
    >
      <X weight="bold" />
    </Popover.Button>
  );
}
