export interface ARTICLE {
  _id: string;
  title: string;
  content: string;
  createdBy: {
    id: string;
    name: string;
  };
  createdAt: string
}

export const defaultArticle: ARTICLE = {
  _id: '',
  title: '',
  content: '',
  createdBy: {
    id: '',
    name: ''
  },
  createdAt: ''
}