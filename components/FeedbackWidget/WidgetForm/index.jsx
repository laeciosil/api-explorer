import { useState } from 'react';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType('');
    setFeedbackSent(false);
  }
  return (
    <div className="bg-light-primary dark:bg-dark-primary p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-md ring-1 ring-black ring-opacity-5 w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <div>
          {!feedbackType.length ? (
            <FeedbackTypeStep
              feedbackTypeChanged={setFeedbackType}
            />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </div>
      )}
    </div>
  );
}
