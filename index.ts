import * as data from "./abi.json";

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
    .transactNFT([
      ["0x39df1a1e095b8a79199494143a5885842593ed23", 10],
      ["0x39df1a1e095b8a79199494143a5885842593ed23", 10],
      ["0x39df1a1e095b8a79199494143a5885842593ed23", 10],
    ])
    .send({ from: "0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2" });
});
