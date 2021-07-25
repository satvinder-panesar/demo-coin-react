// @ts-ignore
import sha256 from "crypto-js/sha256";

const generateHash = (message: string) => {
  return String(sha256(message));
};

export default generateHash;
