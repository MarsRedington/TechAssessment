import { createContext } from 'react';
import { UpvoteContextType } from "../types/types";

export const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined);