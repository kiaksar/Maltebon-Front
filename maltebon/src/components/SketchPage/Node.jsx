// import Telegram from "../../assets/Telegram_logo.svg.png";
// import Instagram from "../../assets/800px-Instagram-Icon.png";

import { getGithubInfo } from "../../Connections/Connection";

class Node {
  id;
  label;
  image;
  x;
  y;
  type = "def";
  value = 10;
  shape = "image";
  nodeType = "";
  data = "";

  constructor(id, label, type, data) {
    this.id = id;
    this.label = label;
    this.nodeType = type;
    this.data = data;
    console.log(this.data);
    this.x = 0;
    this.y = 0;
    var DIR = "../../assets/";
    switch (type) {
      case "instagram":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png";
        // this.value = 2;
        // this.x = 10;
        this.y = 10;
        break;
      case "telegram":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png";
        // this.value = 2;
        // this.x = 10;
        this.y = 10;
        break;
      case "git":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png";
        // this.value = 2;
        // this.x = 10;
        this.y = 10;
        break;
      case "user":
        this.image =
          "https://cdn0.iconfinder.com/data/icons/network-ui-line-badge-filled-outline/64/Network-hierarchy-root-connection-512.png";
        // this.value = 3;
        break;
      case "email":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/4/4f/Android_Email_2.0_Icon.png";
        break;
      case "telephone":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/d/d4/Phone_communication_icon.png";
        break;
      case "name":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
        break;
      case "linkedin":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/e/e6/729101_linkedin_icon.png";
        break;
      default:
        break;
    }

    this.x = id * 10;
    this.y = id * 10;
    this.color = "#fff";
  }
}

export default Node;
