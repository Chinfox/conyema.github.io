const LinkButton = ({ text, href }: { text: string, href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-light"
      // className="inline-block px-4 py-2 bg-gray-900 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
    >
      {text}
    </a>
  );
};

export default LinkButton;
