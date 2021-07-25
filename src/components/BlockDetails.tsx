import { Block } from "../providers/BlocksContext";
import React from "react";

export type BlockDetailsProps = Block & { index: number };

const BlockDetails: React.FC<BlockDetailsProps> = ({
  sender,
  recipient,
  coins,
  hash,
  prevHash,
  index
}) => {
  return (
    <div className="col-3 border border-1 m-1">
      <div className="badge bg-primary text-wrap">
        <i className="bi bi-box"> Block #{index}</i>
      </div>
      <small>
        <div>From: {sender}</div>
        <div>To: {recipient}</div>
        <div>Coins: {coins}</div>
        <div>Hash: {hash}..</div>
        <div>Prev #: {prevHash ? prevHash + ".." : "N/A"}</div>
      </small>
    </div>
  );
};

export default BlockDetails;
