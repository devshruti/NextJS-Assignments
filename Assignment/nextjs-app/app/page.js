import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className={styles.heading} >Hello this is Home Page</h1> 
    </main>
  );
}
