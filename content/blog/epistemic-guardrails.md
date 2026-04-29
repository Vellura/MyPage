---
title: "Better Output, Not More Output"
date: "2026-03-04"
description: "Why the promised productivity gains aren't arriving, and what organisations should be optimising for instead"
tags: [ai, critical-thinking, organisations, productivity, epistemic-guardrails]
image: "/images/blog/epistemic-guardrails/cover.png"
---

There's a moment I keep running into in demos.

I'm showing an agent do something genuinely useful, saving real hours on a real task. People are engaged, leaning in. Then I say the thing that changes the energy: *this isn't going to do the work for you. You need to think with it.*

It goes quiet in a particular way. A few people reach for their phones. Someone usually says, "Oh, I thought it would just do it." That moment, and the surprise in it, tells you almost everything about where AI adoption actually is and why the productivity gains management is expecting aren't arriving.

## AI speeds cognition. Enterprises are limited by coordination

Management expecting 30–50% productivity gains from AI in the next two or three years isn't looking at the wrong evidence. It's using the wrong model.

AI does speed up individual cognitive tasks. Drafting, analysis, code generation. The gains are real. But in large organisations, cognition was rarely the bottleneck.

Economist Erik Brynjolfsson has argued for years that digital technology requires *organisational complements* to produce value. You can't drop a powerful tool into an existing structure and expect aggregate output to improve. The technology changes what individuals can do. Whether that propagates to organisational output depends on whether the organisation is redesigned around the new capability.

The reason, when it comes to AI, is structural rather than technological. Large organisations are not primarily computation networks. They're accountability networks. Every layer of coordination exists because someone needs to be responsible when things go wrong. The proposal that used to take two days now takes two hours to draft. But it still spends three weeks in review, approval, and stakeholder alignment, because those steps aren't about information flow. They're about risk distribution and sign-off. AI didn't change that, and more capable AI won't automatically change it either.

