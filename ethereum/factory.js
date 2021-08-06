import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe86F18367b50B68bCCcD6C23Bf032D6176979a3A"
);

export default instance;
