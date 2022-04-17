// import Telegram from "../../assets/Telegram_logo.svg.png";
// import Instagram from "../../assets/800px-Instagram-Icon.png";

class Node {
  id;
  label;
  image;
  x;
  y;
  //   color;
  type = "def";
  shape = "circularImage";

  constructor(id, label, type) {
    this.id = id;
    this.label = label;
    var DIR = "../../assets/";
    switch (type) {
      case "instagram":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png";
        break;
      case "telegram":
        this.image =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png";
        break;
      default:
        break;
    }
    this.x = 0;
    this.y = 0;
    this.color = "#fff";
  }
}

function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  return `#${red}${green}${blue}`;
}

export default Node;
