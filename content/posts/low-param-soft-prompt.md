+++
title = 'Low-Parameter Soft-Prompt Learning for Behavioral Adaptation in LLMs'
date = 2024-08-15
draft = false
tags = ['Research']
+++
### Summary 
We pre-train a set of soft-prompts and learn character personas as linear mixtures of those soft prompts. I was primarily motivated by the heavy use of synthetic data in the current literature. It seems to me like that's trying to force the dataset into a method that doesn't really work for it. I feel especially that un-finetuned LLMs subject to heavy RLHF training have very samey output, which is not very suitable for training.

This idea emerged out of a different project to generalize from text personas to soft-prompts in a zero-shot manner using generative methods. After some exploratory work, the problem seemed intractable, at least with the dataset we had. As I was training the soft-prompts, I found that on the small datasets we were using, even soft-prompts could overfit strongly and lead to poor performance, so the idea of dimension reduction came up. I proposed that we relax the problem a bit from zero-shot generalization to "few-shot" training, using a dimensionality reduction technique.

This low-rank soft prompting method allows the model to learn the specific relevant features of particular personas within that dataset. We found that freezing the embedding vectors and then fine-tuning only the mixture weights outperformed other soft-prompting methods for roleplaying.


### [Full Text](/files/low-param-soft-prompt.pdf)

### October Update and Future Work
Onf of the issues in our earlier work, mostly owing to running out of time at the end of my internship, were evals which don't totally meet my standard for rigor. I think this is a broader problem in the field, as in general assessing generation quality is quite difficult and subjective. I think LLM evaluators tend to be easily duped by generations which "tell, don't show" the traits they're looking for, but which would immediately smell off to a human evaluator.

Another issue was that we found in practice that conversations in movies often don't make that much sense when you strip the audio-visual context. In order to address this issue, as well as see how our method improves with scale, I am working on scraping a set of characters and dialogue from openly-available online fiction, such as Project Gutenberg.