[Faros AI](https://www.faros.ai/blog/ai-software-engineering#ai-coding-assistants-increase-developer-output-but-not-company-productivity) tracked over 10,000 developers across more than 1,200 teams. AI adoption produced 98% more pull requests and 91% more review time. The code arrived faster. The accountability layer didn't move. [Workday](https://investor.workday.com/news-and-events/press-releases/news-details/2026/New-Workday-Research-Companies-Are-Leaving-AI-Gains-on-the-Table/default.aspx) found that roughly 40% of time savings were lost to rework downstream. The pattern holds: AI accelerates the parts of work that don't require someone to stake their name on the outcome. The parts that do are still slow.

This also explains why smaller organisations may capture AI value faster. Fewer coordination layers means cognitive improvements actually reach output. The technology is identical. The structure around it determines whether it matters. Smaller companies also tend to absorb risk faster. Without compliance teams and legal departments rehearsing every possible failure mode, decisions actually move.

The 50% productivity gain in a few years has no historical precedent because it has never happened with any general-purpose technology. Computers didn't produce measurable GDP uplift for fifteen years after widespread adoption. What happens instead is gradual restructuring. Gains accumulate over years, not quarters. The expectation isn't wrong because AI is disappointing. It's wrong because that's not how transformative technology works.

## The goal is better output

So if the productivity number isn't coming on schedule, what is AI actually delivering?

Better output. Not more of it.

When AI speeds up generation, time is freed up. The question is what you spend it on.

Most organisations are spending it on producing more output at the same quality as before, just faster. That's the self-automator pattern, and it's why the productivity statistics are flat: volume increased, coordination overhead increased with it, and quality didn't improve enough to justify the additional review burden.

The alternative is to spend the recovered time thinking longer. Getting to a more considered position. Testing the idea more rigorously. Exploring the objection you'd normally skip because you didn't have time. Done that way, the end result is simultaneously faster than pure human work and more considered than what you'd have produced under time pressure. That's not a trade-off. You get both.

As organisations gradually redesign their processes around this way of working, speed improvements follow as a second-order effect. High-quality work moves through coordination layers with less friction and fewer revision cycles. But the gains available right now don't require structural redesign. They're about decision quality: work that holds up under scrutiny, analysis that doesn't need to be redone two months later. These are achievable now, and they build the foundation for speed gains that come later.

This reframes how management should approach AI integration. Stop chasing the productivity number that history says won't arrive on schedule. Measure decision quality instead. Measure work that needs fewer revision cycles. Both are available now, and both are real.

## But something else is shifting, and it's harder to see

There's a second dimension to this that no productivity report currently captures, and I think it matters more in the long run.

[When I wrote about this from the individual angle before](/blog/whose-cognition-is-this), the concern was about what AI does to a single person's thinking over time. Outsourcing reasoning, not just memory, quietly changes what you're capable of. The organisational version of that concern: as AI handles more of the generation, the quality of human judgment doing the evaluation becomes the thing that distinguishes good outcomes from plausible-looking bad ones.

[An Anthropic randomised trial](https://arxiv.org/abs/2601.20245) found that developers using AI assistance scored 17% lower on mastery tests for a new technical library, with the largest gap on debugging—understanding *why* something fails, not just what it produced. [An MIT Media Lab study](https://arxiv.org/abs/2506.08872) found that 83% of people who wrote with AI assistance couldn't recall a key passage from what they'd just written. They produced the thing. They didn't absorb it.

Scale that across a team and you get a quiet problem: people reviewing AI output without the depth of understanding that makes review meaningful. The sign-off happens. The approval is genuine. The expertise that would have caught the flaw isn't there, because it wasn't built during the generation phase where it would normally accumulate. Over time, people may develop a nose for outputs that *sound* right but aren't. But that doesn't close the knowledge gap. You can sense something is off without knowing what's wrong or why, and in most business contexts that's not enough.

This is what I mean by the *epistemic* side of AI adoption: the quality of knowledge and judgment, not just output volume. The economic side has dashboards. The epistemic side is invisible until it compounds into something that isn't.

None of this is inevitable. It depends on *how* AI is integrated. The Anthropic study showed that developers who generated code with AI and then worked to understand it retained knowledge nearly as well as those who hadn't used AI at all. The generation was still fast. The understanding was preserved. The difference was entirely in what happened after: whether the human stayed in genuine cognitive contact with the work.

## What philosophy got right before AI existed

The question of how to think carefully under conditions that make shallow thinking easy isn't new. Philosophy has been working on it for two and a half millennia, which turns out to be remarkably practical right now. The conditions aren't novel. How do you think well when fast and shallow is rewarded? That's one of the oldest questions.

A few frameworks that are more useful here than most AI productivity advice currently circulating:

The Socratic method is the practice of arriving at understanding through structured questioning rather than accepting the first plausible answer. Not debate for its own sake, but disciplined interrogation of what you think you know: surfacing assumptions, testing for contradiction, seeking the strongest version of the opposing view.

As an interaction design principle for AI conversations, this is fairly concrete. A developer asks AI to generate an API design and accepts it. A better developer asks: *What trade-offs did this design make? What would break at ten times the current load? What's the argument for the approach you didn't choose?* The AI is genuinely useful for this kind of questioning. It can steelman alternatives and stress-test designs when asked to. The design question is whether your workflow asks for it.

Simone Weil described attention as active, patient waiting—staying with a question long enough for it to reveal what it actually is, rather than reaching for the nearest satisfying answer. Real attention resists premature closure.

This describes the central temptation AI creates. A failing test or an ambiguous requirement: these are moments where sitting with the uncertainty is more valuable than resolving it quickly. The AI makes it easy to converge on a fix in seconds. The discipline Weil describes is keeping the question open a bit longer—using the AI to explore *why* the test is failing, rather than generating the first plausible patch and moving on. The difference between a good AI interaction and a shallow one is often just whether someone sat with the output for another five minutes.

Aristotle's concept of *phronesis* is practical wisdom: the capacity for sound judgment in particular situations, developed through experience and reflection. Not the application of rules, but knowing which considerations matter in *this* specific case, with *these* specific people, at *this* specific moment. AI can assist reasoning. It doesn't share the lived history, tacit assumptions, and responsibility that shape this kind of judgment.

Phronesis is the judgment that says *the risk isn't in the happy path, it's in how this interacts with the payment flow we refactored six weeks ago, because I remember the assumptions we made then.* No prompt template captures that. If you build narrow, template-driven AI workflows—paste the acceptance criteria, receive test cases—you get speed. But you also build a process that stops asking the human to reason about where the risk actually lives. Phronesis atrophies because the workflow never calls for it. The alternative is to leave room for the human to steer: to bring context, history, and judgement to the conversation, and let the AI explore around that rather than replace it.

Dialectical reasoning tests an idea against its strongest alternative. A position that survives genuine opposition is usually stronger than the one you started with.

This means never shipping an AI-generated architectural decision until you've genuinely engaged with its opposite. Your AI recommends a microservices split. Before you commit, ask it to argue for keeping the monolith, with the same rigour, using your actual constraints. Then work out what survives. The same applies to test strategies, migration plans, any decision with real downstream cost. The result is slower than accepting the first output. It's also more defensible, which matters when the decision is load-bearing and the person who made it needs to explain why six months later.

These aren't just historical footnotes. They're functional frameworks for what good thinking with AI looks like, and they predate AI by two millennia because the underlying problem—thinking carefully when not thinking carefully is the path of least resistance—is the same.

## What this means for organisations, and for integrators

AI lowers the cost of producing answers. It does not lower the cost of judging them.

When generation becomes cheap, evaluation becomes the scarce resource. That's not a problem to solve. It's a shift to design around. Epistemic guardrails are the design response: structures built into how AI is used that keep the judgment layer sharp rather than letting it quietly transfer to the tool.

The difficulty is this. The people most likely to engage deeply with AI, to interrogate its outputs, sit with uncertainty, bring contextual judgment to the conversation, are people who already had strong habits of careful thinking. They don't need the guardrails. The people who most need the structure are least likely to install it voluntarily, because what brought them to AI was the promise of less effort, not more.

The integrator's job isn't just modelling good practice. It's designing workflows where good practice is what the process naturally produces, where the questioning, the attention, the situated judgment are built into the interaction rather than bolted on afterward as steps people skip. The difference between a workflow that exercises thinking and one that bypasses it is often a single design choice: does the human bring context to the AI, or just receive output from it?

These aren't technically complicated changes. They're choices about what the AI interaction is *for*: whether it exists to remove cognitive work or to make cognitive work more productive. The philosophy provides the design principles. The workflow is where they land.

The short-term productivity gains are real at the task level. The organisational gains will come, but gradually, as structure catches up with capability, the same pattern that followed every transformative technology. What's available now is better output: more considered and more defensible, produced by people who spent the recovered time actually thinking rather than generating.

That's a harder sell than "50% productivity gains by next year." It's also the one that's true.

---

*This is the second in a series on AI and cognition. The first, [Whose Cognition Is This?](/blog/whose-cognition-is-this), explored what heavy AI use does to individual thinking.*
