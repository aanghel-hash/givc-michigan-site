/* =====================================================================
   GIRLS INTO VC — MICHIGAN CHAPTER · SITE CONTENT
   =====================================================================
   This is the ONLY file you need to edit to update the website.
   Everything you see on the site (events, e-board, links, FAQ) comes
   from here. The design lives in other files — you don't touch those.

   HOW TO EDIT SAFELY
   • Only change the text between quote marks:  "like this"
   • Keep every comma at the end of a line — a missing comma breaks the site.
   • Dates are always written  "YYYY-MM-DD"  (for example "2026-11-13").
   • After you save, open the site and refresh to check your change.
   ===================================================================== */

window.SITE = {

  /* ---------- 1. BASICS ---------- */
  chapter: {
    name: "Girls Into VC — Michigan Chapter",
    school: "at the University of Michigan",
    founded: 2025,
    tagline: "Where Michigan women learn, meet, and break into investing.",
    email: "aanghel@umich.edu",            // ← change to a shared inbox anytime
    instagramHandle: "@girlsintovc.michigan",
    instagramUrl: "https://www.instagram.com/girlsintovc.michigan/",
    nationalUrl: "https://www.girlsintovc.com/",
    joinFormUrl: "https://forms.gle/rvtSdjm9LAFyhn7q7",
    // Shown in Programs and the FAQ. Swap in the real time and room when ready,
    // e.g. "Tuesdays, 7–8 PM · Ross R2240"
    meetingInfo: "Tuesday nights · details sent after you join"
  },

  /* ---------- 2. HERO PHOTOS (the polaroid collage at the top) ----------
     Exactly 3 photos look best. "note" is the handwritten word on the tape. */
  heroPhotos: [
    { src: "images/photos/tabling.webp",  note: "learn",  alt: "Two GIVC Michigan e-board members tabling with chapter posters" },
    { src: "images/photos/meeting.webp",  note: "meet",   alt: "Three GIVC Michigan e-board members in front of a slide on women in venture capital" },
    { src: "images/photos/flyers.webp",   note: "invest", alt: "Two GIVC Michigan e-board members holding Girls Into VC flyers" }
  ],

  /* ---------- 3. ABOUT ---------- */
  about: {
    mission: "We help Michigan women build real investment judgment across venture capital, growth equity, and private equity. Our members learn by doing, through hands-on projects, investor panels, and a community that makes breaking into the buy side feel possible.",
    national: "We’re the University of Michigan chapter of Girls Into VC, a global organization founded to close the gender gap in venture capital. As one of its campus chapters, we bring national resources, programming, and community to Michigan students."
  },

  /* ---------- 4. INDUSTRY STATS (About section) ----------
     value = the number that counts up. Keep sources linked. */
  stats: [
    { value: 22, decimals: 0, suffix: "%",
      label: "of U.S. private equity investment professionals are women",
      note: "and just 6% at the senior level",
      source: "Columbia Business School · data 2021–2023",
      sourceUrl: "https://business.columbia.edu/research-brief/closing-gender-gap-private-equity-women-leadership" },
    { value: 53, decimals: 0, suffix: "%",
      label: "of U.S. PE firms studied have no women in senior investment roles",
      note: "349 of 661 firms",
      source: "Columbia Business School · data 2021–2023",
      sourceUrl: "https://business.columbia.edu/research-brief/closing-gender-gap-private-equity-women-leadership" },
    { value: 18, decimals: 0, suffix: "%",
      label: "of partners, principals, and MDs at U.S. VC firms are women",
      note: "firms with $50M+ in assets",
      source: "PitchBook · 2025",
      sourceUrl: "https://refreshmiami.com/news/female-funding-sets-record-nationally-but-theres-more-to-this-story/" },
    { value: 27.7, decimals: 1, suffix: "%",
      label: "of U.S. VC dollars went to companies with a female founder in 2025",
      note: "a record, though two AI megadeals skew it, and deal count fell for the fourth year",
      source: "PitchBook via Fortune · 2026",
      sourceUrl: "https://www.fortune.com/2026/03/06/venture-dollars-female-founders-pitchbook-ai" }
  ],

  /* ---------- 5. PROGRAMS ---------- */
  programs: {
    intro: "Our curriculum starts with a broad overview of alternative assets, then goes deep on private equity and venture capital, including the growth equity space in between. Everyone learns together, and every session pairs a short lesson with a hands-on exercise, so you build real investment judgment, not just a list of buzzwords.",
    // icon options: mic, coffee, briefcase, confetti, globe, star
    other: [
      { icon: "mic",       title: "Panel series",       text: "Three panels a semester with investors and founders. Open to everyone." },
      { icon: "coffee",    title: "Coffee chats",       text: "Small-group and 1:1 chats with upperclassmen and alumni in VC, growth equity, and PE." },
      { icon: "briefcase", title: "Recruiting prep",    text: "Resume reviews, deal discussion practice, and recruiting timelines, built on the deals you pitch." },
      { icon: "confetti",  title: "Socials",            text: "Low-key hangouts to meet members outside of Tuesday sessions." },
      { icon: "globe",     title: "National summits",   text: "Access to Girls Into VC summits and a network of chapters around the world." },
      { icon: "star",      title: "National fellowship", text: "Girls Into VC runs a national fellowship with speakers and a rigorous curriculum.", link: "https://www.girlsintovc.com/fellowship", linkText: "Learn about the fellowship" }
    ],
    comingSoon: "Coming as we grow: real estate, private credit, asset management, and investor relations."
  },

  /* ---------- 6. FALL SESSION TIMELINE ----------
     Sessions grey out automatically once their date passes. */
  sessions: [
    { date: "2026-10-06", title: "Intro to private markets and investing", topic: "Public vs. private markets, VC vs. growth vs. buyout, fund structure, MOIC and IRR.", deliverable: "None, it’s the foundation" },
    { date: "2026-10-13", title: "How investors find opportunities", topic: "Thematic investing, market sizing, and market mapping by segment and stage.", deliverable: "Market Opportunity Map" },
    { date: "2026-10-27", title: "How to evaluate a company", topic: "Business models, moats, unit economics, and quality of revenue.", deliverable: "Company Snapshot" },
    { date: "2026-11-03", title: "The investment process", topic: "The deal funnel, minority vs. control, check sizes, and fund criteria.", deliverable: "Investment Strategy Fit" },
    { date: "2026-11-10", title: "Due diligence", topic: "Building a thesis, what must be true, and diligence workstreams.", deliverable: "One-Page Investment Thesis" },
    { date: "2026-11-17", title: "Value creation and portfolio strategy", topic: "Growth levers, 100-day plans, and exit routes.", deliverable: "Value Creation Plan" },
    { date: "2026-12-08", title: "Pitch Day", topic: "Teams pitch to an investment committee of alumni and professionals.", deliverable: "Final IC Pitch" }
  ],

  /* ---------- 9. E-BOARD ----------
     HOW TO ADD A MEMBER: copy one { ... } block and fill it in.
     Put the headshot in images/eboard/ (square photos work best).
     year, major, and bio are optional; leave "" to skip. Order here = order on site. */
  eboard: [
    { name: "Alissia Anghel",     role: "Founder & Co-President, Education", photo: "images/eboard/alissia.webp",   linkedin: "https://www.linkedin.com/in/alissia-anghel/",            year: "", major: "", bio: "" },
    { name: "Suzanna Mettelman",  role: "Founder & Co-President, Education", photo: "images/eboard/suzanna.webp",   linkedin: "https://www.linkedin.com/in/suzanna-mettelman/",         year: "", major: "", bio: "" },
    { name: "Grace Gara",         role: "VP Operations",                     photo: "images/eboard/grace.webp",     linkedin: "https://www.linkedin.com/in/grace-parker-gara/",         year: "", major: "", bio: "" },
    { name: "Talia Cooper",       role: "VP Professional Development",       photo: "images/eboard/talia.webp",     linkedin: "https://www.linkedin.com/in/talia-cooper-8a7b58280/",    year: "", major: "", bio: "" },
    { name: "Francesca Santori",  role: "VP External",                       photo: "images/eboard/francesca.webp", linkedin: "https://www.linkedin.com/in/francesca-santori-4469602b2/", year: "", major: "", bio: "" },
    { name: "Naima Prusaitis",    role: "VP External",                       photo: "images/eboard/naima.webp",     linkedin: "https://www.linkedin.com/in/naima-prusaitis/",           year: "", major: "", bio: "" }
  ],

  /* ---------- 10. RESOURCES ---------- */
  resources: [
    { icon: "podcast", title: "The Girls Into VC podcast", text: "Conversations with investors and founders from the national team.", url: "https://www.girlsintovc.com/podcast", cta: "Listen" },
    { icon: "pen",     title: "The Girls Into VC blog",    text: "Essays and explainers on venture capital, published on Medium.", url: "https://medium.com/@girlsintovc", cta: "Read" },
    { icon: "mail",    title: "The weekly newsletter",     text: "VC tips, opportunities, and resources in your inbox every week.", url: "https://girlsintovc.beehiiv.com/", cta: "Subscribe" }
  ],

  /* ---------- 11. JOIN ---------- */
  join: {
    steps: [
      { title: "Fill out the interest form", text: "Takes two minutes. You’re in once it’s submitted." },
      { title: "Come to a Tuesday session", text: "We’ll send the time and place. No prep needed." },
      { title: "Join a project team", text: "Build a real investment pitch with 2–3 other members." }
    ],
    checklist: ["Any U-M student", "Any major", "Any year", "No experience needed", "No dues"],
    // icon options: book, chart, mic, coffee, globe
    perks: [
      { icon: "book",   title: "PE and VC curriculum", text: "Weekly sessions that take you from the basics to running a real investment process." },
      { icon: "chart",  title: "A pitch you built",    text: "A semester project you present to alumni judges, and a deal to talk about in interviews." },
      { icon: "mic",    title: "Panels and speakers",  text: "Hear from women investors and founders, and ask them your questions." },
      { icon: "coffee", title: "Coffee chats and prep", text: "Small-group chats with alumni plus resume and recruiting help." },
      { icon: "globe",  title: "A national network",   text: "Access to Girls Into VC chapters, summits, and resources." }
    ]
  },

  /* ---------- 12. FAQ ---------- */
  faq: [
    { q: "Do I need finance or VC experience to join?", a: "No. Our curriculum starts from the basics, and members come from every major." },
    { q: "Is it only for business students?", a: "No. GIVC Michigan is open to any University of Michigan student, any major, any year." },
    { q: "Are there dues?", a: "No, membership is free." },
    { q: "How do I join?", a: "Fill out our interest form. Membership is open, so you can join anytime." },
    { q: "When and where do you meet?", a: "Education sessions are on Tuesday nights. Details are shared after you fill out the interest form." },
    { q: "What’s the time commitment?", a: "One weekly Tuesday session, plus team time on the semester project, which builds to Pitch Day in December." },
    { q: "Can I come to panels if I’m not a member?", a: "Yes, all of our panels are open to everyone." },
    { q: "How is this connected to the national Girls Into VC?", a: "We’re the University of Michigan chapter of Girls Into VC, so members get access to the national network, resources, and summits." }
  ],

  /* ---------- 13. INSTAGRAM STRIP (near the bottom) ---------- */
  instagramPhotos: [
    { src: "images/photos/meeting.webp", alt: "GIVC Michigan e-board members at a chapter meeting" },
    { src: "images/photos/flyers.webp",  alt: "GIVC Michigan e-board members holding flyers" },
    { src: "images/photos/tabling.webp", alt: "GIVC Michigan e-board members tabling on campus" }
  ]
};
