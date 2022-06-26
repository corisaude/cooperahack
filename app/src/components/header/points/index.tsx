import styles from "./index.module.css";
import clsx from "clsx";
import Text from "../../Text/index";

interface Props {
  points: string;
  className?: string;
  img: string;
}

function Points({ points, className, img }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      <img src={img} alt="Porco" className={styles.img} />
      <Text>{points}</Text>
    </div>
  );
}

export default Points;
