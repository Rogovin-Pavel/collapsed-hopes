import React from 'react';

import styles from './Label.module.css';

type Props = {
  children: JSX.Element | string
}

export const Label = (props: Props) => {

  return (
    <label className={styles.root}>{props.children}</label>
  );
};