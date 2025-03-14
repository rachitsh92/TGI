import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import UseCases from "@/components/sections/use-cases";
import Join from "@/components/sections/join";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <UseCases />
        <Join />
      </main>
    </div>
  );
}