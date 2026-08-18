import FooterForm from "./FooterForm";

const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      id="global-footer"
      className="
        relative
        overflow-hidden
        bg-[#181B20]
        text-white
      "
    >

      {/* ==========================================
          CONTACT / FORM UNIT
      ========================================== */}

      <FooterForm />

      {/* ==========================================
          FOOTER NAVIGATION
      ========================================== */}

      <div
        className="
          border-t
          border-white/15
          px-6
          py-16
          md:px-12
          lg:px-16
        "
      >

        <div className="mx-auto max-w-[1600px]">

          {/* Top */}

          <div
            className="
              grid
              gap-12
              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* Brand */}

            <div className="lg:col-span-2">

              <p
                className="
                  text-[clamp(3rem,8vw,8rem)]
                  font-medium
                  leading-[0.85]
                  tracking-[-0.06em]
                "
              >
                Boot 2 Boot
              </p>

              <p
                className="
                  mt-8
                  max-w-md
                  text-sm
                  leading-6
                  text-white/55
                "
              >
                Building digital experiences, brands and
                products designed to move businesses forward.
              </p>

            </div>

            {/* Navigation */}

            <div>

              <p
                className="
                  mb-5
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/40
                "
              >
                Navigate
              </p>

              <div className="flex flex-col gap-3">

                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="
                      w-fit
                      text-sm
                      text-white/70
                      transition
                      duration-300
                      hover:text-white
                    "
                  >
                    {link.label}
                  </a>
                ))}

              </div>

            </div>

            {/* Social */}

            <div>

              <p
                className="
                  mb-5
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/40
                "
              >
                Connect
              </p>

              <div className="flex flex-col gap-3">

                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="
                      w-fit
                      text-sm
                      text-white/70
                      transition
                      duration-300
                      hover:text-white
                    "
                  >
                    {link.label}
                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div
            className="
              mt-20
              flex
              flex-col
              gap-4
              border-t
              border-white/15
              pt-6
              text-[10px]
              uppercase
              tracking-[0.12em]
              text-white/35
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <span>
              © 2026 Boot 2 Boot
            </span>

            <span>
              All rights reserved
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}