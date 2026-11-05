---
title: "Example post"
date: 2026-11-05
description: "A template showing what posts support. Delete me."
draft: true
---

Posts are plain Markdown. Set `draft: false` to publish.

Inline math like $\mathbb{E}_{\pi}[R]$ works, and so do display equations:

$$
J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}\left[\sum_t \gamma^t r_t\right]
$$

Code blocks get syntax highlighting:

```python
def grpo_advantage(rewards):
    return (rewards - rewards.mean()) / (rewards.std() + 1e-8)
```

> Blockquotes and footnotes[^1] work too.

[^1]: Like this one.
