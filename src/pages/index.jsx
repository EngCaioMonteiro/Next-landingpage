import Header from "@/components/Header";
import styles from "./Home.module.scss";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Welcome/>
    </div>
  );
}
