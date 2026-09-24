import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/blogData';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from 'lucide-react';

const katrinaPortrait = '/psihologe-riga-katrina-rozenbaha-prakse.jpg';

interface BlogPostSingleProps {
  slug: string;
  onBackToBlogs: () => void;
  onSelectPost: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogPostSingle: React.FC<BlogPostSingleProps> = ({
  slug,
  onBackToBlogs,
  onSelectPost,
  onOpenBooking,
}) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Raksta saite veiksmīgi nokopēta starpliktuvē!');
    }
  };

  return (
    <article className="pt-28 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] min-h-screen border-b border-[#E3DDD3]">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Navigation & Breadcrumbs */}
        <div className="mb-8 flex items-center justify-between border-b border-[#E3DDD3] pb-4">
          <button
            onClick={onBackToBlogs}
            className="inline-flex items-center space-x-2 text-sm text-[#1C2733] font-medium hover:text-[#668261] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Atpakaļ uz visiem rakstiem</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#1C2733] hover:text-[#668261] bg-[#FFFFFF] px-3.5 py-1.5 rounded-sm border border-[#D1C9BC] transition-all cursor-pointer shadow-2xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Dalīties ar rakstu</span>
          </button>
        </div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 mb-10"
        >
          <div className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#1C2733] bg-[#FFFFFF] px-3 py-1 rounded-sm border border-[#D1C9BC]">
            {post.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C2733] font-semibold leading-[1.18]">
            {post.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#6E7D8C] pt-3 border-t border-[#E3DDD3] font-mono">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-[#668261]" />
              <span>{post.date}</span>
            </div>

            <span className="hidden sm:inline text-[#D1C9BC]">|</span>

            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-[#668261]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 rounded-sm overflow-hidden border border-[#E3DDD3] shadow-[0_4px_20px_-4px_rgba(28,39,51,0.06)] bg-[#FFFFFF]"
        >
          <img
            src={post.featuredImage}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-[280px] sm:h-[420px] object-cover object-center"
          />
        </motion.div>

        {/* Article Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#FFFFFF] rounded-sm border border-[#E3DDD3] p-7 sm:p-10 lg:p-14 shadow-[0_2px_12px_-3px_rgba(28,39,51,0.04)] space-y-8"
        >
          {/* Intro Lead */}
          <p className="text-base sm:text-lg text-[#1C2733] font-normal leading-relaxed border-l-2 border-[#668261] pl-5 py-1 italic font-serif">
            {post.content.intro}
          </p>

          {/* Section Paragraphs */}
          <div className="space-y-8 text-base text-[#455260] leading-[1.8] font-normal">
            {post.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-serif text-2xl text-[#1C2733] font-semibold pt-2">
                  {sec.heading}
                </h2>
                <div 
                  className="whitespace-pre-line leading-relaxed [&>b]:font-bold [&>b]:text-[#1C2733] [&>strong]:font-bold [&>strong]:text-[#1C2733]"
                  dangerouslySetInnerHTML={{ __html: sec.body }} 
                />
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 pt-8 border-t border-[#E3DDD3] flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left bg-[#FAF8F5] p-6 sm:p-7 rounded-sm border border-[#E3DDD3]">
            <img
              src={katrinaPortrait}
              alt={post.author}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-sm object-cover border border-[#D1C9BC] shadow-xs shrink-0"
            />
            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#668261]">
                Raksta autore
              </span>
              <h4 className="font-serif text-lg text-[#1C2733] font-semibold">
                {post.author}
              </h4>
              <p className="text-xs text-[#455260] font-normal leading-relaxed">
                Reģistrēta psiholoģe (Reģ. Nr. 7001430). Specializējas klīniskajā psiholoģijā, izmanto EMDR un shēmu terapijas metodes.
              </p>
            </div>
          </div>

          {/* Consultation Banner */}
          <div className="pt-8 text-center space-y-4 border-t border-[#E3DDD3]">
            <p className="text-base text-[#1C2733]">
              Vēlies uzzināt vairāk par rakstā aplūkoto tēmu?
            </p>
            <button
              onClick={onOpenBooking}
              className="bg-[#e08e69] hover:bg-[#cb7c57] text-[#FAF8F5] py-3.5 px-8 rounded-md font-medium text-sm tracking-wide transition-all shadow-xs hover:shadow-sm cursor-pointer border border-[#e08e69] hover:border-[#cb7c57]"
            >
              Piesakies konsultācijai
            </button>
          </div>

        </motion.div>

        {/* Other Posts Section */}
        {otherPosts.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center justify-between border-b border-[#E3DDD3] pb-3">
              <h3 className="font-serif text-2xl text-[#1C2733] font-semibold flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-[#668261]" />
                <span>Citi saistītie raksti</span>
              </h3>
              <button
                onClick={onBackToBlogs}
                className="text-xs font-semibold uppercase tracking-wider text-[#1C2733] hover:text-[#668261] transition-colors"
              >
                Skatīt visus rakstus
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((otherPost) => (
                <div
                  key={otherPost.id}
                  onClick={() => onSelectPost(otherPost.slug)}
                  className="bg-[#FFFFFF] rounded-sm border border-[#E3DDD3] p-6 shadow-[0_2px_12px_-3px_rgba(28,39,51,0.03)] hover:border-[#1C2733]/40 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#668261]">
                      {otherPost.category}
                    </span>
                    <h4 className="font-serif text-lg text-[#1C2733] font-semibold group-hover:text-[#668261] transition-colors line-clamp-2">
                      {otherPost.title}
                    </h4>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs text-[#6E7D8C] font-mono">
                    <span>{otherPost.date}</span>
                    <span className="font-medium text-[#1C2733] group-hover:text-[#668261] group-hover:translate-x-1 transition-transform">
                      Lasīt &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};
