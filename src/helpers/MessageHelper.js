class MessageHelper {
  static isMessageOwnedByMe(message) {
    return localStorage.getItem('fullname') === message.sender.fullname;
  }
}

export default MessageHelper;
