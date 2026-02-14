---
title: "Why Your Innovations Die Before They're Born"
date: "2026-02-11"
description: "AI collapsed the cost of building things. The cost of getting permission didn't change. What the research says about why that gap is so destructive."
tags: [innovation, organizations, AI]
image: "/images/blog/why-your-innovations-die-before-they-are-born/cover.png"
---

A friend of mine, a senior developer, was frustrated. The requirements and technical instructions for their project were scattered across different systems, instructions in one place, specifications in another, some of it vague. They thought a simple chat-based knowledge base could help. They had the idea in the morning. By lunch, they'd built it with AI and launched it on their internal network. Coworkers found it genuinely useful. A few weeks later, the company was exploring whether the same approach could become a customer-facing product.

**Morning idea to afternoon prototype under use.** That's what innovation looks like when the environment allows it. But I've seen environments where that same idea would have stalled for months before anyone could even begin building, not because the technology wasn't there, but because the organization or people agency wasn't set up to let it happen.

I'll admit I was a bit jealous hearing about it, because I recognized something in that story that felt like a mirror held up to my own experience, but in reverse. I've seen environments where that same idea would have stalled for months before anyone could even begin building. Not because the technology wasn't there, not because the idea wasn't good, but because the organization wasn't set up to let it happen.

That contrast got me thinking where we are overall in this. With current AI tooling, the creation part of innovation has been compressed to almost nothing. A problem can become a working prototype in hours. And yet, in many large organizations, the time from idea to something actually running in someone's hands hasn't changed at all. If anything, it's gotten slower. Recent industry data suggests the average concept-to-launch cycle in enterprises is still around [22 months, and only about 21%](https://aws.amazon.com/blogs/enterprise-strategy/break-through-barriers-accelerate-innovation-in-traditional-organizations/) of organizations report actually achieving their innovation goals. Those 22 months are of course full product and not just prototyping, but the point is that the creation part of that timeline has been compressed to a fraction of what it used to be, while I'm not sure the rest of the timeline has changed much at all.

So I started reading, and below are some of the patterns that stood out to me in the research on innovation processes, and how they relate to the current AI-era reality.

## The bottleneck moved

For a long time, the expensive part of innovation was building things. Writing code took weeks. Prototyping required specialized skills and dedicated time. Organizations designed their innovation governance around this reality, and it made sense: if building something wrong costs months of effort, you want to vet ideas carefully before committing resources. Stage gates, ROI analyses, steering committees, all reasonable when creation is the constraint.

But AI collapsed the creation cost. What used to take weeks now takes hours. And this changes the equation in a way that most processes haven't caught up with more traditional organizations. The bottleneck is no longer *can we build this* but *are we allowed to build this*. The constraint shifted from creation to permission.

