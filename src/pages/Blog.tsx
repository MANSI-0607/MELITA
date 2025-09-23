import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Skin Barrier: A Complete Guide",
      excerpt: "Learn about the importance of maintaining a healthy skin barrier and how it protects your skin from environmental damage.",
      date: "March 15, 2024",
      category: "Skincare Science"
    },
    {
      id: 2,
      title: "The Ultimate Guide to SPF for Indian Skin",
      excerpt: "Discover why SPF 50+ is essential for Indian skin tones and how to choose the right sunscreen for your skin type.",
      date: "March 10, 2024",
      category: "Sun Protection"
    },
    {
      id: 3,
      title: "Ingredient Spotlight: Niacinamide for Indian Skin",
      excerpt: "Explore the benefits of niacinamide and why it's particularly effective for addressing common Indian skin concerns.",
      date: "March 5, 2024",
      category: "Ingredients"
    },
    {
      id: 4,
      title: "Building Your Perfect Skincare Routine",
      excerpt: "A step-by-step guide to creating an effective skincare routine tailored to your specific skin needs and concerns.",
      date: "February 28, 2024",
      category: "Routine Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-melita-deep-coffee mb-4">
            Melita Blog
          </h1>
          <p className="font-roboto text-lg text-melita-medium">
            Expert insights, skincare tips, and the latest in beauty science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-product overflow-hidden hover:shadow-luxury transition-all duration-300">
              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-melita-soft-beige text-melita-deep-coffee px-3 py-1 rounded-full font-roboto font-medium">
                    {post.category}
                  </span>
                  <span className="font-roboto text-melita-medium">
                    {post.date}
                  </span>
                </div>
                
                <h2 className="font-playfair text-2xl font-semibold text-melita-deep-coffee hover:text-melita-golden-taupe transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="font-roboto text-melita-medium leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="font-roboto font-medium text-melita-golden-taupe hover:text-melita-deep-coffee transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;