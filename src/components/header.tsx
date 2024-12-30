const Header = () => (
  <header className="px-4 py-1 flex items-center gap-2 bg-[#f0f0f0] w-full sm:px-6 md:px-16 lg:px-32 xl:px-[160px]">
    <img
      src="/singapore-lion.svg"
      alt="Singapore Government Logo"
      className="h-4 w-auto"
    />
    <p className="text-[10px] text-[#5b5b5b]">
      An Official Website of the <strong>Singapore Government</strong>
    </p>
  </header>
);

export default Header;
