import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How to Choose the Right Gemstone for Your Birth Chart",
    excerpt: "Discover the ancient science of gemstone selection based on your planetary positions. Learn which stone strengthens which planet and how to identify your perfect match.",
    category: "Gemstones",
    author: "Pandit Rajesh Sharma",
    date: "December 15, 2024",
    readTime: "8 min read",
  },
  {
    title: "Understanding Your Kundli: A Beginner's Guide",
    excerpt: "Demystify the complexities of Vedic birth charts. Learn about houses, planets, signs, and how they shape your destiny according to ancient Jyotish wisdom.",
    category: "Astrology Basics",
    author: "Pandit Rajesh Sharma",
    date: "December 10, 2024",
    readTime: "10 min read",
  },
  {
    title: "Mangal Dosha: Myths, Facts, and Effective Remedies",
    excerpt: "Clear misconceptions about Mangal Dosha in marriage compatibility. Explore authentic Vedic remedies and understand when it truly matters in relationships.",
    category: "Marriage Astrology",
    author: "Pandit Rajesh Sharma",
    date: "December 5, 2024",
    readTime: "12 min read",
  },
  {
    title: "Vastu Tips for Prosperity and Peace at Home",
    excerpt: "Practical Vastu Shastra principles to harmonize your living space. Simple adjustments that can bring positive energy, wealth, and family harmony.",
    category: "Vastu Shastra",
    author: "Pandit Rajesh Sharma",
    date: "November 28, 2024",
    readTime: "7 min read",
  },
  {
    title: "The Power of Rudraksha: Benefits and Selection Guide",
    excerpt: "Explore the spiritual and healing properties of Rudraksha beads. Learn how to choose the right Mukhi based on your needs and planetary influences.",
    category: "Spiritual Remedies",
    author: "Pandit Rajesh Sharma",
    date: "November 20, 2024",
    readTime: "9 min read",
  },
  {
    title: "Navagraha Remedies: Balancing Planetary Energies",
    excerpt: "Comprehensive guide to appeasing the nine planets through mantras, fasting, donations, and rituals. Traditional wisdom for modern life challenges.",
    category: "Remedies",
    author: "Pandit Rajesh Sharma",
    date: "November 12, 2024",
    readTime: "11 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-cosmic overflow-hidden">
        <div className="absolute inset-0 pattern-mandala opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="text-accent text-6xl font-bold mb-4 animate-glow">
            ॐ
          </div>
          <h1 className="heading-sacred">Jyotish Wisdom & Insights</h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ancient knowledge, modern understanding — your guide to Vedic astrology and spiritual living
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-sacred">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Signup */}
          <div className="card-sacred bg-gradient-sacred text-primary-foreground mb-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Receive daily Panchang, weekly astrology insights, and sacred remedies directly in your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="card-sacred group cursor-pointer hover:scale-105 transition-sacred">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">
                  {article.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <Button variant="ghost" className="group-hover:text-primary transition-colors p-0">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-accent/30 hover:border-accent/50">
              Load More Articles
            </Button>
          </div>

          {/* Categories */}
          <div className="mt-16 card-sacred bg-muted/30">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Explore by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["All Articles", "Gemstones", "Astrology Basics", "Marriage Astrology", "Vastu Shastra", "Spiritual Remedies", "Remedies", "Career", "Health"].map((cat) => (
                <Button
                  key={cat}
                  variant={cat === "All Articles" ? "default" : "outline"}
                  size="sm"
                  className={cat === "All Articles" ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
