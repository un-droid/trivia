import { QuestionType } from '../../models'
import Question from '../Question'
import TriviaQuestions from '../../assets/questions'

import { useState } from 'react'
import Score from '../Score'

import './Quiz.css'
import { ERROR_LOADING, LOADING_QUESTIONS, NEXT_QUESTION, PREV_QUESTION, RANDOM, SELECT_TOPIC, SUBMIT } from '../../constants';
import useFetchQuestions from '../../hooks/useFetchQuestions'

const Quiz = () => {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
    const [currentQuestions, setCurrentQuestions] = useState<QuestionType[]>([])
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
    const [selectedAns, setSelectedAns] = useState<number[]>([])
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { get, error } = useFetchQuestions()

    const handleTopicSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const topic = e.target.value;

        if (topic === RANDOM) {
            setLoading(true)
            const randomQuestions = await get()
            setSelectedTopic(topic)
            setCurrentQuestions(randomQuestions)
            setLoading(false)
        } else {
            setSelectedTopic(topic)
            setCurrentQuestions(TriviaQuestions[topic])
        }
        setCurrentQuestionIdx(0);
        setSelectedAns([]);
    }

    const handleAnsSelected = (selectedIdx: number) => {
        setSelectedAns((prevSelectedAns) => {
            const updatedAns = [...prevSelectedAns];
            updatedAns[currentQuestionIdx] = selectedIdx;
            return updatedAns;
        });
    }

    const nextQuestion = () => {
        // as long as not in the end, procceed to next question
        if (currentQuestionIdx < currentQuestions.length - 1) {
            setCurrentQuestionIdx(prevIndex => prevIndex + 1)
        } else {
            // at the end. set quiz complete to true to present the score page
            setQuizCompleted(true)
        }
    }

    const prevQuestion = () => {
        // as long as the idx is greater than 0, go back
        if (currentQuestionIdx > 0) {
            setCurrentQuestionIdx(prevIndex => prevIndex - 1)
        }
    }

    const generateTopicTitle = (topic: string) => {
        return topic.charAt(0).toUpperCase() + topic.slice(1).replace(/_/g, ' ')
    }

    const handlePlayAgain = () => {
        // reset the quiz state to start over
        setSelectedTopic('')
        setCurrentQuestions([])
        setCurrentQuestionIdx(0)
        setSelectedAns([])
        setQuizCompleted(false)
    }

    if (loading) {
        return <div className='container'><h1>{LOADING_QUESTIONS }</h1></div>
    }

    if (error) {
        return <div className='container'>{ERROR_LOADING }: {error.message}</div>
    }

    if (!selectedTopic) {
        return (
            <div className='container quiz-select-topic-container'>
                <h2>Select topic</h2>
                <select onChange={handleTopicSelect} value={selectedTopic || ''}>
                    <option value="">{SELECT_TOPIC}</option>
                    <option value={RANDOM}>{RANDOM}</option>
                    {Object.keys(TriviaQuestions).map(topic => {
                        return <option value={topic} key={topic}>
                            {generateTopicTitle(topic)}
                        </option>
                    })}
                </select>
            </div>
        )
    } else if (quizCompleted) {
        return <Score questions={currentQuestions}
            selectedAnswers={selectedAns}
            onPlayAgain={handlePlayAgain} />
    } else {
        return (
            <div className='container'>
                <Question
                    question={currentQuestions[currentQuestionIdx]}
                    selectedAnswerIndex={selectedAns[currentQuestionIdx]}
                    onAnswerSelect={handleAnsSelected}
                    questionIndex={currentQuestionIdx}
                />

                <div className='buttons-container'>
                    <button className='button quiz-button-next' onClick={prevQuestion}
                        disabled={currentQuestionIdx === 0}
                    >
                        {PREV_QUESTION}
                    </button>
                    <button className='button quiz-button-prev' onClick={nextQuestion}>
                        {currentQuestionIdx < currentQuestions.length - 1 ? NEXT_QUESTION : SUBMIT}
                    </button>
                </div>
            </div>
        )
    }
}

export default Quiz