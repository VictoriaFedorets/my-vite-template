import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.heroBackground}>
      <article className={css.containerHome}>
        <h1>My Vite template</h1>
        <p>Description</p>
        <Link to="./newPage" className={css.btnViewNow}>
          Get start
        </Link>
      </article>
    </section>
  );
}
