import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { useDebounce } from './use-debounce';

export type PaginationModel <T> = {
  data: T[];
  page: number;
  totalItems: number;
  totalPages: number;
};

export type PaginationParams = {
  page: number;
  limit: number;
  sort: string;
  search?: string;
};

export type ColumnTable = {
  field: string;
  label: string;
  sort?: boolean;
};

export type Options = {
  page: number;
  limit: number;
  sort: string;
};

type TableType = {
  columns: ColumnTable[];
  action: (params: PaginationParams) => Promise<any>;
  page?: number;
  limit?: number;
  sort?: string;
};

export type ColumnTableResult = ColumnTable & {
  props: {
    isSorted: boolean;
    orderSort: 'asc' | 'desc' | undefined;
    key: string;
    onClick: () => void;
  };
};

export type PageInfos = {
  page: number;
  totalItems: number;
  totalPages: number;
  limit: number;
};

type TableResultType<T> = {
  columns: ColumnTableResult[];
  rows: T[];
  options: Options;
  setOptions: Dispatch<SetStateAction<Options>>
  pageInfos: PageInfos
  search: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  isLoading: boolean;
  errorMessage: string;
  onReload: () => void;
};

export const useTable = <T> ({
  columns,
  action,
  page = 1,
  limit = 100,
  sort = '-createdAt',
}: TableType): TableResultType<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [rows, setRows] = useState([]);
  const [options, setOptions] = useState<Options>({
    page,
    limit,
    sort,
  });
  const [pageInfos, setPageInfos] = useState<PageInfos>({
    totalItems: 1,
    totalPages: 1,
    page,
    limit,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [debouncedSearch, search, setSearch] = useDebounce<string>('', 1000);
  const handleError = ((err) => {
    setIsLoading(false);
    setErrorMessage(err.message);
  });

  const loadingData = () => {
    setIsLoading(true);
    action({
      ...options,
      search: debouncedSearch || undefined,
    })
      .then((result: PaginationModel<any>) => {
        setPageInfos({
          totalPages: result.totalPages,
          totalItems: result.totalItems,
          page: options.page,
          limit: options.limit,
        });
        setRows(result.data);
        setErrorMessage(null);
        setIsLoading(false);
      })
      .catch(handleError);
  };

  useEffect(() => {
    loadingData();
  }, [options, debouncedSearch]);

  const handleClickColumn = (field: string) => () => {
    const isSorted = field === options.sort.replace('-', '');
    if (!isSorted) {
      setOptions({
        limit,
        page: 1,
        sort: field,
      });
    } else {
      setOptions({
        limit,
        page: 1,
        sort: options.sort.includes('-') ? field : `-${field}`,
      });
    }
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    setSearch(value);
  };

  return {
    columns: columns.map((column) => {
      const isSorted = column.field === options.sort.replace('-', '');
      let orderSort;

      if (isSorted) {
        orderSort = options.sort.includes('-') ? 'desc' : 'asc';
      }

      return {
        ...column,
        props: {
          isSorted,
          orderSort,
          key: column.field,
          onClick: handleClickColumn(column.field),
        },
      };
    }),
    rows,
    options,
    setOptions,
    pageInfos,
    search: {
      value: search,
      onChange: handleChangeSearch,
    },
    isLoading,
    errorMessage,
    onReload: loadingData,
  };
};
