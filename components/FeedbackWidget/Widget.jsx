import { ChatTeardropDots } from 'phosphor-react';
import { Popover, Transition } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 flex flex-col items-end">
      {({ open }) => (
        <>
          <Transition.Child
            show={open}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed sm:hidden inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
          </Transition.Child>
          <Popover.Panel>
            <WidgetForm />
          </Popover.Panel>
          <Popover.Button className="bg-light-secondary rounded-full p-3 text-white flex items-center group">
            <ChatTeardropDots className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
              Feedback
            </span>
          </Popover.Button>
        </>
      )}
    </Popover>

  );
}
