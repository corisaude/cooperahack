import styles from "./index.module.css";
import Text from "../../Text/index";
import clsx from "clsx";

interface Steps {
  title: string;
  points: number;
  days: {
    number: number;
    dayCompleted: boolean;
  }[];
}

interface Props {
  steps: Steps[];
}

const Habits = ({ steps }: Props) => {
  return (
    <div>
      {steps.map((step) => {
        const { title, points, days } = step;
        return (
          <div key={title} className={styles.outerContainer}>
            <Text className={styles.title}>{title}</Text>
            <div className={styles.container}>
              {days.map((value) => {
                return (
                  <div key={value.number} className={styles.daysContainer}>
                    <div
                      className={clsx(
                        styles.circle,
                        value.dayCompleted && styles.completed
                      )}
                    >
                      {value.number}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.points}>
              <Text>Próximo: </Text>
              <Text className={styles.textPoint}>{`+ ${points}`}</Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Habits;
