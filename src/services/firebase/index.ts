export interface Comment {
  id: string;
  postId: string;
  author: string;
  body: string;
  createdAt: string;
}

export async function likePost(postId: string): Promise<void> {
  // TODO: increment like count in Firestore for postId
  void postId;
}

export async function getLikes(postId: string): Promise<number> {
  // TODO: fetch like count from Firestore for postId
  void postId;
  return 0;
}

export async function addComment(
  postId: string,
  comment: Omit<Comment, "id" | "postId" | "createdAt">
): Promise<void> {
  // TODO: write comment document to Firestore under postId
  void postId;
  void comment;
}

export async function getComments(postId: string): Promise<Comment[]> {
  // TODO: fetch comments collection from Firestore for postId
  void postId;
  return [];
}
