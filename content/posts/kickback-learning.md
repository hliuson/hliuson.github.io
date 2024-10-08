+++
title = "Revisiting Kickback: Learning without Backpropagation"
date = 2022-05-01
draft = false
tags = ['Research']
+++
## Summary 

I worked under the supervision of Professor Chris Kanan and PhD Student Jhair Gallardo to investigate the potential of the [Kickback](https://arxiv.org/abs/1411.6191) algorithm for pretraining neural networks. Kickback is a bit of an odd method, as it approximates normal backpropagation and gradient descent. The update rule can be factorized into a Hebbian (local) update rule, multiplied by an "influence" term calcualated using the next layer's weights and activations. 

We tried a few methods to improve Kickback. One of the immediate concerns was that the "coherence" criterion of Kickback networks caused extreme numerical instability as the number of layers increased. This is foundational to the method, where large positive or negative activations amplify and cause exploding final values. We tried normalizing the activations, which while in theory might violate the coherence criterion, in practice seemed like a fairly minor violation of it. Additionally, the related to the coherence criterion was a requirement that the model only be optimized with respect to a single scalar output. However, no intervention we made seemed to be unequivocally successful, aside from using AdamW instead of SGD.

Due to lack of success with minor tweaks to the method, I pursued the resemblance to Hebbian learning algorithms, and hoped to reformulate Kickback through that perspective rather than through the framework of approximating backpropagation. This side-project ultimately didn't yield any major insights into Kickback. However I did discover what I believed to be a major error with how we quantify the success of Hebbian learning, where applying it to toy problems like MNIST often results paradoxically in results which favor algorithms which *don't* learn Hebbian features and instead preserve random projections. You can read it [here](/files/hebbian-inequality.pdf).