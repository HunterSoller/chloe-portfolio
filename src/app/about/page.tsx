import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "Background, tools, and making.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f2ea] via-[#fbfaf8] to-white">
      <Container className="pt-24 sm:pt-28">
        <FadeIn>
          <section className="py-16 sm:py-24">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
              <div className="md:col-span-5">
                <div className="flex items-start gap-5">
                  <div className="mt-[0.15em] h-14 w-px bg-black/15 sm:h-16" />
                  <h1 className="font-[family-name:var(--font-serif)] text-[46px] font-semibold leading-[0.95] tracking-[-0.055em] text-[color:var(--text)] sm:text-[64px]">
                    Background
                  </h1>
                </div>
              </div>

              <div className="md:col-span-7 md:flex md:justify-end">
                <div className="max-w-[600px]">
                  <p className="text-[16px] leading-[1.85] text-[#444] sm:text-[18px]">
                    I am an architecture student at the Syracuse University
                    School of Architecture pursuing my B.Arch degree. I am
                    interested in how design can shape the way people experience
                    and move through space. My work explores the relationship
                    between structure, material, and perception, with a focus on
                    creating environments that are both engaging and responsive.
                    Through a range of design explorations, I investigate how
                    architecture can move beyond static form to guide
                    interaction and create meaningful spatial experiences. I am
                    particularly interested in urban, commercial and residential
                    designs while also integrating sustainable strategies that
                    enhance both environmental performance and the lived
                    experience of a space.
                  </p>

                  <div className="mt-7 sm:mt-8">
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[#888]">
                      Contact
                    </p>
                    <a
                      href="mailto:chloesoller8@gmail.com"
                      className="mt-2 inline-flex border-b border-transparent text-[13px] tracking-[0.06em] text-[#666] transition-colors duration-200 ease-out hover:border-[#444]/40 hover:text-[#444]"
                    >
                      chloesoller8@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="pb-20 sm:pb-28">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <FadeIn delay={0.05}>
              <section className="group rounded-[18px] border border-black/[0.10] bg-gradient-to-b from-[#f4efe6] to-[#ffffff] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] will-change-transform sm:p-9">
                <h2 className="font-[family-name:var(--font-serif)] text-[24px] tracking-[-0.02em] text-[color:var(--text)]">
                  Tools
                </h2>
                <p className="mt-4 text-[14px] leading-[1.85] text-[#444] sm:text-[15px]">
                  Rhino, Revit, AutoCAD, Adobe Illustrator, InDesign, Photoshop.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.1}>
              <section className="group rounded-[18px] border border-black/[0.10] bg-gradient-to-b from-[#f4efe6] to-[#ffffff] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] will-change-transform sm:p-9">
                <h2 className="font-[family-name:var(--font-serif)] text-[24px] tracking-[-0.02em] text-[color:var(--text)]">
                  Fabrication
                </h2>
                <p className="mt-4 text-[14px] leading-[1.85] text-[#444] sm:text-[15px]">
                  3D printing, laser cutting, hand-drafting, and woodworking.
                </p>
              </section>
            </FadeIn>
          </div>
        </section>
      </Container>
    </main>
  );
}

