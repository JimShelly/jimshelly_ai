---
title: "My Week 1 Dive into Bayes’ Theorem and Vectorization"
description: "Exploring how probability, classification, and text vectorization build the foundation for AI understanding."
pubDate: 2025-05-07
author:  "Jim Shelly"
tags: ["AI", "Machine Learning", "Naive Bayes", "Vectorization", "NLP"]
image: "/images/blog/week1_1.png"
---

## 🚀 Launching My AI Learning Journey

In my first week of studying for the CAIE™ certification, I dove headfirst into two foundational AI concepts—**Bayes’ Theorem** and **Vectorization (Bag-of-Words)**. Both are essential for understanding how early AI systems classify text and make probabilistic decisions.

---

## 🔎 Bayes’ Theorem in Action

Bayes’ Theorem allows us to update our beliefs based on new information. It’s especially useful in text classification tasks like spam filtering.

**Formula Recap**:
\[
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
\]

### 📧 Example:
If the word **“free”** appears in 30% of spam emails and 5% of non-spam, and 40% of all emails are spam, what’s the probability an email is spam if it contains **“free”**?

**Answer**: 80%—meaning the word strongly signals spam!

I solved several of these by hand and truly saw how probabilities shift with evidence.

---

## 🧠 Naive Bayes Classifier

Naive Bayes builds on this concept to classify documents:

- **Naive Assumption**: Features (words) are conditionally independent.
- **Use Case**: Spam detection, sentiment analysis, topic categorization.
- **Tool**: I trained a `MultinomialNB` model in Python using `scikit-learn`.

```python
from sklearn.naive_bayes import MultinomialNB
model = MultinomialNB()
model.fit(X, labels)
