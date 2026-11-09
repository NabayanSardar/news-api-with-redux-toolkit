export interface News {
  _id: string;
  title: string;
  slug: string;
  content: string;
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  image: {
    url: string;
    public_id: string;
  };
  author: string;
  isPublished: true;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ArticlePaylod {
  title: string;
  content: string;
  category: string;
  image?: File | null;
}

export interface NewsState {
  openAddNews: boolean;
  isLoading: boolean;
  isError: string | null;
  newsList: News[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
  imagePreview: string | null;
  isAddLoading: boolean;
  isAddError: string | null;
  search?: string;
  category?: string;
  isNewsDetails:News | null
}

export interface Pagination {
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export type NewsContextType = {
  newsState: NewsState;
  fetchNewsList: (params: NewsParams) => void;
  handlePrevPage: () => void;
  handleNewxtPage: () => void;
  handleLimitChnage: (limit: number) => void;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
  handleSetImage: (file: string) => void;
  handleSetNewsDetails: (data:News)=>void;
};

export interface NewsParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}
