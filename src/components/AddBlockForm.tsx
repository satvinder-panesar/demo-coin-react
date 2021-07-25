import React, { useState } from "react";
import { useBlocks } from "../providers/BlocksContext";
import performMining from "../utils/performMining";
import sleep from "../utils/sleep";

const AddBlockForm: React.FC = () => {
  const { blocks, addBlock, clearBlocks } = useBlocks();
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [coins, setCoins] = useState(0);
  const [proofOfWork, setProofOfWork] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const invalid =
    sender === "" ||
    recipient === "" ||
    coins <= 0 ||
    proofOfWork < 0 ||
    proofOfWork > 3;
  const [addButtonText, setAddButtonText] = useState("Add Block");

  const resetForm = () => {
    setSender("");
    setRecipient("");
    setCoins(0);
  };

  return (
    <form>
      <div className="form-group pb-2">
        <label htmlFor="exampleInputEmail1">Sender Username</label>
        <input
          type="email"
          value={sender}
          className="form-control"
          id="sender"
          aria-describedby="emailHelp"
          placeholder="Enter username"
          onChange={(e) => setSender(e.target.value)}
        />
      </div>
      <div className="form-group pb-2">
        <label htmlFor="exampleInputEmail1">Recipient Username</label>
        <input
          type="email"
          value={recipient}
          className="form-control"
          id="recipient"
          aria-describedby="emailHelp"
          placeholder="Enter username"
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className="form-group pb-2">
        <label htmlFor="exampleInputEmail1">Number of coins</label>
        <input
          type="number"
          value={coins}
          className="form-control"
          id="numberOfCoins"
          aria-describedby="emailHelp"
          placeholder="Enter number"
          onChange={(e) => setCoins(Number(e.target.value))}
        />
      </div>
      <div className="form-group pb-2">
        <label htmlFor="exampleFormControlSelect1">Proof of work</label>
        <small id="proofOfWorkHelp" className="form-text text-muted">
          <div>
            Note: In actual implementation, unit of work is a fixed value and
            not an editable field. Here, it is used to adjust the mining
            complexity as required by the demo. A higher value results in slower
            mining.
          </div>
        </small>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={(e) => setProofOfWork(Number(e.target.value))}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="row">
        <button
          className="btn btn-primary mb-2"
          disabled={blocks.length > 2 || invalid || submitting}
          onClick={async (e) => {
            setSubmitting(true);
            e.preventDefault();
            setAddButtonText("Mining...");
            await sleep(1500);
            const prevHash = blocks[blocks.length - 1].hash;
            const hash = performMining(
              sender,
              recipient,
              coins,
              prevHash,
              proofOfWork
            );
            setAddButtonText(`Hash Found: ${hash.substring(0, 10)}..`);
            await sleep(1500);
            setAddButtonText("Adding to blockchain...");
            await sleep(1500);
            addBlock({ sender, recipient, coins, hash, prevHash });
            setAddButtonText("Add Block");
            setSubmitting(false);
            resetForm();
          }}
        >
          {addButtonText}
        </button>
        <button
          className="btn btn-danger"
          disabled={blocks.length < 2}
          onClick={() => {
            clearBlocks();
            resetForm();
          }}
        >
          Clear Block(s)
        </button>
      </div>
    </form>
  );
};

export default AddBlockForm;
