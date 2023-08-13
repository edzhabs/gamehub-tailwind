const Footer = () => {
  return (
    <footer className="bg-slate-50 py-2 w-full h-10 bottom-0 text-center text-xs dark:text-white dark:bg-slate-800 tracking-wider">
      &copy; Gamehub by edzhabs powered by{" "}
      <a
        href="https://rawg.io/"
        target="_blank"
        className="underline underline-offset-2 hover:cursor-pointer hover:text-gray-300 dark:hover:text-gray-600"
      >
        RAWG.IO
      </a>
    </footer>
  );
};

export default Footer;
