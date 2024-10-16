import React from "react";
import { ErrorMessageProps } from "./interfaces/error-message-form-props.interface";

const ErrorMessageForm: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
  );
};

export default ErrorMessageForm;
