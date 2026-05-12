window.PUBLICATIONS = [
  {
    "id": "icml_2026_ddim",
    "image": "images/publications/icml_2026/icml_2026_fig_escape.png",
    "title": "Why DDIM Hallucinates More than DDPM: A Theoretical Analysis of Reverse Dynamics",
    "authors": "M. H. Ashiq*, S. Arora*, <strong>A. N. Harish</strong>, I. Kharbanda, H. Y. Tseng, G. G. Chrysos",
    "venue": "ICML 2026",
    "links": [
      { "label": "pdf", "href": "https://arxiv.org/abs/2605.06831" }
    ],
    "abstract": "We theoretically study the hallucination phenomena in two canonical diffusion samplers: the stochastic Denoising Diffusion Probabilistic Model (DDPM) and the deterministic Denoising Diffusion Implicit Model (DDIM). We analyze the reverse ODE (DDIM) and SDE (DDPM) for a Gaussian mixture target, proving that after a critical time τ, (a) DDIM can become stuck on the segment connecting the two nearest modes and (b) DDPM stochasticity helps it become unstuck from this region, thus avoiding hallucination. Our empirical validation verifies that DDPM has a significantly lower hallucination rate than DDIM when this region is entered. Building on our observations, we exhibit how using additional stochastic steps can help DDIM avoid hallucinations and offer new insights on how to design improved samplers."
  },
  {
    "id": "icra_2025_spl",
    "image": "images/publications/icra_2025/icra2025.png",
    "title": "Reinforcement Learning Within the Classical Robotics Stack: A Case Study in Robot Soccer",
    "authors": "A. Labiosa, Z. Wang, S. Agarwal, W. Cong, G. Hemkumar, <strong>A. N. Harish</strong>, B. Hong, J. Kelle, C. Li, Y. Li, Z. Shao, P. Stone, J. P. Hanna",
    "venue": "ICRA 2025",
    "links": [
      { "label": "pdf", "href": "https://arxiv.org/pdf/2412.09417" }
    ],
    "abstract": "Robot decision-making in partially observable, real-time, dynamic, and multi-agent environments remains a difficult and unsolved challenge. Model-free reinforcement learning (RL) is a promising approach to learning decision making in such domains, however, end-to-end RL in complex environments is often intractable. To address this challenge in the RoboCup Standard Platform League (SPL) domain, we developed a novel architecture integrating RL within a classical robotics stack, while employing a multi-fidelity sim2real approach and decomposing behavior into learned sub-behaviors with heuristic selection. Our architecture led to victory in the 2024 RoboCup SPL Challenge Shield Division. In this work, we fully describe our system's architecture and empirically analyze key design decisions that contributed to its success. Our approach demonstrates how RL-based behaviors can be integrated into complete robot behavior architectures."
  },
  {
    "id": "rlc_2024_classification",
    "image": "images/publications/rlc_2024/rlc2024.png",
    "title": "Replacing Implicit Regression with Classification in Policy Gradient Reinforcement Learning",
    "authors": "J. P. Hanna, B. Pavse, <strong>A. N. Harish</strong>",
    "venue": "RLC 2024 (Finding the Frame Workshop)",
    "links": [
      { "label": "pdf", "href": "https://openreview.net/pdf?id=dHhkY5YAqu" }
    ],
    "abstract": "Stochastic policy gradient methods are a fundamental class of reinforcement learning algorithms. When using these algorithms for continuous control, it is common to parameterize the policy using a Gaussian distribution. In this paper, we show that the policy gradient with Gaussian policies can be viewed as the gradient of a weighted least-squares objective function. That is, policy gradient algorithms are implicitly implementing a form of regression. Several recent works have shown that reformulating regression problems as classification problems can improve learning. Inspired by these works, we investigate whether replacing this implicit regression with classification can improve the data efficiency and stability of policy learning. We introduce a novel policy gradient surrogate objective for softmax policies over a discretized action space. This surrogate objective uses a form of cross-entropy loss to replace the implicit least-squares loss found in the surrogate loss for Gaussian policies. We extend prior theoretical analysis of this loss to our policy gradient surrogate objective and provide experiments showing that this novel loss improves the data efficiency of stochastic policy gradient learning."
  },
  {
    "id": "eccv_2024_auxdistill",
    "image": "images/publications/eccv_2024/aux_distill.png",
    "title": "Reinforcement Learning via Auxiliary Task Distillation",
    "authors": "<strong>A. N. Harish</strong>, L. Heck, J. Hanna, Z. Kira, A. Szot",
    "venue": "ECCV 2024",
    "links": [
      { "label": "pdf", "href": "https://arxiv.org/abs/2406.17168" },
      { "label": "code", "href": "https://github.com/absdnd/aux_distill" }
    ],
    "abstract": "We present Reinforcement Learning via Auxiliary Task Distillation (AuxDistill), a new method that enables reinforcement learning (RL) to perform long-horizon robot control problems by distilling behaviors from auxiliary RL tasks. AuxDistill achieves this by concurrently carrying out multi-task RL with auxiliary tasks, which are easier to learn and relevant to the main task. A weighted distillation loss transfers behaviors from these auxiliary tasks to solve the main task. We demonstrate that AuxDistill can learn a pixels-to-actions policy for a challenging multi-stage embodied object rearrangement task from the environment reward without demonstrations, a learning curriculum, or pre-trained skills. AuxDistill achieves 2.3x higher success than the previous state-of-the-art baseline in the Habitat Object Rearrangement benchmark and outperforms methods that use pre-trained skills and expert demonstrations."
  },
  {
    "id": "masters_thesis_skillchain",
    "image": "images/publications/masters_thesis/rearrangement.png",
    "title": "Skill-Chaining for Long-Horizon Rearrangement",
    "authors": "<strong>A. N. Harish</strong>",
    "venue": "Master's Thesis, Georgia Institute of Technology",
    "links": [
      { "label": "pdf", "href": "https://drive.google.com/file/d/1c54ABpfoJac1jz51-NISTnC-34thE5nj/view?usp=sharing" }
    ],
    "abstract": "Given a set of pre-trained skills performing specific aspects of rearrangement, i.e. Navigating, Picking up or Placing objects, we developed a hierarchical fine-tuning scheme that can fine-tune these policies simultaneously. Our method addresses the hand-off challenge in rearrangement where subsequent skills are not aligned (i.e. the navigation skill terminates too far from the couch). Our method demonstrates superior performance (about 13% in rearrangement success) over a static policy."
  },
  {
    "id": "wacv_2022_rglnet",
    "image": "images/publications/wacv_2022/RGL_teaser.gif",
    "title": "RGL-NET: A Recurrent Graph Learning Framework for Progressive Part Assembly",
    "authors": "<strong>A. N. Harish</strong>, R. Nagar, S. Raman",
    "venue": "WACV 2022",
    "links": [
      { "label": "pdf", "href": "https://arxiv.org/abs/2107.12859" },
      { "label": "code", "href": "https://github.com/absdnd/RGL_NET_Progressive_Part_Assembly" }
    ],
    "abstract": "We propose an assembly framework that can assemble a shape in a canonical order by progressively gathering information. Compared to prior frameworks, our method achieves up to 10% improvement in part accuracy and 15% improvement in connectivity accuracy."
  }
]
;
