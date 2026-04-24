import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Política", href: "/categoria/politica" },
  { label: "Mundo", href: "/categoria/mundo" },
  { label: "Economia", href: "/categoria/economia" },
  { label: "Tecnologia", href: "/categoria/tecnologia" },
  { label: "Cultura", href: "/categoria/cultura" },
  { label: "Opinião", href: "/categoria/opiniao" },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-3 items-center px-5 py-3 md:px-8 lg:flex lg:items-center lg:justify-between lg:py-5">
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            aria-label="Abrir menu"
            className="inline-flex p-1 text-zinc-700 transition-colors hover:text-zinc-950"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M4 7.5H20" />
              <path d="M4 12H20" />
              <path d="M4 16.5H20" />
            </svg>
          </button>
        </div>

        <Link
          href="/"
          aria-label="Ir para a página inicial"
          className="mx-auto shrink-0 justify-self-center transition-opacity hover:opacity-80 lg:mx-0 lg:justify-self-auto"
        >
          <Image
            src="/logo/la-page.svg"
            alt="La Page"
            width={914}
            height={337}
            className="h-12 w-auto lg:h-16"
            priority
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          <ul className="flex items-center gap-7 lg:gap-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.14em] text-zinc-700 transition-colors hover:text-zinc-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end">
          <button
            type="button"
            aria-label="Abrir busca"
            className="hidden p-1 text-zinc-700 transition-colors hover:text-zinc-950 lg:inline-flex"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16L21 21" />
            </svg>
          </button>
          <span aria-hidden className="inline-block h-5 w-5 lg:hidden" />
        </div>
      </div>
    </header>
  );
}
