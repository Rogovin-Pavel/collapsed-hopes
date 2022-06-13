import React from 'react';
import styles from './Page.module.css';

type Props = {
  children?: JSX.Element
}

export const Page = (props: Props) => {
  return (
    <section className={styles.root}>
      {props.children}
    </section >
  );
};