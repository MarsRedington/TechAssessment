import { useContext } from "react";
import { UpvoteContextType } from "../types/types";
import { UpvoteContext } from "../context/UpvoteContextBase";

export const useUpvote = (): UpvoteContextType => {
  const context = useContext(UpvoteContext);
  if (context === undefined) {
    throw new Error("useUpvote must be used within a UpvoteProvider");
  }
  return context;
};
