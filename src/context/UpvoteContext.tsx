import React, { useState } from "react";
import { UpvoteContext } from "./UpvoteContextBase";
import { UpvoteProviderProps } from "../types/types";
import { defaultState } from "./defaultState";

export const UpvoteProvider: React.FC<UpvoteProviderProps> = ({ children }) => {
  const [upvoteLists, setUpvoteLists] = useState<boolean[][]>(() => {
    const saved = localStorage.getItem("upvoteLists");
    return saved ? JSON.parse(saved) : defaultState;
  });

  const addUpvote = (listIndex: number) => {
    setUpvoteLists((prevLists) => {
      const isAllSelected = prevLists[listIndex].every((item) => item);
      const newList = [...prevLists[listIndex], isAllSelected];
      const updatedLists = [...prevLists];
      updatedLists[listIndex] = newList;
      localStorage.setItem("upvoteLists", JSON.stringify(updatedLists));
      return updatedLists;
    });
  };

  return (
    <UpvoteContext.Provider value={{ upvoteLists, setUpvoteLists, addUpvote }}>
      {children}
    </UpvoteContext.Provider>
  );
};
