import { message } from 'antd';

export default class Toast {
  static Type = {
    INFO: 'info',
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
  }

  static show = (content, type, duration) => {
    switch (type) {
      case Toast.Type.INFO:
        message.info(content, duration);
        break;
      case Toast.Type.SUCCESS:
        message.success(content, duration);
        break;
      case Toast.Type.WARNING:
        message.warning(content, duration);
        break;
      default:
        message.error(content, duration);
    }
  }
}
