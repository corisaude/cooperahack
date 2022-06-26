import styles from "./index.module.css";
import clsx from "clsx";

interface Props {
  children: string;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  return <p className={clsx(styles.text, className)}>{children}</p>;
};

export default Text;
