const Perfil = () => {
  return (
    <div className="bg-gray-100 p-8 shadow rounded-xl md:flex md:p-0 overflow-hidden">
      <img
        className="w-32 h-32 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto"
        src="images/carlos-daniel.png"
        alt=""
      />
      <div className="pt-6 text-center space-y-4 md:text-left md:p-8">
        <div className="text-lg font-semibold">
          Seja bem vindo ao meu portfólio, aqui você encontrará todos os meus
          conhecimentos adquiridos na{" "}
          <a
            className="text-blue-900"
            href="https://www.betrybe.com/"
            target="_blank" rel="noreferrer"
          >
            @betrybe
          </a>{" "}
          e fora dela.
        </div>
        <div className="font-medium">
          <div className="text-green-900 font-bold">Carlos Daniel</div>
          <div className="text-gray-800">Aluno da Trybe</div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
