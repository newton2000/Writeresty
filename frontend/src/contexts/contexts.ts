import { createContext } from "react"
import { ContextsType } from "../types/types"

export const Contexts = createContext<ContextsType | null>(null)