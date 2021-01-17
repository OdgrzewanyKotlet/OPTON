import React from "react";
import { fb } from "../../../utils/customerChatInjector";

class CustomerChat extends React.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      fb((FB) => this.timeout && FB.XFBML.parse());
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    delete this.timeout;
  }

  render() {
    return (
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="102448138509053"
        minimized="true"
      />
    );
  }
}

export default CustomerChat;
