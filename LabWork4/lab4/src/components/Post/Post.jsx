import React from 'react';

import { DataProvider } from './DataProvider';

import { postItemsState } from '../../state/atoms';
import { useRecoilValue } from 'recoil';

export const Post = () => {
  const postItems = useRecoilValue(postItemsState);

  return (
    <div className="post">
      <DataProvider items={postItems} />
    </div>
  );
};
