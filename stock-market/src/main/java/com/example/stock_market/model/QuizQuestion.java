package com.example.stock_market.model;

import java.util.List;

public class QuizQuestion {
    private String question;
    private List<String> options;
    private String correctAnswer;

    public QuizQuestion() {}

    public QuizQuestion(String question, List<String> options, String correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    // Getters and Setters
    public String getQuestion() { return question; }
    public List<String> getOptions() { return options; }
    public String getCorrectAnswer() { return correctAnswer; }

    public void setQuestion(String question) { this.question = question; }
    public void setOptions(List<String> options) { this.options = options; }
    public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }
}