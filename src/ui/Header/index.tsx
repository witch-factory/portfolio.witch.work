type Props = {
  pageLabels: string[];
  activePageIndex: number;
  setActivePageIndex: (index: number) => void;
};

function Header({ pageLabels, activePageIndex, setActivePageIndex }: Props) {
  return (
    <header className="w-full h-14 fixed top-0 bg-white/10 backdrop-blur-md mx-auto z-50 flex flex-row justify-center">
      <nav className="w-full h-full max-w-[30rem] flex flex-row justify-between items-center px-4">
        {pageLabels.map((label, index) => (
          <button
            type="button"
            key={index}
            className={`text-xl font-bold py-2 px-8 cursor-pointer border-none ${
              activePageIndex === index ? 'text-black bg-white rounded-lg' : 'text-white bg-transparent'
            }`}
            onClick={() => {
              setActivePageIndex(index);
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
