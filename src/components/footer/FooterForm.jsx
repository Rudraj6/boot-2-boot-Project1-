export default function FooterForm() {
    return (
      <section
        className="
          px-6
          py-24
          md:px-12
          md:py-32
          lg:px-16
          lg:py-40
        "
      >
  
        <div className="mx-auto max-w-[1600px]">
  
          <div
            className="
              grid
              gap-16
              lg:grid-cols-[1fr_1fr]
              lg:gap-24
            "
          >
  
            {/* ======================================
                LEFT
            ====================================== */}
  
            <div>
  
              <p
                className="
                  mb-7
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/45
                "
              >
                Start a conversation
              </p>
  
              <h2
                className="
                  max-w-3xl
                  text-[clamp(3.5rem,7vw,8rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.06em]
                "
              >
                Let's make
                <br />
                something
                <br />
                happen.
              </h2>
  
              <p
                className="
                  mt-10
                  max-w-lg
                  text-sm
                  leading-6
                  text-white/55
                "
              >
                Have a project, idea or opportunity?
                Tell us what you're working on and we'll
                get back to you.
              </p>
  
            </div>
  
            {/* ======================================
                RIGHT — FORM
            ====================================== */}
  
            <form className="space-y-8">
  
              <div>
  
                <label
                  htmlFor="footer-name"
                  className="
                    mb-3
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-white/40
                  "
                >
                  Name
                </label>
  
                <input
                  id="footer-name"
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full
                    border-b
                    border-white/20
                    bg-transparent
                    py-4
                    text-base
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-white
                  "
                />
  
              </div>
  
              <div>
  
                <label
                  htmlFor="footer-email"
                  className="
                    mb-3
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-white/40
                  "
                >
                  Email
                </label>
  
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full
                    border-b
                    border-white/20
                    bg-transparent
                    py-4
                    text-base
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-white
                  "
                />
  
              </div>
  
              <div>
  
                <label
                  htmlFor="footer-phone"
                  className="
                    mb-3
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-white/40
                  "
                >
                  Phone
                </label>
  
                <input
                  id="footer-phone"
                  type="tel"
                  placeholder="+91"
                  className="
                    w-full
                    border-b
                    border-white/20
                    bg-transparent
                    py-4
                    text-base
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-white
                  "
                />
  
              </div>
  
              <div>
  
                <label
                  htmlFor="footer-message"
                  className="
                    mb-3
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-white/40
                  "
                >
                  Tell us about your project
                </label>
  
                <textarea
                  id="footer-message"
                  rows="4"
                  placeholder="What are you looking to build?"
                  className="
                    w-full
                    resize-none
                    border-b
                    border-white/20
                    bg-transparent
                    py-4
                    text-base
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-white
                  "
                />
  
              </div>
  
              <button
                type="submit"
                className="
                  mt-4
                  flex
                  items-center
                  gap-4
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-black
                  transition
                  duration-300
                  hover:scale-[1.03]
                "
              >
                Send Enquiry
  
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-xs
                    text-white
                  "
                >
                  →
                </span>
  
              </button>
  
            </form>
  
          </div>
  
        </div>
  
      </section>
    );
  }