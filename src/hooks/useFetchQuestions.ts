import { useState } from 'react';
import { ApiResponseItem, QuestionType } from '../models';

const URL = 'https://the-trivia-api.com/api/questions?limit=5'

const transformApiResponseToQuestions = (apiResponse: ApiResponseItem[]): QuestionType[] => {
    return apiResponse.map((questionObj) => {
        const options = [questionObj.correctAnswer, ...questionObj.incorrectAnswers];
        // shuffle options array to randomize the order of answers
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        const correctAnsIdx = options.indexOf(questionObj.correctAnswer);

        return {
            body: questionObj.question,
            options: options,
            correctAnsIdx: correctAnsIdx,
        };
    });
}

const useFetchQuestions = () => {
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [error, setError] = useState<Error | null>(null)

    const get = async (): Promise<QuestionType[]> => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            const parsedQuestions = transformApiResponseToQuestions(data)
            setQuestions(parsedQuestions)
            return parsedQuestions
        } catch (error) {
            setError(error as Error)
            throw error
        }
    }

    return { get, questions, error }
}

export default useFetchQuestions