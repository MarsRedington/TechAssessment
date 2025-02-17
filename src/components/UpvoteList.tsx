import React from "react";
import Upvote from "./Upvote";
import { useUpvote } from "../hooks/useUpvote";
import { UpvoteListProps } from "../types/types";
import styles from "../styles/UpvoteList.module.css";

const UpvoteList: React.FC<UpvoteListProps> = ({ listIndex }) => {
  const { upvoteLists, setUpvoteLists, addUpvote } = useUpvote();
  const toggleAll = () => {
    const allSelected = upvoteLists[listIndex].every((item) => item);
    const newList = upvoteLists[listIndex].map(() => !allSelected);
    const updatedLists = [...upvoteLists];
    updatedLists[listIndex] = newList;
    setUpvoteLists(updatedLists);
    localStorage.setItem("upvoteLists", JSON.stringify(updatedLists));
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        {upvoteLists[listIndex].map((isSelected, idx) => (
          <Upvote key={idx} isSelected={isSelected} onToggle={toggleAll} />
        ))}
      </div>
      <button onClick={() => addUpvote(listIndex)} className={styles.addButton}>
        +
      </button>
    </div>
  );
};

export default UpvoteList;
