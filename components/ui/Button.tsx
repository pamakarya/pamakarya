// components/GalaxyButton.tsx
const GalaxyButton = () => {
    return (
      <a
        href="#"
        className="relative px-8 py-4 text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-full overflow-hidden transition-all duration-500 group"
      >
        {/* Outer glow effect */}
        <span className="absolute inset-0 w-full h-full rounded-full bg-blue-700 opacity-50 blur-3xl transition-transform duration-500 group-hover:blur-[50px] group-hover:scale-[1.2]"></span>
  
        {/* Galaxy particle effect */}
        <span className="absolute inset-0 rounded-full opacity-30 bg-[url('/path-to-galaxy-image.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.4]"></span>
  
        {/* Button label */}
        <span className="relative z-10">Explore Galaxy</span>
  
        {/* Hover shine effect */}
        <span className="absolute top-0 left-[-120%] w-[250%] h-[300%] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transition-all duration-1000 group-hover:animate-shine"></span>
      </a>
    );
  };
  
  export default GalaxyButton;
  