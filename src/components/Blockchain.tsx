import { useBlocks } from "../providers/BlocksContext";
import BlockDetails from "../components/BlockDetails";
import React from "react";

const Blockchain = () => {
  const { blocks } = useBlocks();
  return (
    <div className="row mx-auto">
      {blocks.map((block, index) => (
        <React.Fragment key={`block${index + 1}`}>
          <BlockDetails
            sender={block.sender}
            recipient={block.recipient}
            coins={block.coins}
            hash={block.hash.substring(0, 4)}
            prevHash={block.prevHash?.substring(0, 4)}
            index={index + 1}
          />
          {index !== blocks.length - 1 && (
            <i className="bi bi-link col-1 pt-5"></i>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Blockchain;
