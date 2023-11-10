import { CLAP, RELIEVED, SAD, SCORE, PLAY_AGAIN, WELL_DONE, WRONG_ANSWERS } from '../../constants'
import { QuestionType } from '../../models'
import './Score.css'


interface ScorePageProps {
    questions: QuestionType[]
    selectedAnswers: number[]
    onPlayAgain: () => void
}

const Score = ({ questions, selectedAnswers, onPlayAgain }: ScorePageProps) => {
    let correctCount = 0
    const wrongAnswers: QuestionType[] = []

    questions.forEach((question: QuestionType, idx: number) => {
        if (selectedAnswers[idx] === question.correctAnsIdx) correctCount++
        else wrongAnswers.push(question)
    })

    const score = (correctCount / questions.length) * 100
    let emoji = SAD; // default

    if (score >= 80) {
        emoji = CLAP;
    } else if (score >= 50) {
        emoji = RELIEVED;
    }

    return (
        <>
            <div className='container'>
                <h1 className='score-title'> {SCORE} : {score}  {emoji}</h1>
                {wrongAnswers.length > 0 ? (
                    <div className='score-wrong-answers-container'>
                        <h4>{WRONG_ANSWERS}:</h4>
                        <ul className='score-wrong-answer-list'>
                            {wrongAnswers.map((q: QuestionType) => {
                                return <li className='score-wrong-answer-item' key={q.body}>{q.body}</li>
                            })}
                        </ul>
                    </div>
                ) : <h4>{WELL_DONE}</h4>}
                <div className='buttons-container'>
                    <button className='button score-replay-button' onClick={onPlayAgain}>{PLAY_AGAIN}</button>
                </div>
            </div>
        </>
    )
}

export default Score