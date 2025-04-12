import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3F6F9] text-[#1E2A38]">
      <header className="p-6 shadow bg-white flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">TrustBridge</h1>
        <nav className="space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">How it Works</Button>
          <Button variant="ghost">For Clients</Button>
          <Button variant="ghost">For Providers</Button>
          <Button variant="default">Sign In</Button>
        </nav>
      </header>

      <main className="p-10 max-w-6xl mx-auto grid gap-12">
        <section className="text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-blue-900">Global Outsourcing Made Easy</h2>
          <p className="text-lg text-gray-600">
            Connect with verified outsourcing companies worldwide. Transparent. Secure. Efficient.
          </p>
          <Button className="px-6 py-3 text-lg">Get Started</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 space-y-3">
              <CheckCircle className="text-blue-700" size={32} />
              <h3 className="font-semibold text-xl">Verified Providers</h3>
              <p className="text-sm text-gray-500">We evaluate and vet each company to ensure quality and data security.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-3">
              <CheckCircle className="text-blue-700" size={32} />
              <h3 className="font-semibold text-xl">Smart Matching</h3>
              <p className="text-sm text-gray-500">Post your project and get matched with top companies that fit your needs.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-3">
              <CheckCircle className="text-blue-700" size={32} />
              <h3 className="font-semibold text-xl">Global Network</h3>
              <p className="text-sm text-gray-500">Access talent and expertise from around the world, all in one place.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-white mt-16 p-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TrustBridge. All rights reserved.
      </footer>
    </div>
  );
}