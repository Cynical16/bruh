"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Star, Shield, Scale, HeadphonesIcon, Zap } from "lucide-react"
import { ScrollButton } from "@/components/scroll-button"
import { Navbar } from "@/components/navbar"
import { demoProducts, type Product } from "@/lib/products"

export default function Home() {
  return (
    <div className="bg-background relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-section py-24 sm:py-32">
        <div className="mesh-grid">
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
        </div>
        <div className="container px-4 mx-auto">
          <div className="glass-card p-8 sm:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
                Mamba Accounts
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                #1 Account Service
              </p>
              <p className="mt-2 text-white/80">
                Quality, Legal & Safe. Get Cheap Accounts Now. Powered by Mambas Shop.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <ScrollButton 
                  size="lg"
                  className="gradient-border bg-background/50 hover:bg-background/80 transition-all duration-300 text-white"
                >
                  View Products
                </ScrollButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-[#14121E]">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient">A few reasons to choose us.</h2>
            <p className="text-foreground/60">What makes our service so special?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-6 h-6 text-primary" />}
              title="Reliable Service"
              description="We are selling accounts since 2019 now, growing every single day with currently over 3000 happy customers!"
            />
            <FeatureCard
              icon={<Star className="w-6 h-6 text-primary" />}
              title="Vouched by many"
              description="Currently we have over 1350 vouches available through many forums and platforms. We are also the #1 top vouched user on cracked.io."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-primary" />}
              title="Best warranty available"
              description="Since all of our Accounts are legally obtained, we offer full warranty. Meaning that you will have warranty till your end date!"
            />
            <FeatureCard
              icon={<Scale className="w-6 h-6 text-primary" />}
              title="Legal matters"
              description="All of our Accounts are 100% legally obtained. This way your accounts won&apos;t get risked in any way. Say goooooodbye to risky Accounts & accounts!"

            />
            <FeatureCard
              icon={<HeadphonesIcon className="w-6 h-6 text-primary" />}
              title="Support"
              description="Unlike others, we are constantly improving our support. Contact us on Telegram or Discord, and we will get back to you straight away!"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Instant Delivery"
              description="Get your accounts instantly after purchase. Our automated system ensures immediate delivery, so you can start using your account right away!"
            />
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="products" className="gradient-section py-24">
        <div className="mesh-grid">
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
        </div>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoProducts.map((product: Product) => (
              <Card 
                key={product.sellixProductId} 
                className="glass-card product-card overflow-hidden group transition-all duration-300 hover:translate-y-[-4px]"
              >
                <CardHeader>
                  <div className="relative w-full h-48">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-white">{product.name}</CardTitle>
                  <p className="text-white/80 mb-4">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-white">${product.price}</p>
                </CardContent>
                <CardFooter>
                  <button
                    type="submit"
                    data-sellix-product={product.sellixProductId}
                    className="w-full gradient-border bg-background/50 hover:bg-background/80 transition-all duration-300 text-white px-4 py-2 rounded-lg"
                  >
                    Purchase Now
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#14121E]">
        <div className="container px-4 mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gradient">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-background/50 px-6 py-4 rounded-t-lg w-full text-left text-white/90 hover:text-white">
                How long does delivery take?
              </AccordionTrigger>
              <AccordionContent className="bg-background/50 px-6 py-4 rounded-b-lg text-white/80">
                Delivery is instant and automated. Youll receive your account credentials immediately after purchase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mt-4">
              <AccordionTrigger className="bg-background/50 px-6 py-4 rounded-t-lg w-full text-left text-white/90 hover:text-white">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="bg-background/50 px-6 py-4 rounded-b-lg text-white/80">
                We accept various payment methods including credit cards, PayPal, and cryptocurrency through our secure Sellix payment system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="mt-4">
              <AccordionTrigger className="bg-background/50 px-6 py-4 rounded-t-lg w-full text-left text-white/90 hover:text-white">
                What if I have issues with my account?
              </AccordionTrigger>
              <AccordionContent className="bg-background/50 px-6 py-4 rounded-b-lg text-white/80">
                We offer full warranty support. If you experience any issues, our support team is available 24/7 to assist you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-section py-24">
        <div className="mesh-grid">
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
          <div className="mesh-spot" />
        </div>
        <div className="container px-4 mx-auto">
          <div className="glass-card p-8 sm:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-white">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers and experience our premium account services today.
              </p>
              <ScrollButton 
                size="lg"
                className="gradient-border bg-background/50 hover:bg-background/80 transition-all duration-300 text-white"
              >
                Browse Products
              </ScrollButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14121E] text-foreground/60 py-8 footer-border">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gradient font-bold mb-4">Mamba Accounts</h3>
              <p className="text-sm">Quality accounts since 2019</p>
            </div>
            <div>
              <h3 className="text-gradient font-bold mb-4">Contact</h3>
              <Link href="https://discord.com/users/ilovesyn" className="text-sm block hover:text-primary transition-colors">
                Discord: ilovesyn
              </Link>
              <Link href="https://t.me/mambaaccounts" className="text-sm block hover:text-primary transition-colors">
                Telegram: mambaaccounts
              </Link>
            </div>
            <div>
              <h3 className="text-gradient font-bold mb-4">Legal</h3>
              <Link href="/terms" className="text-sm block hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm block hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center text-sm border-t border-primary/10">
            © {new Date().getFullYear()} Mamba Accounts. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="glass-card border-0">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-gradient">{title}</h3>
        <p className="text-foreground/60">{description}</p>
      </CardContent>
    </Card>
  );
}
