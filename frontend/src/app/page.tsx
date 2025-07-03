import Image from "next/image";
import tmdbLogo from "../assets/tmdb.svg";

export default function Home() {
  return (
    <>
      <nav className="w-full h-10 bg-purple-800 flex items-center p-7">
        <Image src={tmdbLogo} alt="Logo tmdb" />
      </nav>
      <header className="w-full h-auto bg-purple-950 p-12 flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-5xl text-center w-3/5">
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </h1>
        <span>Filtre por:</span>
        <div className="flex flex-wrap justify-center w-5/7">
          {Array.from({ length: 19 }, (_, i) => (
            <button
              key={i}
              className="bg-white text-black px-4 py-2 rounded-md m-2 cursor-pointer"
            >
              {`Filtro ${i + 1}`}
            </button>
          ))}
        </div>
      </header>
    </>
  );
}
