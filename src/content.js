// All site copy lives here. Edit this file; components read from it.
// [ASSUMED] marks wording that was not on devenshah.in — verify or delete.
// Rule used throughout: the outcome leads, the method follows.
// No number appears here that is not already on devenshah.in.

export const site = {
  name: 'Deven Shah',
  role: 'Senior Product Manager',
  email: 'devenshah1995@gmail.com',
  phone: '+91 72084 20746',
  cv: '/Deven_Shah_CV.pdf',
  photo: '/photo.png',
  linkedin: 'https://linkedin.com/in/deven-shah-635210145/',
  medium: 'https://medium.com/@devenshah4172',
  // Public page: your employer can read this. Change to 'Let’s talk' if your search is quiet.
  status: 'Open to conversations',
  statusShort: 'Available',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Decisions', href: '#decisions' },
  { label: 'Experience', href: '#experience' },
  { label: 'Writing', href: '#writing' },
];

export const hero = {
  eyebrow: 'Enterprise B2B SaaS, ad tech & agentic AI',
  titleLead: 'Products that cut manual work',
  titleAccent: 'and grow revenue.',
  intro:
    'I’m Deven, Senior Product Manager at Voiro. I lead product for the platform that Flipkart, Myntra, Paytm, Zee5 and Carrefour run their ad revenue on: 40% less manual revenue ops, launches measured in months instead of quarters, and AI their teams use every day.',
  meta: ['Mumbai & Bangalore', 'B2B SaaS', 'Agentic AI', 'Ad tech'],
  chips: ['AI launch in 3 months', '$100M+ in ad revenue'],
  ctaPrimary: 'Get in touch',
  ctaSecondary: 'See results',
};

export const latest = {
  tag: 'New',
  title: 'AI can build it in two days. Here’s what it can’t do for you.',
  sub: 'My latest essay on PM craft when prototypes are cheap.',
  href: '/ai-journey.html',
  cta: 'Read the essay',
};

export const stats = [
  // [ASSUMED] "run through" — devenshah.in said "behind". Confirm this is accurate.
  { value: 100, prefix: '$', suffix: 'M+', label: 'yearly ad revenue run through the platform I lead' },
  { value: 3, suffix: ' months', label: 'from prototype to production on our AI product' },
  { value: 40, suffix: '%', label: 'less manual revenue ops for clients' },
  { value: 50, suffix: '+', label: 'features shipped at Voiro' },
];

export const capabilities = [
  {
    key: 'AI',
    title: 'AI agents revenue teams use daily',
    body: 'Agents that answer revenue questions in plain language, rank at-risk advertisers and push call lists into Salesforce. Every change is tested against real client questions before it ships.',
    result: 'Account prep: 2 hours to under 20 minutes',
  },
  {
    key: 'Revenue',
    title: 'Booking-to-billing that holds up at peak',
    body: 'Order management, line-item creation and revenue reconciliation across direct and programmatic sales.',
    result: 'Runs through IPL and Big Billion Days',
  },
  {
    key: 'Enterprise',
    title: 'Enterprise access IT teams sign off on',
    body: 'Google and Microsoft single sign-on tied to client directories, with access that ends the day someone leaves.',
    result: 'Onboarding: 3 days to 1',
  },
  {
    key: 'Data',
    title: 'One revenue view across every system',
    body: 'Supply and demand platforms, the ad server, the order system and Salesforce in a single view, with daily checks that flag revenue drops.',
    result: '30% fewer support tickets',
  },
  {
    key: '0 → 1',
    title: 'New bets with an exit defined upfront',
    body: 'Discovery across six publisher teams, staged prototypes, named beta partners, and the conditions for shutting it down agreed before launch.',
    result: 'Closed a product at 10% of target, kept the code',
  },
  {
    key: 'Team',
    title: 'Teams that prototype before they spec',
    body: 'Prototyping as a standard step, a three-agent story check before grooming, and release notes drafted straight from Jira.',
    result: 'Release notes: 40 minutes to under 2',
  },
];

export const about = {
  titleLead: 'I ran the revenue desk',
  titleAccent: 'before I built for it.',
  paras: [
    'At Disney+ Hotstar I owned ad revenue reporting through IPL and the World Cup, with ten people waiting on my number. I build the products I wanted then.',
    'The hard part of AI isn’t the model. It’s making an account manager stop double-checking it. So I prototype before engineering commits, test against real client questions, and ship only above a set quality bar.',
    'I work across engineering, design, sales, and client ad ops and finance teams, and I lead a PM, an APM and a designer.',
  ],
  tags: ['9 years in ad tech', '5 as a PM', 'Prototype before spec'],
};