[Steve Blank](https://hbr.org/2019/10/why-companies-do-innovation-theater-instead-of-actual-innovation), whose work on innovation in large enterprises has shaped a lot of how people think about corporate R&D, draws a distinction that I found interesting. Many of the established organizations are optimized for *execution*: repeatable processes, risk management, compliance. Innovation, however, is *search*, and search requires rapid iteration, tolerance for failure, and minimal friction. The fatal mistake is running search activities through execution governance. When you need a business case before you've even validated whether the problem exists in the way you think it does, you're not managing innovation. You're preventing it from starting.

The math has become almost comedic. A working proof of concept takes an afternoon. Getting a cloud instance to host it, or a license to use a basic development tool, or security approval for an internal utility, that can take months. **The organizational cost of *trying* something now dwarfs the technical cost by orders of magnitude, and the gap keeps widening as AI tools improve.**

## What kills the motivation

[Teresa Amabile](https://www.hbs.edu/faculty/Pages/profile.aspx?facId=6409) spent decades at Harvard studying creativity and motivation in the workplace. Her finding in [*The Progress Principle*](https://www.hbs.edu/faculty/Pages/item.aspx?num=40692), based on nearly 12,000 diary entries from knowledge workers, is deceptively simple: the biggest driver of creative motivation is the sense of making meaningful progress in work that matters. And the biggest killer isn't dramatic failure or strategic misalignment. It's small, daily friction. Bureaucratic obstacles, lack of autonomy, the feeling that trying something requires more energy than the thing itself. Her research wasn't specifically about innovation processes, but the connection feels hard to ignore: **if daily friction is what most reliably destroys creative motivation, then an environment designed around approvals and waiting is doing exactly that.**

I recognize that pattern. I think most people who've tried to build something useful inside a large organization recognize it. You have a clear problem, you can see the solution, you might even be able to build it yourself, but the environment makes the act of trying feel disproportionately expensive. And after enough of that, people simply stop trying. Not because they run out of ideas, but because the environment has made acting on ideas feel pointless.

This is the part that doesn't show up in any innovation pipeline report. The ideas that were never submitted. The prototypes that were never built, not because they couldn't be, but because someone looked at the approval path and quietly decided it wasn't worth the fight. You can't measure what people chose not to attempt. It's a scary thought, how much of that might be happening.

## The handoff problem

There's another pattern I see in a lot of corporate innovation processes that the research flags as deeply damaging: separating the person who has the idea from the person who builds it.

The typical flow could look like this. Someone has an insight, writes a description in a shared document or submission form, and it enters the "innovation pipeline". Reviewers evaluate it. If it passes, worst case it gets assigned to a team, often people who had no involvement in the original observation. They receive a few sentences of context and are expected to build something meaningful from it.

[Ikujiro Nonaka and Hirotaka Takeuchi](https://global.oup.com/academic/product/the-knowledge-creating-company-9780195092691) wrote about this in *The Knowledge-Creating Company*, and their argument is that **innovation depends heavily on tacit knowledge, the kind that can't be written in a few sentences. The original innovator understands not just *what* they want to build but *why*.** They know the subtle context, the edge cases, the specific frustration that sparked the idea. When you formalize that into a brief description and hand it to a stranger, you systematically strip out exactly the knowledge that made the idea valuable in the first place. What arrives at the implementation stage is a shadow of the original insight, and everyone involved can feel it. I bet most people have had "new innovation" dropped on their desk and asked to implement it. Doesn't work well, does it?

## Governance that doesn't scale down

One of the more destructive patterns is what I'd call uniform governance: applying the same level of scrutiny to everything, regardless of actual risk.

In many organizations, there's essentially one approval path. Whether you're deploying a customer-facing financial system or hosting a simple internal utility for your own team, the security review is the same, the approval chain is the same, the timeline is the same. A local tool that touches no customer data gets hardened to the same standard as a public-facing application. The governance is calibrated to the theoretical maximum risk, not the actual risk of what's in front of it.

This matters enormously because it makes the cost of small experiments nearly identical to the cost of major deployments. And when experimenting is as expensive as shipping, people stop experimenting. The principle is intuitive but the consequences are easy to underestimate: innovation tends to start small, and when small things are expensive to try, fewer people try them. [Eric von Hippel](https://evhippel.mit.edu/books/) has spent decades at MIT studying how innovation actually happens, and a consistent finding across his work is that **reducing the friction of experimentation increases innovation output.** His book [*Free Innovation*](https://mitpress.mit.edu/9780262551922/free-innovation/) focuses specifically on consumer-driven innovation, but the underlying mechanism applies broadly: when the cost of trying something drops, more people try things, and more of those attempts turn out to be valuable. Enterprise governance that applies maximum friction to every attempt, regardless of scale, works directly against this.

The irony is that **organizations do this in the name of risk management while ignoring a significant risk on the other side: the risk of *not* innovating**, of being slow, of letting problems compound because solving them was too bureaucratically expensive to attempt.

## The tooling gap

There's a compounding factor that deserves more attention than it gets. In many organizations, the tools needed to actually build things, development environments, AI assistants, hosting infrastructure are **often restricted to a small group of specially approved people. Everyone else is left to fend for themselves.**

The numbers make this concrete. [BCG's](https://www.bcg.com/publications/2025/ai-at-work-momentum-builds-but-gaps-remain) 2025 global survey found that while more than three-quarters of leaders and managers use generative AI regularly, frontline employee adoption has stalled at around 51%, what the researchers call a "silicon ceiling." [Nearly half of workers](https://www.udacity.com/blog/2025/09/ai-adoption-trust-gap-udacity-research.html) report their company doesn't pay for any AI tools at all, and 72% of managers have paid out of pocket for tools they need for work. [Writer's](https://writer.com/blog/enterprise-ai-adoption-survey/) enterprise survey found that 35% of employees are paying for their own generative AI tools just to do their jobs. **The result is predictable: an estimated [71% of knowledge workers](https://ai4sp.org/shadow-ai/) now use AI tools without official approval.**

Think about what this means for innovation. Organizations are simultaneously asking employees to "innovate with AI" while not giving most of them access to AI tools, or if they do, prohibiting the use of real business or customer data. People's hands are tied, but the expectation to innovate remains. The people closest to the problems, the ones with the richest understanding of what's needed, often can't act on what they see. And the people who have the tools may not have the context. **You end up with a structural mismatch between who knows what should be built and who is able to build it, and situations where tools are solving problems that weren't really problems in the first place.**

Broad access to creation tools isn't just a nice-to-have. In a world where AI makes it possible for a much wider range of people to build functional solutions, restricting those tools to a select few is an active choice to limit the organization's innovation surface area. It's the equivalent of giving everyone a pen but only letting a few people have paper.

## What would actually help

I'm not going to pretend there's a simple fix to all of this. But if someone asked me to describe my ideal environment as an innovator, looking through the lens of what the research consistently points to, a few principles stand out.

**Give people tools and let them use real data.** If someone spots a problem and can immediately prototype a solution using actual business data, they can validate the idea within hours. If they need to request a license, wait for approval, and then work with sanitized dummy data, the feedback loop stretches from hours to months and the prototype loses its connection to the problem it was solving. This ties directly to keeping the innovator close to the implementation: when the person who had the insight can build and test it themselves, the tacit knowledge stays intact.

**Replace gates with guardrails.** [Elizabeth Ayer's](https://medium.com/@ElizAyer/dont-ask-forgiveness-radiate-intent-d36fd22393a3) concept of "radiating intent" captures this well (thanks to [Maaret Pyhäjärvi](https://maaretp.com/) for introducing me to this idea!): instead of asking permission before every step, you signal what you're doing and why, and management only redirects if you're heading somewhere genuinely problematic. Gates stop everything until someone opens them. Guardrails let you move and only intervene when you're about to go off the road.

**Scale governance to actual risk.** When an idea is small, internal, and low-risk, the approval path should be light. As it grows toward a broader audience or customers, governance steps up accordingly. The key is that the path should be clear and predictable: you shouldn't have to guess what audit is required or who to ask. An [Internal Developer Platform](https://www.atlassian.com/developer-experience/internal-developer-platform) can serve as the entry point: a self-service environment with pre-approved infrastructure, automated security scanning for the basics, and heavier governance only when something moves beyond the sandbox.

**Justify ROI after demonstration, not before.** This is where [Rita McGrath's](https://hbr.org/1995/07/discovery-driven-planning) "discovery-driven planning" resonates: instead of prove this will generate returns before you start, ask what would we need to learn to know if this is worth pursuing? When someone has built a prototype, tested it with real users, and gathered feedback, the ROI conversation becomes grounded in evidence rather than speculation. Demanding months of justification before those first hours of prototyping can happen filters for the best fiction writers rather than the best problem solvers.

## The question worth asking

My friend's tool went from morning frustration to afternoon solution to, weeks later, a potential customer-facing product. Nothing about what he built was technically ground-breaking. A RAG-based chat interface is well-understood at this point. What was remarkable was that nothing stood in his way. He had the tools, the access, the autonomy, and an environment that let a good idea prove itself before anyone demanded a business case for it.

The organizations that capture the most value from AI probably won't be the ones with the best innovation spreadsheets or the most elaborate stage-gate processes. They'll be the ones that noticed early that when creation becomes cheap, the competitive advantage shifts to the environment, to the speed at which an idea can be tested, iterated, and either scaled or quietly discarded.

Every month an idea sits in a pipeline, its potential value decays. The person who had the insight loses context and momentum. The problem it was meant to solve either compounds or gets worked around in some less elegant way.

I keep coming back to a simple question that I think more organizations should be asking themselves: **if someone here has a good idea on a Tuesday morning, how long before they can show a working version to the people who'd use it?** If the honest answer is months, it might be worth examining what's filling that gap, and whether it's actually protecting value or quietly destroying it.