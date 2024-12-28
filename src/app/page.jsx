// REACT

// NEXT JS

// COMPONENTS
import Featured from "@/Components/featured/Featured";
import CategoryList from "@/Components/categoryList/CategoryList";
import CardList from "@/Components/cardList/CardList";
import Pagination from "@/Components/pagination/Pagination";
import Menu from "@/Components/menu/Menu";

// STYLES
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.container}>
        <CardList />
        <Pagination />
        <Menu />
      </div>
    </div>
  );
}
