import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramSection = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
      likes: "2.5k",
      comments: "45"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556228578-dd1d6e0e45e3?w=300&h=300&fit=crop",
      likes: "1.8k",
      comments: "32"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556228578-f9f3ffe8e1d0?w=300&h=300&fit=crop",
      likes: "3.2k",
      comments: "67"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1556228578-0fd88b7ac9f7?w=300&h=300&fit=crop",
      likes: "2.1k",
      comments: "28"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1556228578-626eabea5beb?w=300&h=300&fit=crop",
      likes: "1.9k",
      comments: "39"
    }
  ];

  return (
    <section className="py-16 bg-melita-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-melita-deep-coffee mb-4">
            INSTAGRAM
          </h2>
        </div>

        {/* Instagram Posts Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-soft hover:bg-melita-soft-beige"
          >
            <ChevronLeft className="h-6 w-6 text-melita-deep-coffee" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-soft hover:bg-melita-soft-beige"
          >
            <ChevronRight className="h-6 w-6 text-melita-deep-coffee" />
          </Button>

          {/* Posts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-12">
            {instagramPosts.map((post) => (
              <div key={post.id} className="group relative">
                <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-soft hover:shadow-luxury transition-all duration-300 group-hover:scale-105">
                  <img
                    src={post.image}
                    alt={`Instagram post ${post.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center text-xs">
                      <p>♥ {post.likes}</p>
                      <p>💬 {post.comments}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;