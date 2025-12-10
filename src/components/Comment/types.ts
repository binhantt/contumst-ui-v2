export interface CommentProps {
  author: string
  avatar?: string
  content: string
  datetime?: string
  actions?: string[]
}

export const defaultCommentProps: Partial<CommentProps> = {
  actions: []
}
