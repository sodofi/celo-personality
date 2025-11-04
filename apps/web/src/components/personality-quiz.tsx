"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type PersonalityType = "mini app" | "human" | "regen" | "L2" | "stablecoin";

interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    personality: PersonalityType;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "If Celo were a city, you'd hang out at the…",
    answers: [
      { text: "arcade", personality: "mini app" },
      { text: "passport control", personality: "human" },
      { text: "community garden", personality: "regen" },
      { text: "gas station", personality: "L2" },
      { text: "tap-to-pay cafe", personality: "stablecoin" },
    ],
  },
  {
    id: 2,
    question: "What's most likely in your wallet?",
    answers: [
      { text: "Testnet tokens", personality: "L2" },
      { text: "A hypercert", personality: "regen" },
      { text: "cCOP, cNGN, cEUR", personality: "stablecoin" },
      { text: "A human verification", personality: "human" },
      { text: "Onchain points", personality: "mini app" },
    ],
  },
  {
    id: 3,
    question: "Pick a character",
    answers: [
      { text: "The tinkerer", personality: "mini app" },
      { text: "The architect", personality: "L2" },
      { text: "The real one", personality: "human" },
      { text: "The philosopher", personality: "regen" },
      { text: "The value add", personality: "stablecoin" },
    ],
  },
  {
    id: 4,
    question: "What's your favorite part of Celo?",
    answers: [
      { text: "Offsetting carbon every time you transact", personality: "regen" },
      { text: "Staying verified and private", personality: "human" },
      { text: "Paying gas with stables", personality: "stablecoin" },
      { text: "Playing with apps on the go", personality: "mini app" },
      { text: "Fast block times", personality: "L2" },
    ],
  },
  {
    id: 5,
    question: "Pick a mission statement",
    answers: [
      { text: "Frontier chain for global impact", personality: "regen" },
      { text: "Scaling mobile use cases", personality: "mini app" },
      { text: "Leading Ethereum L2", personality: "L2" },
      { text: "Cheap, fast transactions", personality: "stablecoin" },
      { text: "Building for the real-world", personality: "human" },
    ],
  },
];

const personalityResults = {
  "mini app": {
    title: "Mini App Maven",
    emoji: "🎮",
    description: "You're all about the mobile-first future. You believe in making blockchain accessible through fun, intuitive apps that people can use on the go. The arcade is your playground, and every tap is a transaction.",
    traits: ["Innovative", "User-focused", "Mobile-first", "Playful"],
    color: "from-purple-500 to-pink-500",
  },
  "human": {
    title: "Real Human Being",
    emoji: "🌟",
    description: "You value authenticity and real-world connections. Privacy and verification matter to you, but so does staying true to yourself. You're building bridges between the digital and physical world.",
    traits: ["Authentic", "Private", "Verified", "Grounded"],
    color: "from-blue-500 to-cyan-500",
  },
  "regen": {
    title: "Regenerative Soul",
    emoji: "🌱",
    description: "You're here to make a positive impact. Every transaction is an opportunity to do good, and you believe blockchain can help heal the planet. The community garden is where you thrive.",
    traits: ["Impact-driven", "Sustainable", "Thoughtful", "Caring"],
    color: "from-green-500 to-emerald-500",
  },
  "L2": {
    title: "L2 Architect",
    emoji: "⚡",
    description: "You're all about speed, efficiency, and scalability. You appreciate the technical sophistication of Layer 2 solutions and understand that infrastructure is the foundation of everything.",
    traits: ["Technical", "Efficient", "Scalable", "Visionary"],
    color: "from-orange-500 to-red-500",
  },
  "stablecoin": {
    title: "Stablecoin Pragmatist",
    emoji: "💰",
    description: "You see the practical value in crypto. Fast, cheap transactions with stable currencies are the killer app. You're making crypto useful for everyday life, one tap-to-pay transaction at a time.",
    traits: ["Practical", "Value-focused", "Accessible", "Global"],
    color: "from-yellow-500 to-amber-500",
  },
};

export function PersonalityQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (personality: PersonalityType, answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    setTimeout(() => {
      const newAnswers = [...answers, personality];
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 500);
  };

  const calculateResult = (): PersonalityType => {
    const counts: Record<PersonalityType, number> = {
      "mini app": 0,
      "human": 0,
      "regen": 0,
      "L2": 0,
      "stablecoin": 0,
    };

    answers.forEach((answer) => {
      counts[answer]++;
    });

    let maxCount = 0;
    let result: PersonalityType = "mini app";

    Object.entries(counts).forEach(([personality, count]) => {
      if (count > maxCount) {
        maxCount = count;
        result = personality as PersonalityType;
      }
    });

    return result;
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  if (showResults) {
    const result = calculateResult();
    const resultData = personalityResults[result];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 animate-in fade-in duration-500">
          <div className="text-center">
            <div className="text-8xl mb-6 animate-bounce">{resultData.emoji}</div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${resultData.color}">
              {resultData.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {resultData.description}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Traits</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {resultData.traits.map((trait, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r ${resultData.color}`}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={restartQuiz}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-6 text-lg"
              >
                Take Quiz Again
              </Button>
              
              <Button
                onClick={() => {
                  const text = `I just discovered I'm a ${resultData.title} on Celo! ${resultData.emoji}`;
                  if (navigator.share) {
                    navigator.share({
                      title: "My Celo Personality",
                      text: text,
                    });
                  } else {
                    navigator.clipboard.writeText(text);
                    alert("Copied to clipboard!");
                  }
                }}
                variant="outline"
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-6 text-lg"
              >
                Share Your Result
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 animate-in slide-in-from-right duration-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentQuestion.question}
          </h2>

          <div className="space-y-4">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.personality, index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-6 text-left text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  selectedAnswer === index
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-105 shadow-xl"
                    : "bg-white hover:bg-gray-50 text-gray-800 shadow-md"
                } ${selectedAnswer !== null && selectedAnswer !== index ? "opacity-50" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span>{answer.text}</span>
                  {selectedAnswer === index && (
                    <span className="text-2xl animate-bounce">✨</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Back Button */}
        {currentQuestionIndex > 0 && selectedAnswer === null && (
          <div className="mt-6 text-center">
            <Button
              onClick={() => {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                setAnswers(answers.slice(0, -1));
              }}
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to Previous Question
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

