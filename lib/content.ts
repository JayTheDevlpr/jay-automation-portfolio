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
    "A workflow builder at heart — I take what a business already runs on manually and turn it into something automated, reliable, and built to keep running long after I've moved on to the next system.",
  cta: { label: "See my case studies", href: "#work" },
};

export type Service = {
  id: ServiceId;
  tone: ToneId;
  title: string;
  blurb: string;
};

export const SERVICES: Service[] = [
  {
    id: "workflow",
    tone: "ember",
    title: "Workflow Automation",
    blurb:
      "Building systems that take a manual, repetitive process and turn it into something that runs on its own, reliably, without needing to be watched.",
  },
  {
    id: "leads",
    tone: "lime",
    title: "CRM & Pipeline Automation",
    blurb:
      "Wiring CRM and pipeline logic so records move, get scored, and get routed automatically — no manual data entry.",
  },
  {
    id: "voice",
    tone: "rose",
    title: "Voice AI Agents (VAPI)",
    blurb:
      "Building voice agents that handle real inbound/outbound calls — qualifying, checking availability, and booking, without a human on the line.",
  },
  {
    id: "rag",
    tone: "ice",
    title: "RAG / AI Knowledge Agents",
    blurb:
      "Building AI assistants that answer accurately from a company's own documents, with confidence checks instead of guessing.",
  },
];

// `logo` points at a vendored file in public/logos. Full-colour brand marks
// where one exists; the rest are single-path glyphs in the brand's own colour,
// lifted in lightness where the raw value would vanish against the dark page.
// Left off only where no brand mark could be sourced at all, in which case the
// Stack falls back to a lettermark in the layer's tone.
export type Tool = { name: string; logo?: string };

export type ToolGroup = {
  layer: string;
  tone: ToneId | "bone";
  tools: Tool[];
};

const logo = (name: string, slug: string): Tool => ({
  name,
  logo: `/logos/${slug}.svg`,
});

// Layers that map onto a service category carry that category's colour, so a
// dot in the Stack means the same thing it does on a Services tile. The
// supporting layers below them aren't a service anyone buys, so they stay
// neutral rather than borrowing a colour that already has a meaning.
export const TOOLS: ToolGroup[] = [
  {
    layer: "Orchestration",
    tone: "ember",
    tools: [logo("n8n", "n8n"), logo("Make", "make")],
  },
  {
    layer: "Voice",
    tone: "rose",
    tools: [
      logo("VAPI", "vapi"),
      logo("Twilio", "twilio"),
      logo("ElevenLabs", "elevenlabs"),
    ],
  },
  {
    layer: "Models",
    tone: "bone",
    tools: [
      logo("OpenAI", "openai"),
      logo("Anthropic (Claude)", "anthropic"),
      logo("DeepSeek", "deepseek"),
      logo("Gemini", "gemini"),
    ],
  },
  {
    layer: "Knowledge",
    tone: "ice",
    tools: [logo("Supabase", "supabase")],
  },
  {
    layer: "CRM & Pipeline",
    tone: "lime",
    tools: [
      logo("GoHighLevel", "gohighlevel"),
      logo("Airtable", "airtable"),
      logo("HubSpot", "hubspot"),
    ],
  },
  {
    layer: "Workspace & Comms",
    tone: "bone",
    tools: [
      logo("Slack", "slack"),
      logo("Telegram", "telegram"),
      logo("Gmail", "gmail"),
      logo("Google Calendar", "googlecalendar"),
      logo("Google Drive", "googledrive"),
      logo("Sheets", "googlesheets"),
    ],
  },
  { layer: "Design", tone: "bone", tools: [logo("Canva", "canva")] },
  {
    layer: "Dev Tools",
    tone: "bone",
    tools: [
      logo("Claude Code", "claudecode"),
      logo("VS Code", "vscode"),
      logo("MCP", "mcp"),
      logo("GitHub", "github"),
    ],
  },
];

