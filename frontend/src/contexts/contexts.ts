import { createContext } from "react"
import { contextsType } from "../types/types"

export const Contexts = createContext<contextsType | null>(null)