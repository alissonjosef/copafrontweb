/* interface HomeProps {
  count: number;
} */

import Image from "next/image";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImg from "../assets/logo.svg";
import avatarImg from "../assets/users-avatar-example.png";
import checkImg from "../assets/icon-check.svg";

export default function Home(props: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="Logo Copa" quality={100} />
        <h1 className="mt-14 font-bold text-5xl text-white leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className="flex items-center mt-10 gap-2">
          <Image src={avatarImg} alt="Logo Copa" quality={100} />
          <strong className="text-gray-100 text-xl ">
            <span className="text-ignite-500">+12.592</span>
            pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text"
            required
            placeholder="Qual nome do seu bolão"
          />
          <button
            className="bg-yellow-500 font-bold px-6 py-4 rounded text-gray-900 text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="text-gray-300 mt-5 mb-10 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-t-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex gap-6">
            <Image src={checkImg} alt="Logo Copa" quality={100} />
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-white">+2.034</span>
              <span className="text-white font-semibolde">Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600"/>

          <div className="flex gap-6">
            <Image src={checkImg} alt="Logo Copa" quality={100} />
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-white">+192.847</span>
              <span className="text-white font-semibolde">
                Palpites enviados
              </span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="Dois Celulares" quality={100} />
    </div>
  );
}

/* export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3333/pools/count");
  const data = await res.json();

  return {
    props: {
      count: data.count,
    },
  };
}; */
