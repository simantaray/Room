import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section
      className="relative 
        pt-10 sm:pt-16 ">
      <div
        className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl "
          src="https://links.papareact.com/4cj"
          alt="largecard"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-2 font-semibold">{title}</h3>
        <button className="mt-2 px-5 py-3 rounded-lg border bg-white  text-sm font-semibold text-black transition duration-200 cursor-pointer">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;