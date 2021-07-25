import React from "react";
import AddBlockForm from "./AddBlockForm";
import BlocksProvider from "../providers/BlocksProvider";
import Blockchain from "../components/Blockchain";

const Body: React.FC = () => {
  return (
    <>
      <BlocksProvider>
        <AddBlockForm />
        <Blockchain />
      </BlocksProvider>
    </>
  );
};

export default Body;
