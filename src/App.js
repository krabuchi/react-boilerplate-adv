import React from "react";
import styles from "./style.css";

function App({ title }) {
  return <div className={styles.title}>{title}</div>;
}

export default App;
