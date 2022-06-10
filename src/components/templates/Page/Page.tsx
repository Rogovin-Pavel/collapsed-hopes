import React from 'react';

import styles from './Page.module.css';

type Props = {
  heading: JSX.Element | string
  content: JSX.Element
}

export const Page = (props: Props) => {
  return (
    <main className={styles.root}>
      <h1 className={styles.heading}>{props.heading}</h1>
      <section className={styles.content}>
        {props.content}
      </section>
    </main>
  );
};