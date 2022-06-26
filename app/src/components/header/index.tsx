import { Outlet } from "react-router-dom";
import Text from "../Text/index";
import styles from "./index.module.css";
import Points from "./points/index";
import img from "../../assets/piggy-bank.png";
import Settings from "@mui/icons-material/Settings";

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.settings}>
          <Settings />
        </div>
        <div className={styles.nameContainer}>
          <Text className={styles.title}>Roberto</Text>
          <Points img={img} className={styles.points} points="1525" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Index;
