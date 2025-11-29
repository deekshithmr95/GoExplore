'use client'

import { useState, useEffect } from 'react'

interface Stat {
  id: number
  emoji: string
  label: string
  value: string
  description: string
  color: string
}

interface Trivia {
  id: number
  question: string
  answers: string[]
  correctAnswer: number
  fun_fact: string
}

const stats: Stat[] = [
  {
    id: 1,
    emoji: '🌍',
    label: 'Total Destinations',
    value: '250+',
    description: 'Explore countries and cities around the globe',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    emoji: '✈️',
    label: 'Active Travelers',
    value: '50K+',
    description: 'Join our community of adventurers',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 3,
    emoji: '⭐',
    label: 'Reviews & Ratings',
    value: '10K+',
    description: 'Real experiences from real travelers',
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 4,
    emoji: '🎯',
    label: 'Top Attractions',
    value: '5K+',
    description: 'Hand-picked destinations worldwide',
    color: 'from-green-500 to-green-600',
  },
]

const triviaQuestions: Trivia[] = [
  {
    id: 1,
    question: 'Which country has the most UNESCO World Heritage Sites?',
    answers: ['France', 'Italy', 'China', 'Spain'],
    correctAnswer: 2,
    fun_fact: 'China has 57 UNESCO World Heritage Sites! 🏯',
  },
  {
    id: 2,
    question: 'What is the most visited country in the world?',
    answers: ['Thailand', 'France', 'Spain', 'Italy'],
    correctAnswer: 1,
    fun_fact: 'France receives over 90 million international tourists annually! 🇫🇷',
  },
  {
    id: 3,
    question: 'Which city is known as the Venice of the North?',
    answers: ['Amsterdam', 'Stockholm', 'Copenhagen', 'Hamburg'],
    correctAnswer: 1,
    fun_fact: 'Stockholm is built on 14 islands! 🏝️',
  },
  {
    id: 4,
    question: 'What is the highest mountain peak in the world?',
    answers: ['K2', 'Kilimanjaro', 'Mount Everest', 'Denali'],
    correctAnswer: 2,
    fun_fact: 'Mount Everest is 8,849 meters (29,032 feet) high! ⛰️',
  },
  {
    id: 5,
    question: 'Which desert is the largest in the world?',
    answers: ['Kalahari', 'Sahara', 'Antarctic', 'Gobi'],
    correctAnswer: 2,
    fun_fact: 'The Antarctic is the largest desert, covering 14.2 million km²! ❄️',
  },
]

export default function InteractiveEngagement() {
  const [selectedStat, setSelectedStat] = useState(0)
  const [currentTrivia, setCurrentTrivia] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStat((prev) => (prev + 1) % stats.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    const correct = answerIndex === triviaQuestions[currentTrivia].correctAnswer
    setIsCorrect(correct)
  }

  const handleNextTrivia = () => {
    setCurrentTrivia((prev) => (prev + 1) % triviaQuestions.length)
    setSelectedAnswer(null)
    setIsCorrect(null)
  }

  const handlePrevTrivia = () => {
    setCurrentTrivia((prev) => (prev - 1 + triviaQuestions.length) % triviaQuestions.length)
    setSelectedAnswer(null)
    setIsCorrect(null)
  }

  const trivia = triviaQuestions[currentTrivia]
  const currentStat = stats[selectedStat]

  return (
    <div className="space-y-12">
      {/* Interactive Stats Counter */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Did You Know? 📊
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <button
              key={stat.id}
              onClick={() => setSelectedStat(index)}
              className={`p-4 rounded-xl transition-all duration-300 cursor-pointer transform ${
                selectedStat === index
                  ? 'scale-105 ring-2 ring-blue-400 shadow-lg'
                  : 'hover:scale-102 hover:shadow-md'
              } ${
                selectedStat === index
                  ? `bg-gradient-to-br ${stat.color} text-white`
                  : 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-600'
              }`}
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-sm font-semibold line-clamp-2">{stat.label}</div>
            </button>
          ))}
        </div>

        {/* Selected Stat Details */}
        <div
          className={`relative overflow-hidden rounded-xl p-8 text-white transition-all duration-500 bg-gradient-to-br ${currentStat.color} shadow-lg`}
        >
          <div className="absolute top-0 right-0 text-8xl opacity-10">{currentStat.emoji}</div>
          <div className="relative z-10">
            <div className="text-5xl md:text-6xl font-bold mb-2">{currentStat.value}</div>
            <div className="text-lg md:text-xl font-semibold mb-2">{currentStat.label}</div>
            <p className="text-white/90 text-sm md:text-base">{currentStat.description}</p>
          </div>

          {/* Progress indicators */}
          <div className="mt-6 flex gap-2">
            {stats.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-all ${
                  index === selectedStat ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Travel Trivia Quiz */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          🧠 Travel Trivia Challenge
        </h2>

        {/* Question Counter */}
        <div className="text-center mb-6">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold">
            Question {currentTrivia + 1} of {triviaQuestions.length}
          </div>
        </div>

        {/* Question */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {trivia.question}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Choose the correct answer</p>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {trivia.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`p-4 rounded-lg font-semibold transition-all duration-300 text-left ${
                selectedAnswer === null
                  ? 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 cursor-pointer text-gray-900 dark:text-white'
                  : selectedAnswer === index
                    ? isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : index === trivia.correctAnswer
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white opacity-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm">
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{answer}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Result Message */}
        {selectedAnswer !== null && (
          <div
            className={`rounded-lg p-4 mb-6 ${
              isCorrect
                ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800'
                : 'bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800'
            }`}
          >
            <div
              className={`font-semibold mb-1 ${
                isCorrect
                  ? 'text-green-700 dark:text-green-300'
                  : 'text-red-700 dark:text-red-300'
              }`}
            >
              {isCorrect ? '✓ Correct! 🎉' : '✗ Incorrect'}
            </div>
            <p
              className={`text-sm ${
                isCorrect
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {trivia.fun_fact}
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={handlePrevTrivia}
            className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {triviaQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTrivia(index)
                  setSelectedAnswer(null)
                  setIsCorrect(null)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTrivia
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNextTrivia}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Explore?</h3>
        <p className="text-blue-100 mb-6">
          Start discovering amazing destinations and put your travel knowledge to the test!
        </p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
          Browse Destinations
        </button>
      </div>
    </div>
  )
}
