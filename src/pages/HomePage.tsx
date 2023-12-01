import { PATH } from "@/routes";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section className="flex gap-2">
      {Object.entries(PATH).map(([name, path]) => (
        <Link key={path} to={path}>
          {name}
        </Link>
      ))}
    </section>
  );
};
