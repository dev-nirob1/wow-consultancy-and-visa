import Link from "next/link";

const CtaSection = () => {
  return (
    <section className=" bg-primary ">
      <div className="container">
        <div className="relative overflow-hidden px-8 py-16 md:px-12 text-center">
          <span className="absolute -top-24 -left-12 w-72 h-72 rounded-full bg-linear-to-br from-white/10 to-white/0" />
          <span className="absolute -bottom-36 -right-24 w-96 h-96 rounded-full bg-linear-to-br from-white/10 to-white/0" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-white text-3xl">
              Ready to Start Your Global Journey?
            </h1>
            <p className="mt-4 text-white text-xl font-medium">
              Join thousands of successful students. Get expert guidance on
              university selection, applications, and visas.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="w-full md:w-auto bg-white text-primary font-semibold text-lg px-8 py-4 rounded-md hover:bg-white/90 transition-colors duration-200"
              >
                Get Consultation
              </Link>
              <Link
                href="/destinations"
                className="w-full md:w-auto border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-md hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                Explore Universities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
