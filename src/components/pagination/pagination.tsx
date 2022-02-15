import { Dropdown } from '@/components/dropdown/dropdown';
import { DropdownItem } from '@/components/dropdown/dropdown-item';
import React, {
  Dispatch, SetStateAction, useRef, useState,
} from 'react';
import styled from '@emotion/styled';

import {
  Button,
  ButtonIcon,
} from '@/components';
import { Options, PageInfos } from '@/hooks/use-table';
import { useOutsideClick } from '@/hooks';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Styles from './pagination.style';

const PaginationWrap = styled.div`${Styles.paginationWrap}`;

const ButtonWrap = styled.div`${Styles.buttonWrap}`;
const InfoWrap = styled.div`${Styles.infoWrap}`;

export type PaginationProps = {
  className?: string;
  pageInfos: PageInfos;
  setOptions: Dispatch<SetStateAction<Options>>
};

const Pagination: React.FC<PaginationProps> = ({
  pageInfos,
  setOptions,
  className,
}: PaginationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const btnRef = useRef();

  useOutsideClick(btnRef, () => {
    setIsOpen(false);
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleChangeItemsPerPage = (limit: number) => {
    setOptions((oldState) => ({
      ...oldState,
      page: 1,
      limit,
    }));
    setIsOpen(false);
  };

  const startItemPage = () => {
    if (pageInfos.page === 1) return 1;
    return pageInfos.page * pageInfos.limit + 1;
  };

  const endItemPage = () => {
    if (pageInfos.page === pageInfos.totalPages) {
      return -((pageInfos.totalPages * pageInfos.limit - pageInfos.totalItems) - pageInfos.limit);
    }
    return pageInfos.page * pageInfos.limit;
  };

  const preventPage = () => {
    if (pageInfos.page === 1) return;
    setOptions((oldState) => ({
      ...oldState,
      page: pageInfos.page - 1,
      limit: pageInfos.limit,
    }));
  };

  const nextPage = () => {
    if (pageInfos.page === pageInfos.totalPages) return;
    setOptions((oldState) => ({
      ...oldState,
      page: pageInfos.page + 1,
      limit: pageInfos.limit,
    }));
  };

  return (
    <PaginationWrap
      data-testid="pagination"
      className={['pagination', className].join(' ')}
    >
      <ButtonWrap ref={btnRef}>
        Linha por página:
        <Button
          variant="text"
          onClick={handleOpen}
        >
          {pageInfos.limit}
          {' '}
          <FaChevronDown />
        </Button>
        <Dropdown isOpen={isOpen}>
          <DropdownItem
            data-testid="change-pagination-5"
            onClick={() => { handleChangeItemsPerPage(5); }}
          >
            5
          </DropdownItem>
          <DropdownItem
            data-testid="change-pagination-20"
            onClick={() => { handleChangeItemsPerPage(20); }}
          >
            20
          </DropdownItem>
          <DropdownItem
            data-testid="change-pagination-100"
            onClick={() => { handleChangeItemsPerPage(100); }}
          >
            100
          </DropdownItem>
        </Dropdown>
      </ButtonWrap>
      <InfoWrap>
        <div>
          Mostrando
          {' '}
          {startItemPage()}
          {' '}
          a
          {' '}
          {endItemPage()}
          {' '}
          de
          {' '}
          {pageInfos.totalItems}
          {' '}
          Itens
        </div>
        <div>
          <ButtonIcon
            data-testid="prevent-page-table"
            onClick={preventPage}
            disabled={pageInfos.page === 1}
          >
            <FaChevronLeft />
          </ButtonIcon>
          <ButtonIcon
            data-testid="next-page-table"
            disabled={pageInfos.page === pageInfos.totalPages}
            onClick={nextPage}
          >
            <FaChevronRight />
          </ButtonIcon>
        </div>
      </InfoWrap>
    </PaginationWrap>
  );
};

export { Pagination };
