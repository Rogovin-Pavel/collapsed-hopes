import React from 'react';
import styles from './Paragraph.module.css';

type Props = {
  children: string | number
}

export const Paragraph = (props: Props) => {
  return (
    <p className={styles.root}>{props.children}</p>
  );
};