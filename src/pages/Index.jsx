import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Truck, Shield, RotateCcw, ShoppingBag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { featuredProducts, newProducts, categories } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
              alt="Premium products showcase"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/20">
                ✨ Premium Quality Collection
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Discover
                <span className="block bg-gradient-to-r from-secondary-light to-white bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
                Curated premium products that elevate your lifestyle. 
                From cutting-edge technology to timeless fashion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                    Shop Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-8 text-white/80 text-sm">
              <div className="text-center">
                <div className="font-bold text-2xl">50K+</div>
                <div>Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">99%</div>
                <div>Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">24/7</div>
                <div>Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                <p className="text-muted-foreground">
                  Free shipping on all orders over $50. Fast and reliable delivery worldwide.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                <p className="text-muted-foreground">
                  30-day return policy. No questions asked, full refund guaranteed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                <p className="text-muted-foreground">
                  Your payments are secure with 256-bit SSL encryption and fraud protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our carefully curated collections across different categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link key={category.id} href={`/products?category=${category.id}`}>
                  <Card className="group hover:shadow-large transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-gradient-primary relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ShoppingBag className="h-16 w-16 text-white opacity-50 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-light transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm opacity-90">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
                <p className="text-xl text-muted-foreground">
                  Handpicked items that our customers love most
                </p>
              </div>
              <Link href="/products">
                <Button variant="outline" className="hidden md:flex">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.images[0]}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  category={product.category}
                  isNew={product.isNew}
                  isSale={product.isSale}
                />
              ))}
            </div>

            <div className="text-center md:hidden">
              <Link href="/products">
                <Button variant="outline">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals</h2>
                <p className="text-xl text-muted-foreground">
                  Latest additions to our premium collection
                </p>
              </div>
              <Badge variant="secondary" className="bg-success text-success-foreground">
                New
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.images[0]}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  category={product.category}
                  isNew={product.isNew}
                  isSale={product.isSale}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay in the Loop
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get exclusive offers, new product updates, and premium content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-70">
                Join 50,000+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;