import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/scss/main.scss'

import classnames from 'classnames';

function MessageContainer() {
  return (
    <div className="toast-message-container">
      <ToastContainer
        className="toast-container"
        bodyClassName="toast-body"
        position={toast.POSITION.BOTTOM_CENTER}
        autoClose={4000}
        newestOnTop
        hideProgressBar
      />
    </div>
  );
}

const Message = (m => {
  return {
    success: m => {
      return toast(m, { className: classnames('toast-toast') });
    },

    error: m => {
      return toast(m, { className: classnames('toast-toast') });
    },

    alert: m => {
      return toast(m, { className: classnames('toast-toast') });
    },

    info: m => {
      return toast(m, { className: classnames('toast-toast') });
    },
    dismiss: () => {
      return toast.dismiss();
    }
  };
})();

export default Message;

export { MessageContainer };
