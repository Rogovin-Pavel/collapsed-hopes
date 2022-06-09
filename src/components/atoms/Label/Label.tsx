import React from 'react';

import styles from './Label.module.css';

type Props = {
  text: string
}

export const Label = (props: Props) => {
  const { text } = props;

  return (
    <label className={styles.root}>{text}</label>
  );
};