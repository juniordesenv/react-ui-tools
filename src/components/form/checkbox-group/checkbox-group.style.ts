import { css } from '@emotion/react';

interface CheckboxWrapProps {
  display: 'inline' | 'block' | 'inline-block' | 'flex' | 'grid';
}

const checkboxGroupWrap = ({ display = 'inline-block' }: CheckboxWrapProps) => css`
  .title {
    margin-bottom: 8px;
  }
  
  .options {
    margin: 0 -4px;
    
    > div {
      display: ${display};
      padding: 0 4px;
    }
  }
`;

export default {
  checkboxGroupWrap,
};
