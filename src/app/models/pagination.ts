export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedResult<T> { // T will be Member[]
    result: T;
    pagination: Pagination;
}