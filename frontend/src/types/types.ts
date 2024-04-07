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

export type contextsType = {
  utils: utilsType,
  setUtils: Dispatch<SetStateAction<utilsType>>
}

export type utilsType = {
  theme: string | null,
  token: string | null,
  tokenBool: boolean,
  accessToken: accessTokenType
}

export type accessTokenType = {
  aud: string,
  azp: string,
  email: string,
  email_verified: boolean,
  exp: number,
  given_name: string,
  iat: number,
  iss: string,
  jti: string,
  name: string,
  nbf: number,
  picture: string,
  sub: string
}

export type topicType = {
  topicId: string,
  topicName: string
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
