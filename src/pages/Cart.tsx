import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/data/products";

interface CartItem {
  id: string;
  quantity: number;
}

export default function Cart() {
  // Mock cart items - in a real app, this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", quantity: 2 },
    { id: "3", quantity: 1 },
    { id: "5", quantity: 1 }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const cartProducts = cartItems.map(item => ({
    ...mockProducts.find(product => product.id === item.id)!,
    quantity: item.quantity
  }));

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setPromoApplied(true);
    }
  };

  const subtotal = cartProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
            <h1 className="text-2xl font-bold">Your cart is empty</h1>
            <p className="text-muted-foreground">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-gradient-primary text-primary-foreground">
                Start Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartProducts.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Product Image */}
                      <Link to={`/products/${product.id}`}>
                        <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <Link to={`/products/${product.id}`}>
                          <h3 className="font-semibold hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          {product.category}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-bold text-lg">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && product.originalPrice > product.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                          {product.isSale && (
                            <Badge variant="destructive" className="text-xs">
                              Sale
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                            disabled={product.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-3 py-2 font-medium">
                            {product.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                            disabled={product.quantity >= product.stockCount}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <span className="text-sm text-muted-foreground">
                        Item total ({product.quantity} item{product.quantity !== 1 ? 's' : ''})
                      </span>
                      <span className="font-semibold">
                        ${(product.price * product.quantity).toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Promo Code</h3>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                      />
                      <Button
                        variant="outline"
                        onClick={applyPromoCode}
                        disabled={!promoCode || promoApplied}
                      >
                        Apply
                      </Button>
                    </div>
                    {promoApplied && (
                      <div className="flex items-center gap-2 text-success text-sm">
                        <Badge variant="secondary" className="bg-success text-success-foreground">
                          SAVE10
                        </Badge>
                        <span>Promo code applied! 10% off</span>
                      </div>
                    )}
                    {!promoApplied && (
                      <p className="text-xs text-muted-foreground">
                        Try "SAVE10" for 10% off
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-success">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-success">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button className="w-full bg-gradient-primary text-primary-foreground">
                      Proceed to Checkout
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {shipping > 0 ? (
                        <>Add ${(50 - subtotal).toFixed(2)} more for free shipping</>
                      ) : (
                        "🎉 You qualify for free shipping!"
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Why shop with us?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span>Free shipping on orders over $50</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span>24/7 customer support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}