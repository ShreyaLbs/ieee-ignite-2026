// =========================================================
// IEEE IGNITE — script.js
// Sample data only — content doesn't matter per task brief.
// =========================================================

const EVENTS = [
  {
    name: "Web Development Workshop",
    category: "technical",
    desc: "Build and deploy a responsive site from scratch using HTML, CSS, and JavaScript.",
    time: "10:00 – 11:30",
    venue: "Lab 1",
  },
  {
    name: "AI & Machine Learning Session",
    category: "technical",
    desc: "A hands-on walkthrough of training a simple classifier and reading a confusion matrix.",
    time: "11:45 – 13:00",
    venue: "Lab 2",
  },
  {
    name: "Coding Challenge",
    category: "technical",
    desc: "Timed algorithmic problems, solo or in pairs, judged on correctness and speed.",
    time: "14:00 – 16:00",
    venue: "Computer Centre",
  },
  {
    name: "Resume Building",
    category: "professional",
    desc: "Turn your projects and coursework into a resume recruiters actually read.",
    time: "10:00 – 11:00",
    venue: "Seminar Hall A",
  },
  {
    name: "LinkedIn & Networking Workshop",
    category: "professional",
    desc: "Profile teardown, headline rewrites, and a practical guide to cold outreach.",
    time: "11:15 – 12:15",
    venue: "Seminar Hall A",
  },
  {
    name: "Career Guidance Talk",
    category: "professional",
    desc: "An open Q&A with working engineers on internships, interviews, and early-career moves.",
    time: "13:00 – 14:00",
    venue: "Main Auditorium",
  },
  {
    name: "Tech Quiz",
    category: "interactive",
    desc: "Buzzer-round quiz covering CS fundamentals, current tech, and IEEE trivia.",
    time: "14:15 – 15:15",
    venue: "Main Auditorium",
  },
  {
    name: "Innovation Pitch",
    category: "interactive",
    desc: "Three minutes, one slide, one idea. Pitch to a panel of judges for feedback.",
    time: "15:30 – 16:45",
    venue: "Seminar Hall B",
  },
  {
    name: "Problem-Solving Challenge",
    category: "interactive",
    desc: "Cross-disciplinary puzzles that reward lateral thinking over raw speed.",
    time: "17:00 – 18:00",
    venue: "Seminar Hall B",
  },
];

const FAQS = [
  {
    q: "Who can participate in IEEE Ignite?",
    a: "Ignite is open to all students, regardless of branch or year. Some sessions assume basic programming familiarity; this is noted on each event card.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. Ignite is free for all IEEE SB LBSITW members and a nominal fee applies for non-members, covering refreshments and materials.",
  },
  {
    q: "Can I attend more than one event?",
    a: "Yes. The schedule is designed with minimal overlap so you can move between tracks across the day.",
  },
  {
    q: "Will certificates be provided?",
    a: "Yes, e-certificates are issued to all participants within a week of the event, and to winners of competitive sessions separately.",
  },
  {
    q: "What should I bring?",
    a: "A laptop for the technical sessions (Web Development Workshop, AI & ML Session, Coding Challenge) and a notebook for everything else.",
  },
];

// ---------------------------------------------------------
// Render: Event cards
// ---------------------------------------------------------
const eventsGrid = document.getElementById("eventsGrid");
const noResults = document.getElementById("noResults");

function renderEvents() {
  eventsGrid.innerHTML = EVENTS.map((ev, i) => `
    <article class="event-card" data-category="${ev.category}" data-name="${ev.name.toLowerCase()}" data-index="${i}">
      <span class="event-tag ${ev.category}">${ev.category}</span>
      <h3>${ev.name}</h3>
      <p>${ev.desc}</p>
      <div class="event-foot">
        <span>${ev.time}</span>
        <span>${ev.venue}</span>
      </div>
    </article>
  `).join("");
}
renderEvents();

// ---------------------------------------------------------
// Filtering + Search
// ---------------------------------------------------------
const filterGroup = document.getElementById("filterGroup");
const searchInput = document.getElementById("eventSearch");
let activeFilter = "all";

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = eventsGrid.querySelectorAll(".event-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.name.includes(query);
    const isVisible = matchesCategory && matchesSearch;
    card.classList.toggle("hidden", !isVisible);
    if (isVisible) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
}

filterGroup.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterGroup.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  applyFilters();
});

searchInput.addEventListener("input", applyFilters);

// ---------------------------------------------------------
// Render: Schedule timeline
// ---------------------------------------------------------
const timeline = document.getElementById("timeline");

function renderTimeline() {
  timeline.innerHTML = EVENTS
    .slice()
    .sort((a, b) => a.time.localeCompare(b.time))
    .map((ev) => `
      <div class="timeline-item">
        <div class="timeline-time">${ev.time}</div>
        <div class="timeline-title">${ev.name}</div>
        <div class="timeline-desc">${ev.venue} · ${ev.category.charAt(0).toUpperCase() + ev.category.slice(1)}</div>
      </div>
    `).join("");
}
renderTimeline();

// ---------------------------------------------------------
// Render: FAQ accordion
// ---------------------------------------------------------
const faqList = document.getElementById("faqList");

function renderFAQ() {
  faqList.innerHTML = FAQS.map((item, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">
        <span>${item.q}</span>
        <span class="faq-icon"></span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <p>${item.a}</p>
      </div>
    </div>
  `).join("");
}
renderFAQ();

faqList.addEventListener("click", (e) => {
  const question = e.target.closest(".faq-question");
  if (!question) return;
  const item = question.closest(".faq-item");
  const answer = item.querySelector(".faq-answer");
  const isOpen = item.classList.contains("open");

  if (isOpen) {
    item.classList.remove("open");
    question.setAttribute("aria-expanded", "false");
    answer.style.maxHeight = null;
  } else {
    item.classList.add("open");
    question.setAttribute("aria-expanded", "true");
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
});

// ---------------------------------------------------------
// Nav: mobile toggle + smooth scroll + active link on scroll
// ---------------------------------------------------------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let currentId = sections[0].id;
  const scrollPos = window.scrollY + 140;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinkEls.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === currentId);
  });
}

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();