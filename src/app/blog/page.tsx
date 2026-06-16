import Link from "next/link";
import { ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  // Highlight the first post, map the rest
  const [featuredPost, ...regularPosts] = posts;

  return (
    <main className="bg-white min-h-screen py-36">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-24">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#09090B] mb-8">
            Intelligence <span className="text-[#D35A3C]">Hub</span>.
          </h1>
          <p className="text-xl text-[#52525B] leading-relaxed">
            Thoughts on Support Ops, AI engineering, and building the operational memory layer for high-growth teams.
          </p>
        </div>
        
        {posts.length > 0 ? (
          <div className="space-y-16">
            {/* Featured Post */}
            {featuredPost && (
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="group block p-10 md:p-16 rounded-[2rem] border border-[#E4E4E7] bg-[#FAFAFA] transition-all hover:shadow-2xl hover:border-[#D35A3C]/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-64 w-64 bg-[#D35A3C] opacity-5 blur-[100px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity" />
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  {featuredPost.tags?.slice(0, 2).map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D35A3C]/10 text-[#D35A3C] text-xs font-bold uppercase tracking-wider">
                      <Tag className="h-3 w-3" /> {tag}
                    </span>
                  ))}
                  <span className="flex items-center gap-1.5 text-sm font-medium text-[#71717A]">
                    <Clock className="h-4 w-4" /> {featuredPost.readingTimeText}
                  </span>
                  <span className="text-sm font-medium text-[#71717A]">{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#09090B] mb-6 group-hover:text-[#D35A3C] transition-colors leading-[1.1]">
                  {featuredPost.title}
                </h2>
                
                <p className="text-xl text-[#52525B] leading-relaxed mb-10 max-w-3xl font-light">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] group-hover:gap-4 transition-all">
                  Read full article <ArrowRight className="h-4 w-4 text-[#D35A3C]" />
                </div>
              </Link>
            )}

            {/* Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col p-8 md:p-10 rounded-3xl border border-[#E4E4E7] bg-white transition-all hover:shadow-xl hover:-translate-y-1 hover:border-[#D35A3C]/20"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {post.tags?.slice(0, 1).map((tag) => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-wider text-[#D35A3C]">
                        {tag}
                      </span>
                    ))}
                    <span className="text-[#E4E4E7]">•</span>
                    <span className="flex items-center gap-1.5 text-sm text-[#71717A]">
                      <Clock className="h-3 w-3" /> {post.readingTimeMinutes}m
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-medium tracking-tight text-[#09090B] mb-4 group-hover:text-[#D35A3C] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#52525B] leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-[#F4F4F5] flex justify-between items-center text-sm font-semibold text-[#09090B]">
                    <span>Read Article</span>
                    <div className="h-8 w-8 rounded-full bg-[#F4F4F5] flex items-center justify-center group-hover:bg-[#09090B] group-hover:text-white transition-colors">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-24 text-[#71717A]">
            Check back soon for updates.
          </div>
        )}
      </div>
    </main>
  );
}
