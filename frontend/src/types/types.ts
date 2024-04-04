import { Dispatch, SetStateAction } from "react"

export type trenListProps = {
  id: string,
  no: number,
  username: string,
  title: string,
  published: string
}

export type feedListProps = {
  id: string,
  name: string,
  published: string,
  tag: string,
  title: string,
  description: string,
  readtime: string,
  profileurl: string,
  imageurl: string
}

export type ContextsType = {
  theme: string | null,
  setTheme: Dispatch<SetStateAction<string | null>>,
  token: boolean,
  setToken: Dispatch<SetStateAction<boolean>>
}

// interface test {
//   a: string,
//   b: string,
//   c: string
// }

// type newtypecut = Omit<test, 'c'>; ตัดไทป์บางตัวออก

// type newtypepick = Pick<test, 'a' | 'c'>; เลือกไทป์กำหนดเอง

// type t = {
//   d: string,
// }
