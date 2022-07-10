const RedesSociais = () => {
  return (
    <div className="bg-gray-300 p-8 shadow rounded-xl mt-10 mx-10 text-center font-bold">
      <h1 className="text-2xl">Redes Sociais</h1>
      <div className="flex text-center justify-center p-8">
        <a
          className="px-2"
          href="https://www.linkedin.com/in/carllosdannyel/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-8" src="/images/linkedin.png" alt="" />
        </a>
        <a
        className="px-2"
        href="https://github.com/carllosdannyel"
        target="_blank"
        rel="noreferrer"
        >
          <img className="w-8" src="/images/github.png" alt="" />
        </a>
        <a
        className="px-2"
        href="https://www.instagram.com/carllosdannyel/"
        target="_blank"
        rel="noreferrer"
        >
          <img className="w-8" src="/images/instagram.png" alt="" />
        </a>
        <a
        className="px-2"
        href="https://www.facebook.com/people/Carlos-Daniel/100058238262279/"
        target="_blank"
        rel="noreferrer"
        >
          <img className="w-8" src="/images/facebook.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default RedesSociais;
