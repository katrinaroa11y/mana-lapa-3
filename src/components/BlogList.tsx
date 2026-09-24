import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { User, Calendar, ArrowRight, BookOpen } from 'lucide-react';

interface BlogListProps {
  onSelectPost: (slug: string) => void;
  onOpenBooking?: () => void;
  isPage?: boolean;
}

export const BlogList: React.FC<BlogListProps> = ({ onSelectPost, isPage = true }) => {
  // Exactly 3 posts for 1 single row on desktop grid
  const postsRow = BLOG_POSTS.slice(0, 3);

  const containerClasses = isPage
    ? "pt-28 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] min-h-screen border-b border-[#E3DDD3]"
    : "py-6 bg-transparent";

  return (
    <div className={containerClasses}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header section (only on full page) */}
        {isPage && (
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
            <div className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#668261] font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Psiholoģijas Blogs & Raksti</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-semibold leading-[1.18]">
              Katrīna raksta
            </h1>
            
            <p className="text-base sm:text-lg text-[#455260] font-normal leading-relaxed">
              Ja vēlies lasīt par daudzveidīgam psiholoģijas un psihoterapijas tēmām, tad šeit esi īstajā vietā. Blogā iegūsi zinātnē balstītu informāciju un praktiskus ieteikumus par stresa vadību, attiecībām, pašizziņu, dažādām metodēm un citām aktuālām psiholoģijas tēmām. Dalos ar to, kas palīdz labāk izprast sevi, citus cilvēkus un atrast praktiski pielietojamus soļus ikdienai.
            </p>
          </div>
        )}

        {/* Blog Grid - Exactly 1 row with 3 articles on desktop, 1 per row on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {postsRow.map((post: BlogPost, index: number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSelectPost(post.slug)}
              className="group bg-[#FFFFFF] rounded-sm border border-[#E3DDD3] overflow-hidden shadow-[0_2px_12px_-3px_rgba(28,39,51,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(28,39,51,0.08)] hover:border-[#1C2733]/40 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* 1. Featured Image (Raksta galvenā bilde) */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F4EFEA] shrink-0 border-b border-[#E3DDD3]">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#1C2733] bg-[#FAF8F5]/95 px-2.5 py-1 rounded-sm border border-[#D1C9BC]">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                
                {/* 2. Autors un publicēšanas datums */}
                <div className="flex items-center space-x-2 text-xs text-[#6E7D8C] font-mono">
                  <span className="flex items-center space-x-1.5 text-[#3A4753]">
                    <User className="w-3.5 h-3.5 text-[#668261] shrink-0" />
                    <span>Autors: {post.author}</span>
                  </span>
                  <span className="text-[#D1C9BC]">|</span>
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#668261] shrink-0" />
                    <span>{post.date}</span>
                  </span>
                </div>

                {/* 3. Raksta nosaukums */}
                <div className="space-y-2 flex-grow">
                  <h2 className="font-serif text-xl sm:text-2xl text-[#1C2733] font-semibold group-hover:text-[#668261] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#455260] line-clamp-3 font-normal leading-relaxed pt-1">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-[#E3DDD3] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1C2733] group-hover:text-[#668261] transition-colors">
                  <span>Lasīt pilno rakstu</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};
