import { QuestionType } from '../../models';
import './Question.css'

interface QuestionProps {
    question: QuestionType;
    selectedAnswerIndex: number | null;
    onAnswerSelect: (index: number) => void;
    questionIndex: number
}

const Question = ({ question, selectedAnswerIndex, onAnswerSelect, questionIndex }: QuestionProps) => {
    const handleChange = (index: number) => {
        return () => {
            onAnswerSelect(index);
        }
    }

    if (!question) return

    return (<div className='question-card'>
        <h2 className='question-title'>Question #{questionIndex + 1} - {question.body}</h2>
        <form className='question-form'>
            {question.options.map((answer, index) => (
                <div key={index} className='question-radio-option'>
                    <label className='qustion-radio-label'>
                        <input
                            type="radio"
                            name={`question_${questionIndex}`}
                            value={index}
                            checked={selectedAnswerIndex === index}
                            onChange={handleChange(index)}
                        />
                        {answer}
                    </label>
                </div>
            ))}
        </form>
    </div>)
}

export default Question