---
title: "AI Landscape: Spring 2026"
date: "2026-04-12"
description: "A point-in-time map of the AI discourse — signal vs noise across research, reports, and announcements"
tags: [ai, landscape, research, productivity, hype-cycle]
image: "/images/blog/ai-landscape-spring-2026/cover.png"
---

New baby. One month completely offline. No newsletters, no papers, no LinkedIn discourse about how AI will replace your dentist by Q3.

Coming back was... a lot. GPT-5.4, Gemini 3.1, Grok 4.20, Mistral Small 4 — all launched within 23 days. MCP hit 97 million installs. Block fired 40% of its workforce and called it AI. OpenAI killed Sora because inference costs didn't add up. Meta announced they're building "personal superintelligence." Morgan Stanley said a breakthrough is imminent. Yale said the productivity data is too noisy to confirm anything.

Six weeks. All of that.

**Rather than just vibes-based catching up, I wanted to actually map where the signals are.** So I built a matrix: recent developments plotted by topic (productivity, models, workforce, hype cycle, infrastructure) and sentiment (bullish, measured, skeptical). Each card links to its source so you can check for yourself.

Here's the matrix, and then what I notice when I look at it all together.

::landscape-map{source="2026-04-ai-landscape"}
::

## Companies sell hype. Researchers measure reality. The gap is visible.

The most interesting thing about the matrix isn't any single card. It's where different types of content cluster.

I tagged each item by type — announcement, research, report, analysis, workforce. Look at where each type lands:

* **Announcements: 67% bullish.** GPT-5.4, Gemini 3.1, Gemma 4, Agent Framework, Muse Spark, NVIDIA robotics — eight out of twelve announcements sit in the optimistic column. Makes sense. Companies choose when and how to announce things.

* **Research: 0% bullish.** Zero. The NBER productivity paradox, the time-constraints study, Anthropic's observed exposure measure, the safety benchmarks — all measured or skeptical. Roughly 70/30 split.

* **Analysis: 50/50** between measured and skeptical. **Workforce: 100% bearish.**

That distribution gap between announcements and research is basically the hype cycle made visible in one snapshot. The people releasing products and the people measuring outcomes are living in different realities. Neither is wrong about what they're seeing. They're just not seeing the same things.

Gartner confirmed GenAI has officially entered the trough of disillusionment. Sounds bad. It's actually the healthy part — where "what might this become?" gets replaced by "what can you actually show me?" More on that in a bit.

## Everyone's firing, nobody's productive

The workforce row has the ugliest contradiction in the whole matrix.

Bullish column: Morgan Stanley says a breakthrough is imminent. NVIDIA reports 86% of companies increasing AI budgets. Meanwhile, skeptical column: 78,000 tech workers lost their jobs in Q1, nearly half attributed to AI. Block's Jack Dorsey explicitly says it's not about money, it's about AI capability. Atlassian cuts 10%. Oracle cuts 10,000.

Sounds like AI is eating the workforce, right? Except the measured column complicates this quite a bit. Oxford Economics calls it "AI washing" — companies dressing up routine headcount reductions in AI language because investors like it. The NBER survey projects about 502,000 AI-related job losses this year, which sounds scary until you do the maths: 0.4% of the total workforce. And Anthropic's research finds that real-world AI usage is still a fraction of what it could theoretically do.

That last one is key. **You can't fire people based on what AI could theoretically do and then expect the remaining team to capture those theoretical gains.** The gap between capability and actual usage is enormous, and it doesn't close by shrinking headcount. It closes through organisational redesign that takes years. Which is, incidentally, what every general-purpose technology in history has required.

HBR nailed the title: "Companies Are Laying Off Workers Because of AI's Potential, Not Its Performance." That could be the summary of the entire workforce row.

I've written more about why the productivity numbers aren't arriving in [Better Output, Not More Output](/blog/epistemic-guardrails) if you're interested in the structural argument. Short version: AI speeds up individual tasks, organisations are bottlenecked by coordination and accountability, not cognition.

## Things worth paying attention to

### "Show me the numbers"

There's a tonal shift happening. Good Strategy puts it bluntly: **the era of "what AI might do someday" is giving way to "show the numbers."** Jim Chanos, who's been shorting overhyped companies since before most tech workers were born, warns that the fraud cycle follows the financial cycle with a lag. Itential draws the parallel to early cloud adoption — "ambitious timelines, glossed-over complexity, and practitioners in the back row exchanging glances they've exchanged before."

That last image is painfully accurate. If you've been in enterprise tech for more than one cycle, this all feels very familiar. Not because AI isn't real — it is — but because the pattern of over-promising and under-delivering on timelines is.

### MCP is dead, long live MCP

Sometime ago on Reddit, MCP was already being declared dead. A2A was the new thing. MCP was yesterday's protocol, insecure, wrong architecture, etc. Standard tech discourse.

Meanwhile, in the real world: 97 million installs, every major AI provider shipping MCP-compatible tooling, and a governance foundation formed under the Linux Foundation with contributions from Anthropic, OpenAI, and Block. Three competitors contributing their agent infrastructure to a neutral body. If that's dying, most protocols would kill for that kind of death.

This is part of a broader pattern the matrix captures: there are two hype cycles running in parallel. A loud one around model releases and capabilities (GPT-5.4! Gemini 3.1! Personal superintelligence!), and a quiet one around infrastructure, measurement, and safety tooling (MCP, Agent Framework, AgentProcessBench, multi-model critique patterns). The second cycle is underhyped relative to its importance. **Models get the headlines. Plumbing determines whether any of it works in production.**

GTC 2026 reflected this. The conference was dominated by enterprise agentic *deployments*, not benchmark announcements. Fortune 500 companies talking about production systems. That's what the slope of enlightenment looks like before anyone calls it that.

### AI helps you when you're rushed. Hurts you when you're not.

A study from March found that LLM access improves performance under time pressure but can *impair* it when time is sufficient. Same tool, same model, same task — outcome flips based on when you introduce it.

This is a workflow finding, not a technology finding. And it's directly actionable: for operational tasks under deadline pressure, immediate AI access helps. For strategic analysis and judgment-heavy work where you actually have time to think, starting independently and bringing AI in later produces better results.

I've been [arguing from personal experience](/blog/whose-cognition-is-this) that spending recovered time thinking longer rather than generating more is where the value is. Now there's a preregistered study with 393 participants showing the mechanism. Nice when the data catches up with the vibes.

### Sora is dead. That matters.

OpenAI killed Sora six months after launch because inference costs were unsustainable. In a landscape of capability claims and "everything is possible" framing, one of the best-funded AI labs in the world shutting down a product because the economics didn't work is a useful reality check. Not everything that's technically impressive becomes a viable product. The gap between "look what it can do" and "look what it costs to do it" is underappreciated.

## Snapshot, not verdict

This is a point-in-time map. Some of these cards will move columns next month. Models will improve. Some bullish announcements will deliver. Others will join Sora.

What this snapshot shows is that we're in the messy middle. Technology improving fast. Productivity gains real at the task level, mostly absent at the organisational level. Layoff narrative running ahead of the evidence. Measurement infrastructure catching up. And the loudest voices still belonging to the people with the most to sell.

Not comfortable. But honest. And if the trough of disillusionment teaches anything, it's that honest assessment is what gets you to the other side.

I'll aim to update this monthly. If the pattern shifts, you'll see it. If it doesn't, that's worth knowing too.