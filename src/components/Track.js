import React from "react";
import styles from "./track.module.css";

function Track(props) {
  return (
    <div className={styles.songItem}>
      <span>{props.song}</span>
      <button className={styles.addButton} onClick={props.onAddTrack}>
        +
      </button>
    </div>
  );
}

export default Track;
