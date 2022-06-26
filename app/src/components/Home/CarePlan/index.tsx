import CarePlanStep from "./CarePlanStep";
import styles from "./index.module.css";

interface Step {
  type: string;
  title: string;
  points: number;
  complete: boolean;
}

interface Props {
  steps: Step[];
}

function CarePlan({ steps }: Props) {
  return (
    <div className={styles.steps}>
      {steps.map((step, index, all) => (
        <CarePlanStep
          key={index}
          prevDone={index > 0 ? all[index - 1].complete : true}
          {...step}
        />
      ))}
    </div>
  );
}

export default CarePlan;
