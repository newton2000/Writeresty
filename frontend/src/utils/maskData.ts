import { ReactNode } from "react"
import MaskData from "maskdata"

export const maskData = (textData: string): ReactNode => {
  const emailMask2Options = {
    maskWith: "•",
    unmaskedStartCharactersBeforeAt: 2,
    unmaskedEndCharactersAfterAt: 15,
    maskAtTheRate: false
  }

  return MaskData.maskEmail2(textData, emailMask2Options)
}