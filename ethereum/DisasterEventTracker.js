import web3 from "./web3";

import disasterEventTracker from "./build/DisasterEventTracker.json";

const instance = new web3.eth.Contract(
  JSON.parse(disasterEventTracker.interface),
  "0x54db5E9520Dfe7DbCE7Aa5f8abDa3C3b397A26F9"
);

export default instance;
