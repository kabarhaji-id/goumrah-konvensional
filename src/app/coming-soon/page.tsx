'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function Page() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setMessage('Thank you for subscribing!')
    setEmail('')
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in-down">
          Goumrah.id
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-up">
          Something amazing is coming soon. Stay tuned!
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4 animate-fade-in">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              'Notify Me'
            )}
          </Button>
        </form>
        {message && (
          <p className="text-green-600 dark:text-green-400 animate-fade-in">{message}</p>
        )}
      </div>
    </main>
  )
}