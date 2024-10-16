import React from 'react';
import { DefaultModalProps } from './interfaces/default-modal-props.interface';

const DefaultModal: React.FC<DefaultModalProps> = ({ title,isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full h-full overflow-y-auto"
    >
      <div className="relative p-4 w-full max-w-2xl">
        {/* Contenido del Modal */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Header del Modal */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Cerrar modal</span>
            </button>
          </div>

          {/* Cuerpo del Modal */}
          <div className="p-4 md:p-5 space-y-4">
            {children}
          </div>          
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
