import { useEffect, useState } from 'react';
// import css from './App.module.scss';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';

function App() {
    const [feedbackCount, setfeedbackCount] = useState(() => {
        const localFeedback = JSON.parse(
            window.localStorage.getItem('feedback')
        );
        if (localFeedback !== null) {
            return localFeedback;
        }
        return { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        window.localStorage.setItem('feedback', JSON.stringify(feedbackCount));
    }, [feedbackCount]);

    function updateFeedback(feedback, reset) {
        if (reset === true) {
            setfeedbackCount({ good: 0, neutral: 0, bad: 0 });
        } else {
            setfeedbackCount(currentFeedback => {
                return {
                    ...currentFeedback,
                    [feedback]: currentFeedback[feedback] + 1,
                };
            });
        }
    }

    const totalFeedback = good + neutral + bad;

    return (
        <>
            <Description />
            <Options
                handleClick={updateFeedback}
                totalFeedback={totalFeedback}
            />
            <Feedback feedbacks={feedbackCount} totalFeedback={totalFeedback} />
        </>
    );
}

export default App;
