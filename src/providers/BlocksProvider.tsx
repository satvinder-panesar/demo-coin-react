import React from "react";
import { Block, BlocksContext } from "./BlocksContext";
import generateHash from "../utils/generateHash";

const BlocksProvider = (props: { children: React.ReactNode }) => {
  const [blocks, setBlocks] = React.useState<Array<Block>>([
    {
      sender: "Genesis",
      recipient: "Genesis",
      coins: 0,
      hash: generateHash("GenesisGenesis0")
    }
  ]);

  const addBlock = (block: Block) => {
    setBlocks([...blocks, block]);
  };

  const clearBlocks = () => {
    setBlocks([blocks[0]]);
  };

  return (
    <BlocksContext.Provider value={{ blocks, addBlock, clearBlocks }}>
      {props.children}
    </BlocksContext.Provider>
  );
};

export default BlocksProvider;