export const work = [
  {
    area: 'Agentic AI · Voiro.ai and Genie',
    title: 'Cut account prep from 2 hours to under 20 minutes',
    hook: 'The same data requests kept showing up in every client’s account notes.',
    cols: [
      {
        h: 'Problem',
        items: [
          'Revenue data sat across supply and demand platforms, the ad server, the order system and Salesforce',
          'Every new question turned into a request for product and engineering',
          'At-risk advertisers and revenue drops surfaced late',
          'Account managers spent hours pulling reports by hand',
        ],
      },
      {
        h: 'What I did',
        items: [
          'Prototyped before engineering committed, then shipped in stages',
          'Built an agent that answers revenue questions in plain language, with self-serve alerts',
          'Added scoring that ranks at-risk advertisers and pushes a call list into Salesforce',
          'Tested every change against real client questions; nothing ships below 90%',
        ],
      },
      {
        h: 'Outcome',
        items: [
          'Account manager prep down from about 2 hours to under 20 minutes',
          '30% better pipeline conversion for sales',
          'Each client team now self-serves 8 to 10 reports a day',
          'Prototype to production in 3 months, Voiro’s fastest launch',
        ],
      },
    ],
  },
  {
    area: 'Product leadership · AI-native team',
    title: 'Got ideas in front of users in weeks, not months',
    hook: 'Ideas waited months for an engineering slot before anyone could react to them.',
    cols: [
      {
        h: 'Problem',
        items: [
          'A new idea took 3 to 9 months to reach real feedback',
          'Engineering, design and sales reacted to documents, not to a product',
          'Story quality and release notes depended on manual senior effort',
          'Weekly AI builds were making the product feel inconsistent',
        ],
      },
      {
        h: 'What I did',
        items: [
          'Made AI prototyping a standard step before design and engineering',
          'Built Story Rater, a three-agent check on every Jira story before grooming',
          'Built release notes drafted from Jira for engineering, sales and clients',
          'Paused new features after launch to put a design system in place',
        ],
      },
      {
        h: 'Outcome',
        items: [
          'Working prototypes in a couple of weeks; market signal in about two months',
          'Release notes in under 2 minutes, down from 30 to 40',
          'New PMs write sprint-ready stories without senior review',
          'Engineering owns how it’s built; product owns what and why',
        ],
      },
    ],
  },
  {
    area: '0 to 1 · Self-serve marketplace',
    title: 'Shut down a product at 10% of target, and kept what worked',
    hook: 'Direct ad sales still ran over email, so I built Brand Center to replace it.',
    cols: [
      {
        h: 'Problem',
        items: [
          'Two-sided product: advertiser and publisher workflows had almost nothing in common',
          'Every publisher ran a different ops setup',
          'The first three discovery calls produced three different problem definitions',
          'No benchmark existed, so “good” had to be defined before building toward it',
        ],
      },
      {
        h: 'What I did',
        items: [
          'Ran discovery across six publisher teams before writing a requirement',
          'Prototyped the advertiser flow and publisher dashboard separately, then joined them',
          'Deliberately scoped self-serve campaign editing out of v1',
          'Recruited beta partners early: Zee5, JioCinema, Paytm, PhonePe, Rooter',
        ],
      },
      {
        h: 'Outcome',
        items: [
          // [ASSUMED] restatement of devenshah.in's "90% below target" — same fact, easier to read.
          'Adoption reached 10% of target',
          'Closed beta with five publishers in under 9 months',
          'Called the shutdown, kept the code for reuse and documented why',
          'Now set kill criteria before every launch, not just success metrics',
        ],
      },
    ],
  },
];

export const decisions = [
  {
    title: 'Cut enterprise onboarding from 3 days to 1',
    situation: 'Enterprise IT teams flagged separate logins and slow access removal as a security risk.',
    call: 'Talked to IT admins at two clients, then shipped Google and Microsoft single sign-on tied to their directories.',
    result: 'Onboarding dropped from 3 days to 1, and access now ends the day someone leaves.',
    lesson: 'Security features don’t win deals. Missing them loses deals.',
  },
  {
    title: 'Served a second retail client with no new product',
    situation: 'Sales brought a wishlist of AI features to win demos.',
    call: 'Scored each one on customer value, reuse and running cost: built some, folded some into existing work, declined the rest in writing.',
    result: 'A roadmap that fit our capacity, and a second retail client served by extending a system we already had.',
    lesson: 'Solve the problem behind the request, not the request.',
  },
  {
    title: 'Let clients create 100 line items at once',
    situation: 'Line-item creation timed out and created duplicates for large publishers.',
    call: 'Mapped every failure mode with the engineering lead, then made the case for background processing.',
    result: 'Teams now create 100 line items in one go, and the duplicate tickets stopped.',
    lesson: 'Bring engineering the problem, not the solution.',
  },
  {
    title: 'Cut support tickets 30% by calling clients first',
    situation: 'Clients were finding revenue drops before we did.',
    call: 'Built daily reconciliation against a 7-day average, with alerts that go out to clients proactively.',
    result: '30% fewer support tickets, and Voiro now makes the first call.',
    lesson: 'Monitoring is the foundation, not a feature.',
  },
];

