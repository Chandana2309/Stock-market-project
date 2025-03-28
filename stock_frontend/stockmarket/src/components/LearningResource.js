import React, { useState } from "react";
import "./LearningResource.css";

const LearningResource = () => {
  const [selectedTab, setSelectedTab] = useState("articles");
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const articles = [
    { id: 1, title: "Stock Market Basics", link: "https://groww.in/p/stock-market-basics" },
    { id: 2, title: "How to Invest Wisely", link: "https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp"},
    { id: 3, title: "Stock Market", link: "https://www.econlib.org/library/Enc/StockMarket.html"},
    { id: 4, title: "Introduction to Stock Market", link: "https://zerodha.com/varsity/module/introduction-to-stock-markets/"},
    { id: 5, title: "Learn About Stock Market Investments", link: "https://www.5paisa.com/stock-market-guide/stock-share-market/best-free-online-resources-to-learn-about-stock-market-investments"},
  ];

  const videos = [
    { id: 1, title: "The Stock Market", videoId: "ZCFkWDdmXG8" },
    { id: 2, title: "How Does the Stock Market Work?", videoId: "A7fZp9dwELo" },
    { id: 3, title: "Stock Market Basics for Beginners", videoId: "x0G4WtO0LCQ" },
    { id: 4, title: "Stock Market Basics", videoId: "p5ORIeMULIg" },
    { id: 5, title: "Start Trading Stocks", videoId: "i5OZQQWj5-I" }
  ];

  const quizQuestions = [
    {
      question: "What is a stock?",
      options: ["A type of bond", "Ownership in a company", "A government loan"],
      correctAnswer: "Ownership in a company"
    },
    {
      question: "What does 'bull market' mean?",
      options: ["Prices are falling", "Prices are rising", "Market is stable"],
      correctAnswer: "Prices are rising"
    },
    {
      question: "Which order type allows you to buy or sell a stock immediately at the best available price?",
      options: ["Limit order", "Market order", "Stop order"],
      correctAnswer: "Market order"
    },
    {
      question: "What term refers to the practice of buying and selling the same stock multiple times in a single trading day?",
      options: ["Swing trading", "Long-term investing", "Day trading"],
      correctAnswer: "Day trading"
    },
    {
      question: "What is the purpose of diversifying a stock portfolio?",
      options: ["To reduce risk by investing in different assets or industries", "To reduce the number of stocks in the portfolio", "To concentrate investments in a single sector for higher returns"],
      correctAnswer: "To reduce risk by investing in different assets or industries"
    },

  ];

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOption
    });
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setQuizSubmitted(true);
  };

  return (
    <div className="learning-container">
      <h1>Learning Resources</h1>

      {/* Tab Navigation */}
      <div className="tabs">
        <button onClick={() => setSelectedTab("articles")} className={selectedTab === "articles" ? "active" : ""}>
          📖 Articles
        </button>
        <button onClick={() => setSelectedTab("videos")} className={selectedTab === "videos" ? "active" : ""}>
          🎥 Videos
        </button>
        <button onClick={() => setSelectedTab("quiz")} className={selectedTab === "quiz" ? "active" : ""}>
          📝 Quiz
        </button>
      </div>

      {/* Display Content Based on Selected Tab */}
      <div className="content">
        {selectedTab === "articles" && (
          <div className="articles-section">
            {articles.map((article) => (
              <div key={article.id} className="card">
                <h3>{article.title}</h3>
                <a href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "videos" && (
          <div className="videos-section">
            {videos.map((video) => (
              <div key={video.id} className="card">
                <h3>{video.title}</h3>
                <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube
                </a>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "quiz" && (
          <div className="quiz-section">
            {quizQuestions.map((question, index) => (
              <div key={index} className="quiz-card">
                <p>{question.question}</p>
                {question.options.map((option, i) => (
                  <label key={i} className={
                    quizSubmitted
                      ? option === question.correctAnswer
                        ? "correct-answer"
                        : userAnswers[index] === option
                          ? "wrong-answer"
                          : ""
                      : ""
                  }>
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      onChange={() => handleAnswerChange(index, option)}
                      disabled={quizSubmitted}
                    /> {option}
                  </label>
                ))}
              </div>
            ))}

            {!quizSubmitted && (
              <button className="submit-btn" onClick={handleSubmitQuiz}>
                Submit Quiz
              </button>
            )}

            {quizSubmitted && (
              <div className="result">
                <h3>Your Score: {score} / {quizQuestions.length}</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningResource;