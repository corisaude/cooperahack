import styles from "./index.module.css";
import React from "react";
import clsx from "clsx";
import Text from "../../Text";

interface Props {
  type: string;
  title: string;
  points: number;
  complete: boolean;
  prevDone: boolean;
}

const CarePlanStep = ({ title, points, complete, type, prevDone }: Props) => {
  return (
    <div className={styles.step}>
      <Text className={styles.type}>{type}</Text>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.lineContainer}>
        <div className={clsx(styles.line, !prevDone && styles.incomplete)} />
        <div
          className={clsx(styles.circle, !complete && styles.incompleteCircle)}
        ></div>
        <div className={clsx(styles.line, !complete && styles.incomplete)} />
      </div>
      <Text>{`+${points} pontos`}</Text>
    </div>
  );
};

export default CarePlanStep;
