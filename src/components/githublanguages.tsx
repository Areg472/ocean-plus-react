'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LanguageData {
    [key: string]: number
}

export function GithubLanguages() {
    const [languages, setLanguages] = useState<LanguageData>({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Language color mapping
    const languageColors: { [key: string]: string } = {
        TypeScript: 'bg-blue-500',
        JavaScript: 'bg-yellow-300',
        CSS: 'bg-purple-500',
        HTML: 'bg-red-500',
    }

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/Areg472/ocean-plus-react/languages')
                if (!response.ok) {
                    throw new Error('Failed to fetch languages')
                }
                const data: LanguageData = await response.json()
                setLanguages(data)
            } catch (error) {
                console.error('Error fetching languages:', error)
                setError('Failed to fetch languages')
            } finally {
                setIsLoading(false)
            }
        }

        fetchLanguages()
    }, [])

    if (isLoading) {
        return <div className="text-center">Loading...</div>
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>
    }

    const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0)
    const languagePercentages = Object.entries(languages).map(([name, bytes]) => ({
        name,
        percentage: ((bytes / totalBytes) * 100).toFixed(1)
    }))
        .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))

    return (
        <Card className="w-[350px] md:w-[650px] lg:w-[1000px] mx-auto bg-[#0d1117] text-white mb-10">
            <CardHeader>
                <CardTitle>Languages used to develop Ocean+</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="flex w-full h-2 rounded-full overflow-hidden">
                        {languagePercentages.map(({ name, percentage }) => (
                            <div
                                key={name}
                                className={`${languageColors[name]} h-full`}
                                style={{ width: `${percentage}%` }}
                            />
                        ))}
                    </div>
                    <div className="grid gap-2">
                        {languagePercentages.map(({ name, percentage }) => (
                            <div key={name} className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${languageColors[name]}`} />
                                <span className="font-medium">{name}</span>
                                <span className="text-gray-400">{percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}