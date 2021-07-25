import { createContext, useContext } from "react";

export type Block = {
  sender: string;
  recipient: string;
  coins: number;
  hash: string;
  prevHash?: string;
};

export type BlocksContextType = {
  blocks: Array<Block>;
  addBlock: (block: Block) => void;
  clearBlocks: () => void;
};

export const BlocksContext = createContext<BlocksContextType>({
  blocks: [],
  addBlock: () => {},
  clearBlocks: () => {}
});

export const useBlocks = () => useContext(BlocksContext);
