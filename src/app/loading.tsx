const Loading = () => (
  <div className="flex-col gap-4 flex items-center justify-center absolute h-full w-full z-50 bg-grey900">
    <div className="w-20 h-20 border-8 text-primary text-4xl animate-spin border-secondary flex items-center justify-center border-t-primary rounded-full"></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 231 207"
      fill="none"
      className="animate-ping absolute"
    >
      <path d="M231 90.2632V0H0L231 90.2632Z" fill="#FF720B" />
      <path d="M69.6313 60.7897V123.79H231L69.6313 60.7897Z" fill="#FF720B" />
      <path d="M231 206.314V153.261H143.684L231 206.314Z" fill="#FF720B" />
    </svg>
  </div>
);

export default Loading;
