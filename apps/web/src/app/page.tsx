"use client";
import { useMiniApp } from "@/contexts/miniapp-context";
import { PersonalityQuiz } from "@/components/personality-quiz";

export default function Home() {
  const { isMiniAppReady } = useMiniApp();
  
  if (!isMiniAppReady) {
    return (
      <main className="flex-1">
        <section className="flex items-center justify-center min-h-screen bg-celo-tan">
          <div className="w-full max-w-md mx-auto p-8 text-center">
            <div className="border-4 border-black bg-celo-yellow p-8 mb-4">
              <div className="font-inter font-bold text-2xl tracking-tight uppercase">
                LOADING
              </div>
            </div>
            <div className="w-full bg-white border-4 border-black h-4">
              <div className="h-full bg-black animate-pulse w-1/2"></div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  return <PersonalityQuiz />;
}
