+++
title = "Evaluating the Claims of \"SAT Requires Exhaustive Search\""
date = 2024-04-05
draft = true
categories = ['Research']
+++
## Summary 

We critique the claims of Xu and Zhou in their paper "SAT Requires Exhaustive Search", which claims to provide a lower bound on the complexity of the so-called Model RB. Xu and Zhou conclude that their result implies a separation between P and NP, since the lower bound purportedly proves that the Strong Exponential Time Hypothesis (SETH) is true. In examining Xu and Zhou's arguments, we find a flaw in their main theorems. The authors assume that an algorithm for Model RB must have a certain structure that can leverage downward self-reducibility, and argue that such an algorithm cannot run in polynomial time. We argue that this structure is not guaranteed to exist and thus their paper neither proves SETH to be true nor proves P ≠ NP.

### [https://arxiv.org/abs/2312.02071](https://arxiv.org/abs/2312.02071)