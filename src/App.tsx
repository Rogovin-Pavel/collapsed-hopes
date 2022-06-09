import React from 'react';
import { Label } from './components/atoms/Label/Label';

import styles from './App.module.css';

function App() {
  return (
    <main className={styles.root}>
      <Label text="Our hopes are collapsed"/>
    </main>
  );
}

export default App;
