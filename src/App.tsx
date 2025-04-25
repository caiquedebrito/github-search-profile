import { useState } from "react";
import { GithubUser } from "./models/github-user.model";
import GithubMarkLight from "./assets/github-mark.svg";
import GithubMark from "./assets/github-mark-white.svg";
import SearchIcon from "./assets/search.svg";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [isDark, setIsDark] = useState(true);
  const toggleMode = () => setIsDark(!isDark);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setError(false);
    setUserData(null);
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente.");
      }

      const data = (await response.json()) as GithubUser;
      setUserData(data);
    } catch (err: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className={`min-h-screen flex flex-col items-center justify-start py-10 px-4 gap-10 ${
      isDark ? "bg-black" : "bg-gray-100"
      }`}>
        <header className="text-center flex justify-between items-center gap-6 max-sm:flex-col">
          <div className="flex items-center gap-6">
            <img
              src={isDark ? GithubMark : GithubMarkLight}
              alt="GitHub Mark"
              className="w-20"
            />
            <h1
              className={`text-7xl flex items-center justify-center gap-2 max-sm:text-6xl ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Perfil <strong>GitHub</strong>
            </h1>
          </div>
          <button
            onClick={toggleMode}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl transition-colors duration-300"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <div className="w-full mx-auto flex flex-col items-center">
          <div className="relative w-full max-w-3xl">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Digite um usuário do Github"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white p-5 placeholder-black rounded-2xl text-2xl
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          shadow-sm transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 my-auto bg-blue-600 hover:bg-blue-700
                          text-white rounded-2xl px-4 transition-all duration-300
                          focus:outline-none shadow-md cursor-pointer"
              >
                <img
                  src={SearchIcon}
                  alt="Pesquisar"
                  className="w-10"
                />
              </button>
            </form>
          </div>
        </div>

        {error && (
          <div className={` p-4 rounded-2xl text-red-500 text-center text-2xl max-w-4xl w-full ${isDark ? "bg-gray-100" : "bg-white"}`}>
            <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
            <p>Tente novamente.</p>
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-2 text-blue-500 font-medium">Carregando...</span>
          </div>
        )}

        {userData && !loading && (
          <div className="bg-gray-200 rounded-3xl flex items-center justify-between gap-8 py-4 px-8 w-full max-w-[768px] max-sm:flex-col">
            <img
              src={userData.avatar_url}
              alt="Foto de Perfil"
              className="w-64 rounded-full shadow-md border-4 border-blue-600"
            />
            <div className="max-w-2xl flex flex-col gap-4 max-sm:items-center">
              <h2 className="text-2xl text-blue-600">
                {userData.name ? userData.name : "Nome não disponível"}
              </h2>
              <p>
                {userData.bio ? userData.bio : "Bio não disponível"}
              </p>
            </div>
          </div>
        )}
      </main>
      <footer className={`w-full flex justify-center items-center py-4 ${isDark ? "bg-black" : "bg-gray-100"}`}>
        <p className={`text-center ${isDark ? "text-white" : "text-black"}`}>
          Desenvolvido por{" "}
          <a
            href="https://github.com/caiquedebrito"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            Caique de Brito
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;