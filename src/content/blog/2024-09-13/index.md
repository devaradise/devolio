---
title: 'Create a Simple ChatBot with Mesop + Ollama less than 25 lines of code'
seoTitle: 'Building a Simple Chatbot Using Mesop and Ollama in Under 25 Lines of Code'
slug: 'simple-chatbot-mesop-ollama-tutorial'
description: 'Learn how to create a lightweight chatbot using Mesop and Ollama in less than 25 lines of Python code. This tutorial simplifies building intelligent chatbots quickly and efficiently.'
pubDate: '2024-09-13'
updatedDate: '2024-09-13'
tags: ['Python', 'Mesop', 'Ollama']
---

In this post, I will show you how to create a simple chatbot with Mesop and Ollama.

## What is Mesop?

https://google.github.io/mesop/
Quickly build web UIs in Python
Used at Google for rapid internal app development

Mesop is like Gradio or Streamlit.

## Step0 Install Ollama

You can download Ollama from the following link.
https://ollama.com/download

## Step1 Install dependencies

```shell
pip install mesop ollama
```

## Step2 Write a chatbot

`app.py`

```python
import ollama
import mesop as me
import mesop.labs as mel

@me.page(
    path="/",
    title="Mesop ChatBot",
)
def page():
    mel.chat(transform, title="Ollama ChatBot with Mesop", bot_user="Mesop Bot")

def transform(input: str, history: list[mel.ChatMessage]):
    messages = [{"role": "user", "content": message.content} for message in history]
    messages.append({"role": "user", "content": input})

    stream = ollama.chat(model='llama3', messages=messages, stream=True)

    for chunk in stream:
        content = chunk.get('message', {}).get('content', '')
        if content:
            yield content
```

## Step3 Run Chatbot

```shell
mesop app.py
```

![chatbot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xzyfbtvt8ajebqxy3kry.png)
