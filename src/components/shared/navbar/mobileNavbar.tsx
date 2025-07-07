import NavList from "./navList";

export default function MobileNavbar() {
  return (
    <nav
      className={`fixed top-16 left-0 w-screen h-screen bg-surface px-4 py-8 z-10`}
    >
      <NavList />
    </nav>
  );
}
