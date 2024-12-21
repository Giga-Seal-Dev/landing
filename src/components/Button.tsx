type PropsType = {
	children: string;
	type: "colorful" | "transparent" | "default";
	link?: string;
  };
  
  export default function Button({ children, type, link }: PropsType) {
	return (
	  <div className="relative group">
		<a href={link || "#"} className="inline-block">
		  <button
			className={`rounded-full px-6 py-2 font-semibold text-lg transition-all duration-300 
			  ${
				type === "colorful"
				  ? "bg-gradient-to-r from-accent to-secondary text-white shadow-lg shadow-accent/40 hover:shadow-xl hover:scale-105"
				  : type === "transparent"
				  ? "bg-transparent border border-white text-white hover:text-green hover:border-green"
				  : "bg-white text-black border border-gray-300 hover:bg-gray-100 hover:shadow-md"
			  }`}
		  >
			{children}
		  </button>
		</a>
	  </div>
	);
  }
  