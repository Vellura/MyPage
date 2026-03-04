---
title: "Better Output, Not More Output"
date: "2026-03-04"
description: "Why the promised productivity gains aren't arriving, and what organisations should be optimising for instead"
tags: [ai, critical-thinking, organisations, productivity, epistemic-guardrails]
image: "/images/blog/epistemic-guardrails/cover.png"
---

There's a moment I keep hearing in meetings where I'm helping or demoing teams with AI.

I'm showcasing an agent, something genuinely capable, something that could save real hours. People are engaged, leaning in. Then I say the thing that changes the energy: *this isn't going to do the work for you. You need to think with it. Discuss, challenge, arrive at a position together.*

Sometimes you might hear crickets in the background. It goes quiet in a particular way. A few people reach for their phones. You might even hear someone say, "Oh, I thought it would just do it." The moment is a little different every time, but it's clear: **the expectation that the tool will do the work for them, and the surprise when I say it won't.**

That moment tells you almost everything about where AI adoption actually is on a larger scale and why the productivity gains management is expecting aren't arriving.

## AI speeds cognition. Enterprises are limited by coordination

Management expecting 30–50% productivity gains from AI in the next two or three years isn't looking at the wrong evidence. It's using the wrong model.

AI genuinely speeds up individual cognitive tasks. Drafting is faster. Analysis is faster. Code generation, summarising, generating options. These gains could be real. But here's the twist: **in large organisations, cognition was rarely the bottleneck.**

Economist Erik Brynjolfsson has argued for years that digital technology requires *organisational complements* to produce value, that you can't just drop a powerful tool into an existing structure and expect aggregate output to improve. The technology changes what individuals can do. Whether that propagates to organisational output depends on whether the organisation is redesigned around the new capability.

When it comes to AI, the reason is structural, not technological. Large organisations are not primarily computation networks, they are accountability networks. Every layer of coordination exists because someone needs to be responsible when things go wrong. The proposal that used to take two days to draft now takes two hours. But it still spends three weeks in review, approval, and stakeholder alignment, because those steps aren't about information flow. They're about risk distribution and sign-off. AI didn't change that, and more capable AI won't automatically change it either.

