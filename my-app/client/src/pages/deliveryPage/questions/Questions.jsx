import questionsData from './data';
import { useState } from 'react';
import styles from './Questions.module.scss';
import caretDown from '../../../assets/icons/icon_caret_down.svg';

const Questions = () => {
  const [answerOpen, setAnswerOpen] = useState(null);

  function handleAnswerOpen(index) {
    setAnswerOpen(answerOpen === index ? null : index);
  }

  return (
    <div className={styles.questions}>
      <div className={styles.questionTitle}>
        <h2>Questions & Answers</h2>
      </div>
      <div className={styles.questionsBlocks}>
        {questionsData.map((item, index) => (
          <div key={index} className={styles.questionBlock}>
            <div className={styles.question}>{item.question}</div>
            <button
              onClick={() => handleAnswerOpen(index)}
              className={styles.button}
              type="button"
            >
              <img
                src={caretDown}
                alt="open"
                className={answerOpen === index ? styles.iconOpen : ''}
              />
            </button>

            <div
              className={
                answerOpen === index
                  ? `${styles.answer} ${styles.answerOpen}`
                  : styles.answer
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Questions;
