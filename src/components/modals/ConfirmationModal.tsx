import React from 'react'
import { ConfirmationModalProps } from './interfaces/confirmation-modal-props.interface';

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ textConfirmation,isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null; // No renderiza el modal si no está abierto
  
    return (
      <div
        id="popup-modal"
        tabIndex={-1}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full h-full"
      >
        <div className="relative p-4 w-full max-w-md">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
              onClick={onClose}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Cerrar modal</span>
            </button>
            <div className="p-4 text-center">
              <svg className="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500">{textConfirmation}</h3>
              <button
                onClick={() => {
                  onConfirm();
                  onClose(); 
                }}
                className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5"
              >
                Si, estoy seguro
              </button>
              <button
                onClick={onClose} // Cierra el modal sin realizar acción
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
              >
                No, cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationModal;