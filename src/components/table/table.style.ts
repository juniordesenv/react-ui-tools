import { css } from '@emotion/core';
import { Theme } from '@/styles/theme';

const tableWrap = css`
  width: 100%;
  border-radius: 5px 0;
  border-top: 1px solid rgba(224, 224, 224, 1);
  border-right: 1px solid rgba(224, 224, 224, 1);
  border-left: 1px solid rgba(224, 224, 224, 1);
  min-height: 400px;
  background-color:white;
  overflow-x: auto;
  
  table {
    width: 100%;
    display: table;
    border-collapse: collapse; 
    
    th {
      display: table-cell;
      position: sticky;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: white;
    }
    
    th, td {
      padding: 16px;
      text-align: left;
      border-bottom: 1px solid rgba(224, 224, 224, 1);
    }
    
    thead {
      display: table-header-group;
      border-collapse: separate;
    }
    
    tbody {
      display: table-row-group;
    }
    
    tr {
      outline: 0;
      display: table-row;
    }
  }
`;

const thWrap = css`
  display: table-cell;
  
  &.has-event {
    cursor: pointer;
  }
  
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const tdWrap = css`
  display: table-cell;
`;

const tdActionWrap = css`
  display: table-cell;
  
  > div {
    display: flex;
    flex-direction: row;
    
    > div {
      padding: 0 8px;
    }
  }
`;

const emptyDataWrap = css`
  > td {
    text-align: center !important;
  }
`;

type TdLoadingWrapProps = {
  theme?: Theme;
  percentSize: number;
};

const tdLoadingWrap = ({ theme, percentSize }: TdLoadingWrapProps) => css`
    background-color: ${theme.colors.white.light};
    flex-basis: 48%;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-image:
      linear-gradient(to right, ${theme.colors.disabled.light}, ${theme.colors.disabled.light});
    background-position: top 16px left 16px;
    background-size: ${percentSize}% 24px;
    min-height: 60px;
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 1.2s infinite;
    }
    
    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
`;

type TdLoadingActionWrapProps = {
  theme?: Theme;
};

const tdLoadingActionWrap = ({ theme }: TdLoadingActionWrapProps) => css`
    span {
      background-color: ${theme.colors.white.light};
      position: relative;
      display: inline-block;
      height: 24px;
      width: 24px;
      overflow: hidden;
      background-repeat: no-repeat;
      background-image:
        linear-gradient(to right, ${theme.colors.disabled.light}, ${theme.colors.disabled.light});
      border-radius: 50%;
      margin-left: 8px;
      
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: shimmer 1.2s infinite;
      }
    }
    
    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
`;

type ErrorDataWrapProps = {
  theme?: Theme;
};

const errorDataWrap = ({ theme }: ErrorDataWrapProps) => css`
  > td {
    color: ${theme.colors.error.main};
    text-align: center !important;
    
    button {
      padding: 0;
      margin-left: 8px;
      
      :hover {
        background-color: transparent;
        box-shadow: none;
      }
    }
  }
`;

export default {
  tableWrap,
  thWrap,
  tdWrap,
  tdActionWrap,
  emptyDataWrap,
  tdLoadingWrap,
  tdLoadingActionWrap,
  errorDataWrap,
};