[Faros AI](https://www.faros.ai/blog/ai-software-engineering#ai-coding-assistants-increase-developer-output-but-not-company-productivity) tracked over 10,000 developers across more than 1,200 teams. AI adoption produced 98% more pull requests, and 91% more review time. The code arrived faster. The accountability layer didn't move. [Workday](https://investor.workday.com/news-and-events/press-releases/news-details/2026/New-Workday-Research-Companies-Are-Leaving-AI-Gains-on-the-Table/default.aspx) found that roughly 40% of time savings were lost to rework downstream. **The pattern is consistent: AI accelerates the parts of work that don't require someone to stake their name on the outcome. The parts that do are still slow.**

This also explains why smaller, less complex organisations may capture AI value faster than large enterprises. Fewer coordination layers means cognitive improvements actually propagate to output. The technology is identical. The organisational structure determines whether it matters. One could also argue smaller companies just absorb associated risks faster: when you don't have compliance teams and legal departments reminding you of the potential for things to go wrong, and what might happen if they do...

It should be reiterated: The 50% productivity gain in a few years has no historical precedent because it has never happened with any general-purpose technology. Computers didn't produce measurable GDP uplift for fifteen years after widespread adoption. What happens instead is gradual restructuring, organisations slowly redesign around the new capability, and the gains accumulate over years, not quarters. The expectation isn't wrong because AI is disappointing. It's wrong because that's not how transformative technology works.

## The goal isn't more output. It's better output

So if the productivity number isn't coming on schedule, what is AI actually delivering and what *should* organisations be optimising for?

**The honest short-term answer is: *better output, not more output.***

Here's the practical logic. If AI makes generation fast, the draft, the analysis, the first version of the code, then the time that used to go into producing that draft is now available. The question is what you spend it on.

Most organisations are spending it on producing more drafts. More options, more proposals, more output at the same quality as before, just faster. That's the self-automator pattern, and it's why the productivity statistics are flat: volume increased, but the coordination overhead increased with it, and the quality didn't improve enough to justify the additional review burden.

**The alternative is to spend the recovered time on *thinking longer*. Arriving at a more considered position. Testing the idea more carefully. Exploring the objection you'd normally skip because you didn't have time. Bringing more nuance to the conclusion.**

Done this way, the end result is simultaneously faster than pure human work and more considered than what you'd have produced under time pressure alone. That's not a compromise between short-term speed and long-term quality. It's the model that serves both: better output now, and as organisations gradually redesign their processes around this way of working, speed improvements follow as a second-order effect, because high-quality work moves through coordination layers with less friction, fewer revision cycles, fewer alignment failures and so on.

This reframes how management should approach AI integration. Stop chasing the productivity number that history says won't arrive on schedule. Start measuring quality rather than quantity: decision quality, not decision speed; work that needs fewer revision cycles; analysis that holds up under scrutiny. These are achievable now. They also build the foundation for the speed gains that come later, when the organisation has genuinely restructured around what AI makes possible.

## But something else is shifting, and it's harder to see

There's a second dimension to this that no productivity report currently captures, and that I think matters more in the long run.

[When I wrote about this from the individual angle before](/blog/whose-cognition-is-this), the concern was about what AI does to a single person's thinking over time, the way outsourcing reasoning, not just memory, quietly changes what you're capable of. The organisational version of that concern is this: **as AI handles more of the generation, the quality of human judgment doing the evaluation becomes the only thing that distinguishes good outcomes from plausible-looking bad ones.**

[An Anthropic randomised trial](https://arxiv.org/abs/2601.20245) found that developers using AI assistance scored 17% lower on mastery tests for a new technical library, with the largest gap on debugging, the skill that requires understanding *why* something fails, not just what it produced. [An MIT Media Lab study](https://arxiv.org/abs/2506.08872) found that 83% of people who wrote with AI assistance couldn't recall a key passage from what they'd just written. They produced without internalising.

Scale this across a team, and you get a quiet problem: people reviewing AI output without the depth of understanding that makes review meaningful. The sign-off happens. The approval is genuine. The expertise that would have caught the flaw isn't there, because it wasn't built during the generation phase where it would normally accumulate. It's possible that over time people develop an intuition for spotting reasoning that doesn't hold together, a nose for outputs that *sound* right but aren't, but that still doesn't close the substance knowledge gap. You can sense something is off without knowing what's wrong or why, and in business domains, that's not enough.

This leads to what I mean by the *epistemic* side of AI adoption, epistemic meaning concerned with the quality of knowledge and judgment, not just the volume of output. The economic side has dashboards and KPIs. The epistemic side is invisible until it compounds into something that isn't.

The good news is that none of this is inevitable. It's conditional on *how* AI is integrated, not on the fact of using it at all. **The Anthropic study showed that developers who generated code with AI and then worked to understand it retained knowledge nearly as well as those who hadn't used AI.** The generation was still fast. The understanding was preserved. The difference was entirely in what happened during and after generation, basically whether the human stayed in genuine cognitive contact with the work.

Which brings us to the most practical question: how do you design for that?

## What philosophy got right before AI existed

Here's what I find fascinating currently. The question of how to think well under conditions that make shallow thinking easy is not new. Philosophy has been working on it for two and a half millennia, and it turns out to be remarkably practical for the current moment because it answers the question: **how do you think well when the temptation to think shallowly is strong and fast and rewarded? That's not a new question. It's one of the oldest ones.**

Let me illustrate with a few examples:

**The Socratic method.** Arriving at understanding through structured questioning rather than accepting the first plausible answer. Not debate for its own sake, but disciplined interrogation of what you think you know, surfacing assumptions, testing for contradiction, seeking the strongest version of the opposing view.

- In practice, this is an interaction design principle for AI conversations. A developer asks AI to generate an API design and accepts it. A better developer asks: *What trade-offs did this design make? What would break at ten times the current load? What's the argument for the approach you didn't choose?* The AI is genuinely useful for this, it can steelman alternatives, surface edge cases, and stress-test designs when asked to. The design question is whether your workflow asks for it.

**Simone Weil on attention.** Weil described attention not as passive reception but as active, patient waiting, the practice of staying with a question long enough for it to reveal what it actually is, rather than reaching for the nearest satisfying answer. Real attention resists the urge to resolve uncertainty prematurely.

- In practice, this describes the central temptation AI creates: to close questions faster. A failing test, an ambiguous requirement, a strange production metric, these are moments where sitting with the uncertainty is more valuable than resolving it immediately. The AI makes it easy to converge on a fix in seconds. The discipline Weil describes is keeping the question open longer, using the AI to explore *why* the test is failing, what the requirement is actually asking, what the metric might be telling you, rather than generating the first plausible patch and moving on. The difference between a good AI interaction and a shallow one is often just whether someone sat with the output for another five minutes.

**Aristotle's phronesis.** Practical wisdom, the capacity for sound judgment in particular situations. Phronesis is situated, contextual, developed through experience and reflection. It's not the application of rules; it's knowing which considerations matter in *this* specific case, with *these* specific people, in *this* specific moment. AI can assist reasoning, but it does not share the lived history, tacit assumptions, and responsibility that shape this kind of judgment. It can approximate parts of it, but it cannot fully stand in for it.

- In practice, phronesis is the judgment that says *the risk isn't in the happy path, it's in how this interacts with the payment flow we refactored six weeks ago, because I remember the assumptions we made then.* No prompt template captures that. If you build narrow, template-driven AI workflows, paste the acceptance criteria --> receive test cases, you get speed, but you also build a process that stops asking the human to reason about where the risk actually lives. Phronesis atrophies because the workflow never calls for it. The alternative is to leave room for the human to steer: to bring context, history, and worry to the conversation, and let the AI explore *around* that judgment rather than replace it.

**Dialectical reasoning.** Understanding emerges by forcing an idea to confront its strongest alternative. A position that survives genuine opposition is usually stronger than the one you began with.

- In practice, this means never shipping an AI-generated architectural decision until you've genuinely engaged with its opposite. Your AI recommends a microservices split. Before you commit, ask it to argue for keeping the monolith, with the same rigour, using your actual constraints. Then work out what survives. The same applies to test strategies, migration plans, any decision with real downstream cost. The result is slower than accepting the first output. It's also more defensible, which matters when the decision is load-bearing and the person who made it needs to explain why six months later.

These aren't decorative references. They're functional frameworks for what good thinking with AI looks like, and they're more useful than most AI-specific productivity advice currently circulating, because they were designed for the exact problem we're now facing: how to think well when the temptation to think shallowly is strong and fast and rewarded.


## What this means for organisations, and for integrators

AI lowers the cost of producing answers. It does not lower the cost of judging them.

When generation becomes cheap, evaluation becomes the scarce resource. That's not a problem to solve, it's a shift to design around. Epistemic guardrails are the design response: structures built into how AI is used that keep the judgment layer sharp rather than letting it quietly transfer to the tool.

But here's the difficulty. The people most likely to engage deeply with AI, to interrogate its outputs, to sit with uncertainty, to bring contextual judgment to the conversation, are people who already had strong habits of careful thinking. They don't need the guardrails; they'd have been thoughtful without them. The people who most need the structure are least likely to install them voluntarily, because what brought them to AI was the promise of less effort, not more.

**This means the integrator's job isn't just modelling good practice. It's designing workflows where good practice is what the process naturally produces, where the questioning, the attention, the situated judgment are built into the interaction rather than bolted on afterward as an extra step people skip.** The difference between a workflow that exercises thinking and one that bypasses it is often a single design choice: does the human bring context to the AI, or just receive output from it?

These aren't technically complicated changes. They're choices about what the AI interaction is *for*, whether it exists to remove cognitive work or to make cognitive work more productive. The philosophy provides the design principles. The workflow is where they land.

The short-term productivity gains are real at the task level. The organisational gains will come, but gradually, as structure catches up with capability, the same pattern that has followed every transformative technology. What's available now, and what integrators can make the case for today, is better output: more considered, more robust, more defensible, because the people producing it spent the recovered time thinking rather than generating.

That's a harder sell than "50% productivity gains by next year." It's also the one that's true.

---

*This is the second in a series on AI and cognition. The first, [Whose Cognition Is This?](/blog/whose-cognition-is-this), explored what heavy AI use does to individual thinking.*