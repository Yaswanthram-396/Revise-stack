import React, { createContext, useContext, useState } from "react";
import "./toast.css";
const ToastContext = createContext();
export function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    showToast: false,
    message: "",
    isSuccess: true,
  });

  const showToast = (isSuccess, message) => {
    setToast({ showToast: true, message, isSuccess });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, showToast: false }));
    }, 3000);
  };

  function successToast() {
    return (
      <div className="toast success-toast">
        <span className="toast-icon">✓</span>
        <div>
          <p className="toast-title">Success</p>
          <p className="toast-message">{toast.message}</p>
        </div>
      </div>
    );
  }

  function errorToast() {
    return (
      <div className="toast error-toast">
        <span className="toast-error-icon">x</span>
        <div>
          <p className="toast-error-title">Error</p>
          <p className="toast-message">{toast.message}</p>
        </div>
      </div>
    );
  }
  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast.showToast ? (
        toast.isSuccess ? (
          successToast()
        ) : (
          errorToast()
        )
      ) : (
        <></>
      )}
    </ToastContext.Provider>
  );
}
export const useToast = () => {
  return useContext(ToastContext);
};
