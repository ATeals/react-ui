import { PATH } from "./routes";
import { generateClassName } from "./utils/generateClassName";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <header className={generateClassName("p-5 px-10", "flex justify-between items-center")}>
        <h1 className={generateClassName("font-bold text-2xl")}>React - UI - Archive</h1>
        <nav>
          <Link to={PATH.HOME}>Home</Link>
        </nav>
      </header>
      <main className={generateClassName("min-h-screen", "p-10")}>
        <Outlet />
      </main>
      <footer className={generateClassName("p-10", "flex justify-center items-center")}>
        &copy; Ateals
      </footer>
    </>
  );
};

export default App;
