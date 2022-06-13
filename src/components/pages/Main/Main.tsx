/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useMemo } from 'react';
import { Page } from './../../templates/Page/Page';

import { useMainContent } from '../../../store/store';
import { useAnimationObserver } from '../../../hooks/useAnimationObserver';

import styles from './Main.module.css';

export const Main = () => {
  const { about, fetch } = useMainContent(state => state);
  const { firstname, lastname, profession } = about;

  const title = `My name is ${firstname} ${lastname}.`;
  const label = `I'm a ${profession}`;

  const [headingRef] = useAnimationObserver(styles.slideOut);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main className={styles.root}>
      <Page>
        <h1
          ref={headingRef}
          className={styles.heading}>
          Hello.<br />{title}<br />{label}
        </h1>
      </Page>
    </main>
  );
};