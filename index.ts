import * as data from "./abi.json";
import { ethers } from "ethers";

var Web3 = require("web3");

let web3 = new Web3(
  Web3.givenProvider || "https://smartbch.regtest.actorforth.org"
);

const tran = document.getElementById("callAbi");
tran.addEventListener("click", async function () {
  const { abi } = data;
  let contract = new web3.eth.Contract(
    abi,
    "0x8858fab3668f6e0143159325790aFaADbCd8141a"
  );

  console.log("********************************");
  console.log("availible", contract);
  console.log("*****************************`");

  const result = await contract.methods
    .transactNFT(
      "0x016128a",
      "0xE9f1DA7aab119365EB37fe4614ec014547C4F641",
      [
        "0xe00BCef53DD14AE43963cfdd824e78c1858Ea3a8",
        "0xAEC9A7740aaaB7a3318570C86912dbcaD828F6D9",
        [
          ["0xcb9079fc6a8E3020d1b51e29E34d6846c9103427", 5, 1],
          ["0x016128aA42BbbA55151645D98a69bEE571c318f8", 10, 5],
          ["0x4a84A9675170DDbC265c2ef7AA18B64a6197229E", 15, 10],
        ],
        1644388771,
        1649999999,
      ],
      "0x016128a",
      [
        ["0xcb9079fc6a8E3020d1b51e29E34d6846c9103427", 1],
        ["0x016128aA42BbbA55151645D98a69bEE571c318f8", 0],
        ["0x4a84A9675170DDbC265c2ef7AA18B64a6197229E", 0],
      ],
      10,
      1,
      5,
      1649999999
    )
    .send({ from: "0xE9f1DA7aab119365EB37fe4614ec014547C4F641" });
});

// connect
const provider = new ethers.providers.Web3Provider((window as any).ethereum);

const ethereumButton = document.getElementById("connectWalletBtn");
ethereumButton.addEventListener("click", async () => {
  const temp = await getAccount();
  // if (temp) {
  //   changeNetwork(temp);
  // } else {
  //   console.log("don't change network bc not have acc");
  // }
});

async function getAccount() {
  console.log("click");
  const accounts = await provider
    .send("eth_requestAccounts", [])
    .catch(() => console.log("err"));
}
let temp;
const a = web3.eth.getAccounts();
