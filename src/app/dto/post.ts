export class PostPage {
  content: Post[];
  totalPages: number;
  last: boolean;
  first: boolean;
  empty: boolean;
}

export class Post {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
  category: string;
  content: string;
}
