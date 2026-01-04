import type { LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  icon: LucideIcon;
  title: string;
  url: string;
}

export function LinkButton({ icon: Icon, title, url }: LinkButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full max-w-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-5 flex items-center gap-4 group-hover:bg-slate-800/70 group-hover:border-slate-600/50 group-hover:scale-[1.02] transition-all duration-300">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-cyan-500/25 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <span className="text-white text-lg flex-1">{title}</span>
        
        <svg
          className="w-5 h-5 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </a>
  );
}
