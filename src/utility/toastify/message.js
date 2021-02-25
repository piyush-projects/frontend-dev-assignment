import Message from './message/message';
import './toastify.scss';

const MESSAGE = (m => {
  return {
    success: m => {
      Message.success(m);
    },

    error: m => {
      Message.error(m);
    },

    alert: m => {
      Message.alert(m);
    },

    info: m => {
      Message.info(m);
    },
    dismiss: () => {
      Message.dismiss();
    }
  };
})();

export default MESSAGE;
