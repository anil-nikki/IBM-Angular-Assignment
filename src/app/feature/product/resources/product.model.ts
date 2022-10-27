export interface Product {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
}

export interface PaginatedResult<T> {
  result: T;
  Pagination: Pagination;
  error: string;
}

export interface Pagination {
  first: string;
  prev: string;
  next: string;
  last: string;
}
