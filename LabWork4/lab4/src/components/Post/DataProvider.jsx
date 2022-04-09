import React from 'react';

import '../css/Post.css';

export const DataProvider = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="post__position">
          <div className="post__img">
            <img src={item.img} alt="post" />
          </div>
          <div className="post__container">
            <div className="post__title">{item.title}</div>
            <div className="post__text">{item.text}</div>
            <div className="post__btn">
              <a href="/">DISCOVER</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
