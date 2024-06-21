export type BlogsType = {
  index: number
  title: string
  article: string
  image: string
  date: string
  text: BlogsText[]
}

type BlogsText = {
  title?: string
  paragraph: string
}