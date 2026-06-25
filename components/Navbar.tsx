export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-orange-500/20 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-extrabold tracking-wider text-orange-500">
          RAVENS DAYZ
        </h1>

        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <a href="#" className="transition hover:text-orange-400">
            Accueil
          </a>

          <a href="#about" className="transition hover:text-orange-400">
            À propos
          </a>

          <a href="#galerie" className="transition hover:text-orange-400">
            Galerie
          </a>

          <a
            href="https://discord.gg/6QuAS5QsKp"
            target="_blank"
            className="rounded-lg border border-orange-500 px-4 py-2 transition hover:bg-orange-500 hover:text-black"
          >
            Discord
          </a>

        </div>

      </div>
    </nav>
  );
}