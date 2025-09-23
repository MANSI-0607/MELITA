import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';

const LatestBlogs = () => {
  const blogs = [
    {
      title: "HOW TO BUILD SKINCARE ROUTINE",
      image: blog1,
      category: "Skincare Tips"
    },
    {
      title: "THE SECRETS TO GLOWING SKIN",
      image: blog2,
      category: "Beauty Secrets"
    },
    {
      title: "THE SECRETS TO GLOWING SKIN",
      image: blog3,
      category: "Natural Beauty"
    }
  ];

  return (
    <section className="py-16 bg-melita-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-melita-deep-coffee mb-4">
            LATEST BLOGS
          </h2>
        </div>

        {/* Blog Carousel */}
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

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
            {blogs.map((blog, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-product overflow-hidden hover:shadow-luxury transition-all duration-300 group-hover:scale-105">
                  {/* Blog Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Blog Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <p className="font-roboto text-xs text-melita-medium uppercase tracking-wide">
                        {blog.category}
                      </p>
                      <h3 className="font-roboto font-semibold text-sm text-melita-deep-coffee leading-tight">
                        {blog.title}
                      </h3>
                    </div>
                    
                    <Button 
                      variant="melita" 
                      className="w-full font-roboto text-xs py-2 rounded-md"
                    >
                      READ MORE
                    </Button>
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

export default LatestBlogs;