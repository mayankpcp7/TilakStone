export const YelloCommonButton = ({ text, className = "", ...props }) => {
  return (
    <button
      className={`bg-[url(./assets/images/png/buttonBackground.png)] bg-full bg-center text-white hover:text-black duration-300 flex mx-auto bg-no-repeat font-semibold text-base font-plusJkarta leading-md p-[13.5px_42px] border-0 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};
