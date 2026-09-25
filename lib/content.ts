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
  // The anchor beside the descriptor is either a figure or a brand mark,
  // never both.
  stat: {
    value?: string;
    logo?: { src: string; alt: string };
    label: string;
  };
  summary: string;
  // A walkthrough, shown above Problem. `id` is the YouTube video id.
  video?: { id: string; title: string };
  // Screenshots, shown after Build. Intrinsic size is stored so the
  // browser can reserve the space before the file loads. `alt` describes
  // the image for anyone who can't see it; the optional `caption` is the
  // short line printed under it for everyone.
  shots?: {
    src: string;
    alt: string;
    w: number;
    h: number;
    caption?: string;
  }[];
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
    stat: {
      logo: { src: "/logos/make.svg", alt: "Make.com" },
      // Stored lower case; the .label rule sets it in caps.
      label: "personalized reply · live booking · zero manual sorting",
    },
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
    title: "GHL Agency System",
    stat: {
      logo: { src: "/logos/gohighlevel.svg", alt: "GoHighLevel" },
      label: "qualified · booked · nurtured · auto",
    },
    summary:
      "An AI system that qualifies every inbound lead, books hot prospects straight onto the calendar, and nurtures the rest — automatically, end to end.",
    video: {
      id: "1x9ELW9R8bE",
      title: "Walkthrough: GHL Agency System",
    },
    shots: [
      {
        src: "/images/projects/project-2/canvas-full.png",
        alt: "The whole n8n canvas, with every route colour-coded as its own lane: qualification, the hot path, the warm nurture, the cold re-engagement, the no-show and completed handlers, and error handling.",
        w: 1320,
        h: 529,
      },
      {
        src: "/images/projects/project-2/hot-path.png",
        alt: "The hot lane step by step — instant SMS, personalized email, a live free-slot lookup, the booking, the move to the Booked stage, then the confirmation email and 24-hour and 1-hour reminders — with the warm and cold lanes beneath it.",
        w: 1323,
        h: 527,
      },
      {
        src: "/images/projects/project-2/handlers.png",
        alt: "The no-show handler moving an opportunity to No-Show and sending a rebooking email, the completed handler waiting two hours before its review request, and the error handler alerting Slack with a Gmail fallback.",
        w: 1326,
        h: 530,
      },
      {
        src: "/images/projects/project-2/ghl-pipeline.png",
        alt: "The GoHighLevel opportunities board, its stages running New Lead, Hot, Warm, Cold, Booked, Confirmed, Completed, No-Show and Re-engaged, with a lead sitting in Booked.",
        w: 1952,
        h: 468,
      },
      {
        src: "/images/projects/project-2/ghl-contact.png",
        alt: "The contact record the run produced in GoHighLevel, tagged hot-lead and appointment-booked, its activity showing the opportunity and the Strategy Session appointment created from the form submission.",
        w: 1164,
        h: 565,
      },
    ],
    problem:
      "Most agencies lose leads because follow-up is manual and slow. A hot lead that waits an hour is already cold. This system was built to close that gap — every lead qualified, routed, and handled in under 60 seconds, with no one lifting a finger.",
    build:
      "n8n orchestrates the full flow. A GHL webhook fires the moment a form is submitted — GPT-4o-mini reads the lead and scores it HOT, WARM, or COLD, the way a salesperson would in the first 10 seconds of a call. The contact and opportunity are created in GHL instantly, dropped into the correct pipeline stage. Hot leads get an instant SMS, a personalized email reply, a real-time calendar slot lookup, and an auto-booked Strategy Session — confirmation email and 24h + 1h reminders included. Warm leads enter a 5-day nurture sequence: Day 1 intro, Day 3 value email, Day 5 SMS follow-up. Cold leads are logged and re-engaged at Day 14. A duplicate lead check prevents double-booking. No-shows trigger a rebooking email and move the opportunity to the No-Show stage. Showed leads move to Completed, wait 2 hours, then receive an automatic review request. Every path alerts Slack. Any node failure fires an error handler — Slack alert plus Gmail fallback — so nothing fails silently.",
    theCatch:
      "The video script says \"SMS-ready as it scales\" — that's only half true. Twilio's trial account blocks SMS to Philippine numbers. Every SMS node is set to continueRegularOutput so the workflow doesn't break, but SMS delivery to non-US numbers won't work without upgrading. Scoped as a known production limitation, not a bug — and documented honestly here rather than hidden. A review handler is also built and wired — but GHL's native review webhook is a paid add-on, so it's documented as a stub rather than a connected path.",
    outcome:
      "A full agency intake system — lead in, qualified, booked, nurtured, and followed up with automatically. No CRM left untouched, no lead unhandled. Built and tested solo as a portfolio project.",
    // A solo build with no production traffic, so no metrics rather than
    // placeholder ones.
    metrics: [],
    stack: [
      logo("n8n", "n8n"),
      logo("OpenAI", "openai"),
      logo("GoHighLevel", "gohighlevel"),
      logo("Twilio", "twilio"),
      logo("Gmail", "gmail"),
      logo("Slack", "slack"),
    ],
  },
  {
    id: "cs-voice",
    category: "voice",
    tone: "rose",
    categoryLabel: "Voice AI Agents (VAPI)",
    title: "AI Voice Receptionist",
    stat: {
      logo: { src: "/logos/vapi.svg", alt: "VAPI" },
      label: "instant answer · real booking · zero manual work",
    },
    summary:
      "An AI voice receptionist that answers every inbound call, qualifies the caller, checks live calendar availability, and books the appointment — automatically, while still on the phone.",
    video: {
      id: "2-vzHshJRkg",
      title: "Walkthrough: AI Voice Receptionist",
    },
    shots: [
      {
        src: "/images/projects/project-3/canvas-full.png",
        alt: "The whole n8n workflow at a glance, every lane visible at once: the incoming call routing, the service-area check, the live calendar availability lookup, the booking sequence, the success and failure handling, transfer detection, and the post-call summary and logging.",
        w: 1321,
        h: 530,
        caption: "n8n workflow — full canvas overview",
      },
      {
        src: "/images/projects/project-3/vapi-dashboard.png",
        alt: "The VAPI assistant for the demo client, its transcriber, model and voice panels showing Claude Sonnet 4.6 as the brain, and the greeting it opens every call with.",
        w: 1365,
        h: 615,
        caption: "VAPI assistant config — Claude Sonnet 4.6 as the voice model",
      },
      {
        src: "/images/projects/project-3/canvas-first-half.png",
        alt: "The first half of the n8n canvas: the VAPI tool webhook routing by message type, the service-area check that tags and declines out-of-area callers, transfer detection, and the post-call lane that summarizes the transcript and logs it.",
        w: 1324,
        h: 511,
        caption:
          "Post-call handler: AI summary, GHL logging, transfer detection",
      },
      {
        src: "/images/projects/project-3/canvas-second-half.png",
        alt: "The second half: the live Google Calendar availability check, the booking lane creating the GHL contact, calendar event and appointment in sequence, the success lane firing Slack, Gmail and SMS, and the failure handling beneath it.",
        w: 1305,
        h: 532,
        caption:
          "Tool routing: checkAvailability, bookAppointment, checkServiceArea",
      },
      {
        src: "/images/projects/project-3/ghl-contact.png",
        alt: "The contact the call produced in GoHighLevel, tagged voice-agent-call and sourced to the VAPI call log, beside the roofing appointment booked onto the Job Site Visits calendar.",
        w: 1471,
        h: 920,
        caption: "GHL contact created automatically during the call",
      },
      {
        src: "/images/projects/project-3/sheets-log.png",
        alt: "The Google Sheets call log row: timestamp, caller number, end reason, the AI summary of the call, and the extracted lead quality, sentiment and follow-up flag.",
        w: 1311,
        h: 72,
        caption:
          "Google Sheets call log — AI-extracted summary and lead quality",
      },
    ],
    problem:
      "A roofing crew is out on job sites most of the day. Calls during business hours go unanswered. After hours, voicemail. Most callers never call back — that's real business walking away every day.",
    build:
      "VAPI handles the conversation using Claude Sonnet 4.6 as the voice brain. n8n receives every tool call via webhook and routes it by type — checkAvailability, bookAppointment, or checkServiceArea. When a caller asks for availability, n8n pulls live Google Calendar events for the next 10 days, filters out busy slots and weekends, and returns the next three open times directly into the conversation. When the caller picks a time, n8n parses the spoken time, creates a GHL contact, books a Google Calendar event, and creates a GHL appointment simultaneously — all while the caller is still on the line. On success, a Slack alert fires, a Gmail confirmation goes to the caller, and an SMS confirmation is sent via Twilio. If the booking fails at any stage, the voice agent gives a graceful response and a Slack alert fires for manual follow-up. Service area is validated by ZIP code before any booking — out-of-area callers are declined politely and tagged in GHL. If the caller asks to speak to a human, the call transfers live and an urgent Slack alert fires. After every call ends, GPT-4o-mini summarizes the transcript and extracts lead quality, sentiment, and whether follow-up is needed — written as a note directly on the GHL contact and logged to Google Sheets.",
    theCatch:
      'The hardest part wasn\'t the booking — it was making the voice agent feel real, not robotic. The system had to parse natural spoken time ("Monday morning", "Friday around 11") into exact ISO timestamps for the calendar API. A single mismatch meant a failed booking with no error the caller could see. The solution was a regex-based time parser in n8n with a graceful fallback voice response asking the caller to repeat the time — keeping the conversation natural even when the parse fails.',
    outcome:
      "A caller phones in, speaks naturally, gets real availability, books a real appointment, and receives a confirmation — all before the call ends. The owner gets a Slack alert. The CRM is updated. The call is logged and summarized by AI. Built and tested solo as a portfolio project using a fictional demo client (Summit Roofing).",
    // A solo build with no production traffic, so no metrics rather than
    // placeholder ones.
    metrics: [],
    stack: [
      logo("VAPI", "vapi"),
      logo("n8n", "n8n"),
      logo("Claude (Anthropic)", "anthropic"),
      logo("OpenAI", "openai"),
      logo("GoHighLevel", "gohighlevel"),
      logo("Google Calendar", "googlecalendar"),
      logo("Google Sheets", "googlesheets"),
      logo("Gmail", "gmail"),
      logo("Twilio", "twilio"),
      logo("Slack", "slack"),
    ],
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
