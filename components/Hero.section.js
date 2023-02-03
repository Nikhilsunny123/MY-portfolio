import { useRouter } from "next/router";

function HeroSection() {
  const router = useRouter();
  return (
    <section className="container ml-20 p-20 flex flex-col gap-5 md:p-10">
      <p className="text-xl md:text-2xl lg:text-3xl">Hi I’m</p>
      <h1 className="text-xl md:text-4xl lg:text-3xl">Nikhil Sunny</h1>
      <p className="text-xl md:text-2xl lg:text-3xl">Web Developer</p>
      <div>
        <button
          onClick={() => router.push("/contact")}
          className="bg-sky-700 hover:bg-sky-300 text-white font-bold py-2 px-4 border border-sky-700 rounded scale-75 hover:scale-100 ease-in duration-500"
        >
          Let’s Talk!
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
