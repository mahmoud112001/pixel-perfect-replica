import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/trainers", label: "Trainers" },
];

export const Header = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
    <div className="container flex h-16 items-center justify-between">
      <Link to="/" className="flex items-center gap-2 font-mono text-sm tracking-tight">
        <span className="h-2 w-2 rounded-full bg-primary glow" />
        <span className="font-semibold">SMART<span className="text-primary">/</span>TRAIN</span>
      </Link>
      <nav className="flex items-center gap-1">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm"
            activeClassName="!text-foreground bg-secondary"
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);
