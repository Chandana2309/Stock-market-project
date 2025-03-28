package com.example.stock_market.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "learning_resources")
public class LearningResource {
    @Id
    private String id;
    private String title;
    private String type; // "article", "video", "quiz"
    private String content; // Article text or YouTube link
    private List<QuizQuestion> quizQuestions; // Only for quizzes

    public LearningResource() {}

    public LearningResource(String title, String type, String content, List<QuizQuestion> quizQuestions) {
        this.title = title;
        this.type = type;
        this.content = content;
        this.quizQuestions = quizQuestions;
    }

    // Getters and Setters
    public String getId() { return id; }
    public String getTitle() { return title; }
    public String getType() { return type; }
    public String getContent() { return content; }
    public List<QuizQuestion> getQuizQuestions() { return quizQuestions; }

    public void setId(String id) { this.id = id; }
    public void setTitle(String title) { this.title = title; }
    public void setType(String type) { this.type = type; }
    public void setContent(String content) { this.content = content; }
    public void setQuizQuestions(List<QuizQuestion> quizQuestions) { this.quizQuestions = quizQuestions;}
}