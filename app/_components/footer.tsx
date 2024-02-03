import { HeartIcon } from "lucide-react";

const Footer = () => {
  return ( <div className="w-full bg-secondary py-6 px-5">
    <p className="text-gray-400 text-xs font-bold opacity-75 flex items-center justify-center gap-1">
      Feito com <HeartIcon size={12} className="fill-primary text-primary animate-bounce"/> por <a href="" className="hover:text-primary transition-colors">Matheus</a>
    </p>
  </div> );
}
 
export { Footer };
