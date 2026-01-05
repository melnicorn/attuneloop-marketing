# Attune Loop — Static Marketing Site

This repository hosts the **static marketing site** for **Attune**, a science-based, secular self-regulation training app. The site is deployed via **Firebase Hosting** and is intentionally minimal: no frameworks, no tracking, no backend logic.

The purpose of this site is to:
- land the domain (`attuneloop.com`)
- introduce the Attune concept
- explain the Attune Loop at a high level
- provide a clear, professional disclaimer

This is an early-stage, informational site only.

---

## Product Context

### App name
**Attune**

### Core process model
**The Attune Loop**

The Attune Loop is a simple, repeatable feedback process for regulating reactions in real time. It is not therapy, not spiritual, and not motivational content.

### Product positioning
Attune is a **skill-building system**, focused on training foundational mental capacities such as:
- interoceptive awareness
- attentional flexibility
- emotional granularity
- meta-awareness

Training happens through:
- in-the-moment micro-practices
- reflection and repetition over time

The system emphasizes:
- explainability (“why this works”)
- evidence-based techniques
- habit formation and practice
- adaptability to the user’s current state and progress
- calm, respectful, non-pathologizing language

---

## Tone and Language Constraints

All copy on this site must:
- be calm, grounded, and credible
- avoid clinical or diagnostic language
- avoid spiritual, mystical, or guru framing
- avoid motivational hype or promises of transformation
- treat emotions as information, not pathology

This is a serious tool, not a wellness toy.

---

## Hosting and Technical Constraints

- Hosting: **Firebase Hosting**
- Site type: **static HTML/CSS only**
- No JavaScript frameworks
- No analytics, tracking scripts, or cookies
- Fully source-controlled (all content lives in the repo)

Firebase Hosting has already been initialized via `firebase init hosting`.

---

## Site Structure

The site should use clean URLs with folder-based index.html files.

### Pages

#### `/` — Home
File:
public/index.html

Content:
- Hero headline: **Attune**
- Subheadline:  
  “Self-regulation training, built on evidence — not therapy, not fluff.”
- Short paragraph describing the purpose of Attune and what it trains
- Section: **What it is**
  - Explainable and transparent
  - Evidence-based methods
  - Skill-building and habit formation
  - Adaptive to state and progress
  - Calm, non-pathologizing language
- Section: **What it isn’t**
  - Not therapy or medical advice
  - Not spiritual or religious
  - Not motivational content or a quick fix
- Primary CTA: link to `/loop/`
- Secondary CTA: link to `/disclaimer/`
- Small note near the footer:  
  “Early project. More details coming.”

---

#### `/loop/` — The Attune Loop
File:
public/loop/index.html

Content:
- Title: **The Attune Loop**
- One-paragraph overview:  
  A simple, repeatable feedback process for regulating reactions in real time.
- Present a clear 4-step loop using neutral, non-clinical language:

  1. **Notice** — what’s happening in body and attention  
  2. **Name** — apply a precise label to the current state  
  3. **Adjust** — choose a small, specific action  
  4. **Recover** — return toward baseline and learn from the repetition

- For each step: 1–2 sentences explaining why it matters
- Section: **Why loops work**
  - Brief explanation of feedback, repetition, and state-dependent learning
  - Conceptual explanation only; no citations needed
- Links back to home and disclaimer

---

#### `/disclaimer/` — Disclaimer
File:
public/disclaimer/index.html

Content:
- Title: **Disclaimer**
- Plain-language disclaimers:
  - Educational and informational purposes only
  - Not medical, mental health, or legal advice
  - Not a substitute for diagnosis or treatment
  - Consult qualified professionals when appropriate
  - If in immediate danger or considering harm to self or others, contact local emergency services
- Include a line:
  Last updated: <date>

Tone should be serious but not alarmist.

---

## Optional but Recommended Files

- public/assets/styles.css  
  Shared stylesheet for all pages
- public/404.html  
  Calm, helpful 404 page with links back home
- public/robots.txt  
  Allow indexing
- public/sitemap.xml  
  Include `/`, `/loop/`, `/disclaimer/`

---

## Design Constraints

- Minimalist, modern, professional
- Responsive and readable on mobile
- System fonts only (no external font loads)
- Good contrast and generous spacing
- Simple top navigation:
  - Attune
  - Attune Loop
  - Disclaimer
- Simple footer with links and neutral language
- Small page weight; fast load

---

## Deployment

- This repo is deployed manually via:
  firebase deploy
- Do not enable SPA rewrites
- Do not modify firebase.json unless required for static hosting

---

## Summary

This site exists to **explain the Attune Loop clearly and credibly**, establish trust, and set expectations. It should feel:
- human but serious
- scientific but accessible
- calm, not promotional

Everything here is intentionally conservative and extensible.