export type CaseStudy = {
  id: string;
  category: ServiceId;
  tone: ToneId;
  categoryLabel: string;
  title: string;
  // `value` is optional — a study whose point isn't a number carries the
  // label alone, and it is set as the callout rather than as a caption.
  stat: { value?: string; label: string };
  summary: string;
  // A walkthrough, shown above Problem. `id` is the YouTube video id.
  video?: { id: string; title: string };
  // Screenshots, shown after Build. Intrinsic size is stored so the
  // browser can reserve the space before the file loads.
  shots?: { src: string; alt: string; w: number; h: number }[];
  problem: string;
  build: string;
  // The trade-off worth owning. Optional, since not every build has one that
  // earns its place in the write-up.
  theCatch?: string;
  outcome: string;
  metrics: { k: string; v: string }[];
  stack: Tool[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-workflow",
    category: "workflow",
    tone: "ember",
    categoryLabel: "Workflow Automation",
    title: "AI Lead Triage & Response System",
    stat: { label: "3 tiers · auto-reply · zero manual sorting" },
    summary:
      "An AI system that scores, logs, and replies to new leads — in seconds, not hours.",
    video: {
      id: "pRJ-z4PyHvw",
      title: "Walkthrough: AI Lead Triage & Response System",
    },
    shots: [
      {
        src: "/images/projects/project-1/canvas-full.png",
        alt: "The full Make.com scenario: a linear intake chain of webhook, scoring and formatting steps feeding a router that fans out into three lead tiers.",
        w: 1282,
        h: 585,
      },
      {
        src: "/images/projects/project-1/router-hot-branch.png",
        alt: "The router's three branches in detail, the hot-lead path running Airtable, Slack and Gmail steps with timed delays between follow-ups.",
        w: 1269,
        h: 574,
      },
    ],
    problem:
      "Leads that fill out a form typically wait hours — sometimes a full day — before anyone follows up. In that gap, they often go cold or move on to a competitor.",
    build:
      "Make.com orchestrates the flow via a router that splits leads into three tiers — hot, warm, or cold — each handled differently. A webhook catches the form submission, then two GPT-4o-mini calls score the lead and generate personalized talking points. Hot leads trigger a live Cal.com API call pulling the next open slot directly into the reply email. All tiers log to Airtable, ping Slack, and send a personalized Gmail reply. Warm and cold leads enter a follow-up sequence with timed delays. If no response, the system follows up automatically. Low-confidence scores flag the lead for human review instead of guessing.",
    theCatch:
      "Midway through, I had to decide: should the Cal.com integration auto-book the call, or just show the lead a live open time to click? Auto-booking needed a second API call (POST /bookings) plus confirmation/cancellation handling — a much bigger build. I scoped it down to read-only availability (GET /slots) instead: the lead gets a real, live time with one click to confirm, but the system doesn't commit anything on their behalf without them acting. Smaller and more honest than claiming full auto-booking.",
    outcome:
      "From form submission to a scored, logged, and replied-to lead — no one touches it. Hot leads get a real booking slot in their inbox. Warm and cold leads enter an automatic follow-up sequence. Built and tested solo as a portfolio project.",
    // No production data to report, so no metrics rather than placeholder ones.
    metrics: [],
    stack: [
      logo("Make.com", "make"),
      logo("OpenAI", "openai"),
      logo("Airtable", "airtable"),
      logo("Slack", "slack"),
      logo("Cal.com", "caldotcom"),
      logo("Gmail", "gmail"),
    ],
  },
  {
    id: "cs-leads",
    category: "leads",
    tone: "lime",
    categoryLabel: "CRM & Pipeline Automation",
    title: "Placeholder case study title two",
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
    stack: [{ name: "Tool A" }, { name: "Tool B" }, { name: "Tool C" }],
  },
  {
    id: "cs-voice",
    category: "voice",
    tone: "rose",
    categoryLabel: "Voice AI Agents (VAPI)",
    title: "Placeholder case study title three",
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
    stack: [{ name: "VAPI" }, { name: "Tool B" }, { name: "Tool C" }],
  },
  {
    id: "cs-rag",
    category: "rag",
    tone: "ice",
    categoryLabel: "RAG / AI Knowledge Agents",
    title: "Placeholder case study title four",
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
    stack: [{ name: "Tool A" }, { name: "Tool B" }, { name: "Tool C" }],
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
