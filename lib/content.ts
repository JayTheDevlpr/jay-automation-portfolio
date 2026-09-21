// All copy on the site is placeholder. Edit this file to fill in real content.

export type ToneId = "ember" | "lime" | "rose" | "ice";
export type ServiceId = "workflow" | "leads" | "voice" | "rag";

export const SITE = {
  name: "Jay",
  role: "AI Automation Builder",
  email: "hello@example.com",
};

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const HERO = {
  eyebrow: "AI automation builder · Placeholder availability note",
  // One array item per line of the headline.
  headline: ["Systems that do", "the work while", "you don't."],
  sub: "Placeholder subhead. One or two sentences on who you help and what changes for them once the automation is live.",
  primaryCta: { label: "See the builds", href: "#work" },
  secondaryCta: { label: "Book a call", href: "#contact" },
  log: {
    command: "run lead_intake --live",
    steps: [
      { tag: "trigger", text: "form.submitted", ms: "0.0s" },
      { tag: "enrich", text: "company + role lookup", ms: "0.4s" },
      { tag: "score", text: "fit 87 / 100", ms: "0.9s" },
      { tag: "route", text: "owner assigned in CRM", ms: "1.1s" },
      { tag: "notify", text: "sales channel pinged", ms: "1.3s" },
    ],
    done: "done in 1.3s",
  },
};

export type ProofStat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

export const PROOF: ProofStat[] = [
  { value: 120, suffix: "+", label: "Automations live" },
  { value: 38, suffix: "", label: "Client teams" },
  { value: 3400, suffix: "+", label: "Hours returned / mo" },
  { value: 1.8, suffix: "s", decimals: 1, label: "Median run time" },
];

export const ABOUT = {
  statement:
    "Placeholder statement about how you think about automation, in a sentence or two.",
  paragraphs: [
    "Placeholder paragraph one. Where you came from, what you got tired of doing by hand, and how that turned into building systems for other people.",
    "Placeholder paragraph two. How you work with clients, what a typical engagement looks like, and what they can expect to hand off.",
  ],
  facts: [
    { k: "Based in", v: "Placeholder city" },
    { k: "Building since", v: "20XX" },
    { k: "Works with", v: "Placeholder team sizes" },
    { k: "Currently", v: "Placeholder availability" },
  ],
};

export type Service = {
  id: ServiceId;
  tone: ToneId;
  title: string;
  blurb: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "workflow",
    tone: "ember",
    title: "Workflow Automation",
    blurb:
      "Placeholder: describe the repetitive processes you replace with reliable, observable workflows.",
    points: [
      "Placeholder deliverable one",
      "Placeholder deliverable two",
      "Placeholder deliverable three",
    ],
  },
  {
    id: "leads",
    tone: "lime",
    title: "AI Lead Qualification & CRM",
    blurb:
      "Placeholder: describe how inbound leads get scored, enriched and routed without a human in the loop.",
    points: [
      "Placeholder deliverable one",
      "Placeholder deliverable two",
      "Placeholder deliverable three",
    ],
  },
  {
    id: "voice",
    tone: "rose",
    title: "Voice AI Agents (VAPI)",
    blurb:
      "Placeholder: describe the inbound and outbound call agents you build and what they can handle.",
    points: [
      "Placeholder deliverable one",
      "Placeholder deliverable two",
      "Placeholder deliverable three",
    ],
  },
  {
    id: "rag",
    tone: "ice",
    title: "RAG / AI Knowledge Agents",
    blurb:
      "Placeholder: describe the assistants that answer from a company's own documents and data.",
    points: [
      "Placeholder deliverable one",
      "Placeholder deliverable two",
      "Placeholder deliverable three",
    ],
  },
];

export type ToolGroup = {
  layer: string;
  tone: ToneId | "bone";
  tools: string[];
};

// Placeholder tool names; swap for what you actually use.
export const TOOLS: ToolGroup[] = [
  { layer: "Orchestration", tone: "ember", tools: ["n8n", "Make", "Zapier"] },
  { layer: "Voice", tone: "rose", tools: ["VAPI", "Twilio", "ElevenLabs"] },
  { layer: "Models", tone: "bone", tools: ["OpenAI", "Anthropic", "Whisper"] },
  {
    layer: "Knowledge",
    tone: "ice",
    tools: ["Pinecone", "Supabase", "LlamaIndex"],
  },
  {
    layer: "CRM & data",
    tone: "lime",
    tools: ["HubSpot", "GoHighLevel", "Airtable"],
  },
];

