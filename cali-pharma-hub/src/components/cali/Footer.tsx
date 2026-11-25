import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin } from "lucide-react";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#logistica", label: "Logística" },
  { href: "#habilitaciones", label: "Habilitaciones" },
  { href: "#laboratorios", label: "Laboratorios" },
  { href: "#contacto", label: "Contacto" },
];

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

const socials: { href: string; label: string; icon: ReactNode }[] = [
  {
    href: "https://www.linkedin.com/company/drogueria-cali-sa/",
    label: "LinkedIn",
    icon: (
      <svg {...iconProps}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/drogueriacalisa?dmpr=MTkzdHltZXF0eWF5dw==",
    label: "Instagram",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/share/1WsYTUDZXB/",
    label: "Facebook",
    icon: (
      <svg {...iconProps}>
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07Z" />
      </svg>
    ),
  },
  {
    href: "https://www.threads.com/@drogueriacalisa",
    label: "Threads",
    icon: (
      <svg {...iconProps}>
        <path d="M17.69 11.13a7.6 7.6 0 0 0-.29-.13c-.17-3.13-1.88-4.92-4.75-4.94h-.04c-1.72 0-3.15.73-4.02 2.06l1.58 1.08c.65-.99 1.68-1.2 2.44-1.2h.03c.94 0 1.65.28 2.11.82.33.39.56.93.67 1.6a12 12 0 0 0-2.7-.13c-2.71.16-4.46 1.74-4.34 3.93.06 1.11.61 2.07 1.56 2.7.8.53 1.83.79 2.9.73 1.42-.08 2.53-.62 3.3-1.6.59-.75.96-1.71 1.12-2.93.68.41 1.18.94 1.46 1.59.47 1.1.5 2.9-.97 4.37-1.29 1.29-2.84 1.85-5.18 1.86-2.6-.02-4.56-.85-5.84-2.48-1.2-1.52-1.81-3.72-1.84-6.53.03-2.81.64-5.01 1.84-6.53 1.28-1.63 3.24-2.46 5.84-2.48 2.61.02 4.61.86 5.94 2.49.65.8 1.14 1.81 1.47 2.98l1.85-.49c-.4-1.45-1.02-2.71-1.86-3.74C17.27 1.04 14.81.02 11.66 0h-.01C8.5.02 6.08 1.05 4.45 3.1 3 4.92 2.25 7.46 2.23 10.64v.02c.02 3.18.77 5.72 2.22 7.54 1.63 2.05 4.05 3.08 7.2 3.1h.01c2.8-.02 4.77-.75 6.4-2.38 2.13-2.13 2.07-4.8 1.37-6.44-.5-1.17-1.46-2.12-2.77-2.75Zm-4.83 4.54c-1.17.07-2.39-.46-2.45-1.6-.04-.85.6-1.79 2.55-1.9l.66-.02c.71 0 1.37.07 1.97.2-.22 2.82-1.54 3.26-2.73 3.32Z" />
      </svg>
    ),
  },
];

export const Footer = () => (
  <footer className="relative bg-primary text-primary-foreground">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-accent" />
    <div className="container-x py-16 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="bg-primary-foreground/5 inline-flex rounded-xl p-3 -ml-3">
          <Logo variant="light" />
        </div>
        <p className="mt-5 text-primary-foreground/75 max-w-md leading-relaxed">
          Droguería Cali S.A. — Distribución farmacéutica segura, confiable y ágil.
        </p>

        <div className="mt-7">
          <h4 className="font-display font-bold mb-3">Seguinos</h4>
          <ul className="flex flex-wrap items-center gap-3" aria-label="Redes sociales de Droguería Cali">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Droguería Cali en ${s.label}`}
                  title={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:col-span-3">
        <h4 className="font-display font-bold mb-4">Navegación</h4>
        <ul className="space-y-2.5 text-sm text-primary-foreground/75">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-4">
        <h4 className="font-display font-bold mb-4">Contacto</h4>
        <address className="not-italic">
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-accent" aria-hidden />
              <a href="tel:+541145513868" className="hover:text-accent transition-colors">
                4551-3868 / 4454-3840
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-accent" aria-hidden />
              <a href="mailto:info@drogueriacalisa.com.ar" className="hover:text-accent transition-colors">
                info@drogueriacalisa.com.ar
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-accent" aria-hidden />
              <span>Caldas 1560/1562, CABA, Argentina</span>
            </li>
          </ul>
        </address>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} Droguería Cali S.A. — Todos los derechos reservados.</p>
        <p>Distribución farmacéutica · Argentina</p>
      </div>
    </div>
  </footer>
);
