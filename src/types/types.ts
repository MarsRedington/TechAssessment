import React, { ReactNode } from "react";

export interface UpvoteContextType {
  upvoteLists: boolean[][];
  setUpvoteLists: React.Dispatch<React.SetStateAction<boolean[][]>>;
  addUpvote: (listIndex: number) => void;
}

export interface UpvoteProviderProps {
  children: ReactNode;
  initialState?: boolean[][];
}

export interface UpvoteProps {
  isSelected: boolean;
  onToggle: () => void;
}

export interface UpvoteListProps {
  listIndex: number;
}
