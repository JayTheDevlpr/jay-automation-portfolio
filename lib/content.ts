// All copy on the site is placeholder. Edit this file to fill in real content.

export type ToneId = "ember" | "lime" | "rose" | "ice";
export type ServiceId = "workflow" | "leads" | "voice" | "rag";

export const SITE = {
  name: "Jay Marin",
  role: "AI Automation Specialist",
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
  eyebrow: SITE.role,
  // One array item per line of the headline.
  headline: ["Systems that do", "the work while", "you don't."],
  sub: "Integrate AI into your workflows and connect your tools — eliminate busywork and unlock AI-powered insights, so you can focus on what really matters.",
  primaryCta: { label: "See the builds", href: "#work" },
  secondaryCta: { label: "Book a call", href: "#contact" },
  // Generic manual-vs-automated comparison; not tied to any one project.
  compare: {
    title: "manual vs automated",
    caption: "per task",
    columns: { task: "Task", manual: "Manual", automated: "Automated" },
    rows: [
      { task: "Read & assess", manual: "~5 min", automated: "0.4s" },
      { task: "Decide next step", manual: "~10 min", automated: "0.3s" },
      { task: "Take the action", manual: "~5 min", automated: "0.6s" },
      { task: "Log & notify", manual: "~3 min", automated: "0.2s" },
    ],
    total: { task: "Total / task", manual: "~23 min", automated: "~1.5s" },
    footnote: "Runs 24/7 — nights, weekends, no breaks",
  },
};

// Quiet tools teaser under the hero. A pointer to #stack, not the full list.
export const TEASER = {
  label: "Built with",
  tools: ["n8n", "Make", "VAPI", "Supabase", "GoHighLevel"],
  cta: "See full stack",
  href: "#stack",
};

export const ABOUT = {
  portrait: "/professional-pic.png",
  // Printed on the hanging ID badge. Stored in title case and uppercased in
  // CSS, so screen readers get a name rather than spelling out an acronym.
  idName: "Jay M Marin",
  paragraph:
    "Every system I build is proof I can keep up with where this field is going — and when something doesn't go as planned, I'm the one who figures out why and fixes it.",
  cta: { label: "See my case studies", href: "#work" },
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
    title: "CRM & Pipeline Automation",
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
    categoryLabel: "CRM & Pipeline Automation",
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
