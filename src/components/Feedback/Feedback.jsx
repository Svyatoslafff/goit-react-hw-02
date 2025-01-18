// import css from './Feedback.module.scss';

export default function Feedback({
    feedbacks: { good, neutral, bad },
    totalFeedback,
    positiveFeedback,
}) {
    return (
        <div>
            {totalFeedback !== 0 ? (
                <ul>
                    <li>
                        <p>Good: {good}</p>
                    </li>
                    <li>
                        <p>Neutral: {neutral}</p>
                    </li>
                    <li>
                        <p>Bad: {bad}</p>
                    </li>
                    <li>
                        <p>Total: {totalFeedback}</p>
                    </li>
                    <li>
                        <p>Positive: {positiveFeedback}%</p>
                    </li>
                </ul>
            ) : (
                <p>No feedback yet</p>
            )}
        </div>
    );
}