export type CaseStudy = {
  id: string;
  category: ServiceId;
  tone: ToneId;
  categoryLabel: string;
  title: string;
  client: string;
  stat: { value: string; label: string };
  summary: string;
  problem: string;
  build: string;
  outcome: string;
  metrics: { k: string; v: string }[];
  stack: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-workflow",
    category: "workflow",
    tone: "ember",
    categoryLabel: "Workflow Automation",
    title: "Placeholder case study title one",
    client: "Placeholder client",
    stat: { value: "−62%", label: "manual processing time" },
    summary: "One-line placeholder summary of the engagement.",
    problem:
      "Placeholder problem. What the client was doing by hand, how often, and what it was costing them in time or errors.",
    build:
      "Placeholder build. The workflow you designed, the systems it connects, and any decisions worth calling out.",
    outcome:
      "Placeholder outcome. What changed after launch, in the client's own terms as much as in numbers.",
    metrics: [
      { k: "Timeline", v: "Placeholder" },
      { k: "Runs / month", v: "Placeholder" },
      { k: "Payback", v: "Placeholder" },
    ],
    stack: ["Tool A", "Tool B", "Tool C"],
  },
  {
    id: "cs-leads",
    category: "leads",
    tone: "lime",
    categoryLabel: "AI Lead Qualification & CRM",
    title: "Placeholder case study title two",
    client: "Placeholder client",
    stat: { value: "3.1×", label: "qualified-lead rate" },
    summary: "One-line placeholder summary of the engagement.",
    problem:
      "Placeholder problem. How leads were being handled before, and where good ones were slipping through.",
    build:
      "Placeholder build. The scoring, enrichment and routing logic, and how it writes back to the CRM.",
    outcome:
      "Placeholder outcome. How response time and conversion moved once the pipeline was running.",
    metrics: [
      { k: "Timeline", v: "Placeholder" },
      { k: "Leads / month", v: "Placeholder" },
      { k: "Response time", v: "Placeholder" },
    ],
    stack: ["Tool A", "Tool B", "Tool C"],
  },
  {
    id: "cs-voice",
    category: "voice",
    tone: "rose",
    categoryLabel: "Voice AI Agents (VAPI)",
    title: "Placeholder case study title three",
    client: "Placeholder client",
    stat: { value: "24/7", label: "calls answered" },
    summary: "One-line placeholder summary of the engagement.",
    problem:
      "Placeholder problem. Missed calls, after-hours gaps, or a front desk stretched too thin.",
    build:
      "Placeholder build. The voice agent's flow, handoff rules, integrations and guardrails.",
    outcome:
      "Placeholder outcome. Call volume handled, bookings made, and what staff stopped having to do.",
    metrics: [
      { k: "Timeline", v: "Placeholder" },
      { k: "Calls / month", v: "Placeholder" },
      { k: "Handoff rate", v: "Placeholder" },
    ],
    stack: ["VAPI", "Tool B", "Tool C"],
  },
  {
    id: "cs-rag",
    category: "rag",
    tone: "ice",
    categoryLabel: "RAG / AI Knowledge Agents",
    title: "Placeholder case study title four",
    client: "Placeholder client",
    stat: { value: "94%", label: "answers grounded in source" },
    summary: "One-line placeholder summary of the engagement.",
    problem:
      "Placeholder problem. Knowledge scattered across documents, and people asking the same questions repeatedly.",
    build:
      "Placeholder build. Ingestion, chunking and retrieval choices, and how answers cite their sources.",
    outcome:
      "Placeholder outcome. How much support or internal-search load dropped, and how it was measured.",
    metrics: [
      { k: "Timeline", v: "Placeholder" },
      { k: "Documents indexed", v: "Placeholder" },
      { k: "Deflection rate", v: "Placeholder" },
    ],
    stack: ["Tool A", "Tool B", "Tool C"],
  },
];

export const CONTACT = {
  headline: "Got a process that eats your week?",
  sub: "Placeholder line inviting people to get in touch, and what to include in a first message.",
  links: [
    { label: "Book a call", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "https://github.com/JayTheDevlpr" },
  ],
};