export const experience = [
  {
    company: 'Voiro Technology',
    role: 'Senior Product Manager',
    dates: 'Sep 2024 – Present',
    note: 'Launched Voiro.ai in 3 months and onboarded Carrefour MENA. Lead a PM, an APM and a designer.',
    current: true,
  },
  {
    company: 'Voiro Technology',
    role: 'Product Manager',
    dates: 'Apr 2021 – Aug 2024',
    // [ASSUMED] devenshah.in attributes the 30% ticket cut to daily drop monitoring. Confirm it's the same feature.
    note: 'Shipped 50+ features. Revenue reconciliation cut support tickets 30%; single sign-on cut onboarding from 3 days to 1.',
  },
  {
    company: 'Disney+ Hotstar',
    role: 'Senior Executive, Ad Revenue',
    dates: 'May 2019 – Mar 2021',
    note: 'Owned ad revenue reporting for a ~$100M business through IPL and the World Cup.',
  },
  {
    company: 'Media.net',
    role: 'Product Operations Analyst',
    dates: 'Jul 2017 – Apr 2019',
    // [ASSUMED] devenshah.in doesn't say whether you owned or supported these migrations.
    note: 'Ran ad server migrations and market launches. Where I learned how ad serving actually works.',
  },
];

export const toolbox = [
  { group: 'Prototype & build', items: ['Claude Code', 'GitHub', 'Vercel', 'Lovable', 'Figma', 'Next.js' /* ASSUMED */] },
  { group: 'Discovery & delivery', items: ['Jira', 'Story Rater', 'Client interviews', 'PRDs', 'Release notes', 'Kill criteria'] /* ASSUMED beyond Jira / Story Rater */ },
  { group: 'Ad tech domain', items: ['Google Ad Manager', 'Supply & demand platforms', 'Order management', 'Salesforce', 'Revenue reconciliation', 'Single sign-on'] },
];

export const clients = ['Flipkart', 'Myntra', 'Paytm', 'Zee5', 'Carrefour', 'Disney+ Hotstar', 'Media.net', 'JioCinema', 'PhonePe'];

export const writing = [
  { title: 'AI can build it in two days. Here’s what it can’t do for you.', meta: 'Nov 2026', href: '/ai-journey.html', ext: false },
  { title: 'Quick commerce ads: a product manager’s teardown', meta: 'Apr 2026', href: '/qc-ads-teardown.html', ext: false },
  { title: 'The new era of B2B: why user experience now matters', meta: '2025 · Medium', href: 'https://medium.com/@devenshah4172/the-new-era-of-b2b-why-user-experience-now-matters-a9c442389707', ext: true },
  { title: 'Build it and they might come: why we marketed before finishing our MVP', meta: '2025 · Medium', href: 'https://medium.com/@devenshah4172/build-it-and-they-might-come-why-we-marketed-before-finishing-our-mvp-and-you-should-too-d0058c94f14a', ext: true },
  { title: 'Beyond Google and Meta: why Indian SMBs hesitate, and why that’s changing', meta: '2025 · Medium', href: 'https://medium.com/@devenshah4172/beyond-google-meta-why-indian-smbs-hesitate-and-why-thats-changing-5f2f20ebe32d', ext: true },
];

export const podcasts = [
  { title: 'Building AI for Ad Businesses: Voiro’s Journey with Genie', meta: 'The Voiro Podcast · S6 E11 · Oct 2024', href: 'https://www.youtube.com/watch?v=napPTZkWajA&t=287s' },
  { title: 'IPL, Ads, Dreams & Data: Decoding Modern Media Monetization', meta: 'The Voiro Podcast · S7 E3 · Apr 2025', href: 'https://www.youtube.com/watch?v=brBJ_2YPYoQ' },
];

export const awards = [
  { title: 'Employee of the Quarter, Voiro', date: 'Aug 2024' },
  { title: 'Outstanding Newcomer, Voiro', date: 'May 2021' },
  { title: 'Employee of the Quarter, Disney+ Hotstar', date: 'Nov 2020' },
];

// Section headings, so numbering and wording stay in one place.
export const sections = {
  own: { num: '01', label: 'What I own', lead: 'Where I’ve delivered', accent: 'measured results.' },
  about: { num: '02', label: 'About me' },
  work: { num: '03', label: 'Selected work', lead: 'Three products,', accent: 'including the one I killed.', aside: 'Open each for the problem, what I did, and the outcome.' },
  decisions: { num: '04', label: 'Judgement calls', lead: 'Decisions', accent: 'I’d make again.' },
  experience: { num: '05', label: 'Experience', lead: '9 years in ad tech,', accent: '5 as a PM.', aside: 'From ad server migrations to leading product for the platform behind the revenue.' },
  toolbox: { num: '06', label: 'Toolbox', lead: 'How I get from idea', accent: 'to shipped.' },
  writing: { num: '07', label: 'Writing & talks', lead: 'Thinking', accent: 'out loud.' },
  contact: { num: '08', label: 'Let’s connect', lead: 'Building B2B SaaS or AI products?', accent: 'Let’s talk.' },
};

export const closing = {
  titleLead: 'Have a revenue problem',
  titleAccent: 'worth solving?',
};

export const contactIntro =
  'Happy to talk B2B SaaS, agentic AI, ad tech, or anything in this portfolio. Based in Mumbai and Bangalore.';
