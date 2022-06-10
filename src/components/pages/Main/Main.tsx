/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from 'react';
import { Page } from './../../templates/Page/Page';
import { Label } from '../../atoms/Label/Label';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { useStore } from '../../../store/store';

export const Main = () => {
  const { count, increase, decrease, reset } = useStore(state => state);

  return (
    <Page
      heading="Our hopes are collapsed"
      content={
        <Fragment>
          <Label>Are you going to live forever?</Label>
          <Paragraph>Let's do it together.</Paragraph>
          <Paragraph>{count}</Paragraph>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
          <button onClick={reset}>reset counter</button>
        </Fragment>
      }
    />
  );
};