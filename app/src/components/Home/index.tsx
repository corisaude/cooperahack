import CarePlan from "./CarePlan";
import Habits from "./Habits";
import styles from "./index.module.css";

const mockCarePlan = [
  {
    type: "Rotina",
    title: "Checkup",
    points: 500,
    complete: true,
  },
  {
    type: "Consulta",
    title: "Geriatra",
    points: 800,
    complete: false,
  },
  {
    type: "Atualização",
    title: "Dados de saúde",
    points: 200,
    complete: false,
  },
];

const mockHabits = [
  {
    title: "Academia",
    points: 500,
    days: [
      { number: 13, dayCompleted: false },
      { number: 14, dayCompleted: true },
      { number: 15, dayCompleted: true },
      { number: 16, dayCompleted: false },
      { number: 17, dayCompleted: true },
      { number: 18, dayCompleted: true },
      { number: 19, dayCompleted: true },
      { number: 20, dayCompleted: false },
      { number: 21, dayCompleted: true },
      { number: 22, dayCompleted: false },
    ],
  },
  {
    title: "Terapia",
    points: 800,
    days: [
      { number: 13, dayCompleted: true },
      { number: 14, dayCompleted: true },
      { number: 15, dayCompleted: true },
      { number: 16, dayCompleted: true },
      { number: 17, dayCompleted: true },
      { number: 18, dayCompleted: true },
      { number: 19, dayCompleted: true },
      { number: 20, dayCompleted: false },
      { number: 21, dayCompleted: false },
      { number: 22, dayCompleted: false },
    ],
  },
];

function Home() {
  return (
    <div className={styles.container}>
      <CarePlan steps={mockCarePlan} />
      <Habits steps={mockHabits} />
    </div>
  );
}

export default Home;
