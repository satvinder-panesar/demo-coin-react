import generateHash from "./generateHash";

const performMining = (
  sender: string,
  recipient: string,
  coins: number,
  prevHash: string,
  proofOfWork: number
) => {
  let nonce = 0;
  let blockObject = { sender, recipient, coins, prevHash, nonce };
  let hash = generateHash(JSON.stringify(blockObject));
  while (hash.substring(0, proofOfWork) !== Array(proofOfWork + 1).join("0")) {
    nonce += 1;
    blockObject = { ...blockObject, nonce };
    hash = generateHash(JSON.stringify(blockObject));
  }
  return hash;
};

export default performMining;
