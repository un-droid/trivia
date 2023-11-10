export interface QuestionType {
    body: string
    options: string[]
    correctAnsIdx: number
}

export interface ApiResponseItem {
    category: string
    id: string
    correctAnswer: string
    incorrectAnswers: string[]
    question: string
    tags: string[]
    type: string
    difficulty: string
    regions: string[]
    isNiche: boolean
}