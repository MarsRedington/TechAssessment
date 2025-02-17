import React from "react";
import defaultArrow from "../assets/icons/arrow-default.svg";
import selectedArrow from "../assets/icons/arrow-selected.svg";
import { UpvoteProps } from "../types/types";
import styles from "../styles/Upvote.module.css";

const Upvote: React.FC<UpvoteProps> = ({ isSelected, onToggle }) => {
  return (
    <button
      className={`${styles.upvoteButton} ${
        isSelected ? styles.upvoteButtonSelected : ""
      }`}
      onClick={onToggle}
    >
      <img
        src={isSelected ? selectedArrow : defaultArrow}
        alt="upvote"
        width="20"
        height="20"
      />
    </button>
  );
};

export default Upvote;
