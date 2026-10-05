/**
 * DIU NFE 241B - REALISTIC & CUTE ANIMATED ROUTINE APP
 * Pure Card View with Rich Realistic SVGs & Live Class Tracker
 */

const TIME_SLOTS = [
  { id: 1, label: "Slot 1", start: "08:20", end: "09:50", display: "08:20 - 09:50", startMin: 8 * 60 + 20, endMin: 9 * 60 + 50 },
  { id: 2, label: "Slot 2", start: "09:50", end: "11:20", display: "09:50 - 11:20", startMin: 9 * 60 + 50, endMin: 11 * 60 + 20 },
  { id: 3, label: "Slot 3", start: "11:20", end: "12:50", display: "11:20 - 12:50", startMin: 11 * 60 + 20, endMin: 12 * 60 + 50 },
  { id: 4, label: "Slot 4", start: "13:10", end: "14:40", display: "01:10 - 02:40", startMin: 13 * 60 + 10, endMin: 14 * 60 + 40 },
  { id: 5, label: "Slot 5", start: "14:40", end: "16:10", display: "02:40 - 04:10", startMin: 14 * 60 + 40, endMin: 16 * 60 + 10 }
];

const WEEK_DAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Realistic Multi-Layered Subject SVGs with Gradients & Depth
const SUBJECT_THEMES = {
  "Nutrition Education": {
    code: "NFE",
    color: "#047857",
    bg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
    border: "#a7f3d0",
    icon: `
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <defs>
          <linearGradient id="appleGrad" x1="6" y1="8" x2="26" y2="28" gradientUnits="userSpaceOnUse">
            <stop stop-color="#10b981"/>
            <stop offset="1" stop-color="#047857"/>
          </linearGradient>
          <linearGradient id="leafGrad" x1="16" y1="2" x2="24" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="#34d399"/>
            <stop offset="1" stop-color="#059669"/>
          </linearGradient>
        </defs>
        <path d="M16 8C16 5 18 3 20 2" stroke="#78350f" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M16 6C18 3 24 3 24 8C20 9 17 8 16 6Z" fill="url(#leafGrad)"/>
        <path d="M16 11C13 8 7 9 7 16C7 23 12 28 16 28C20 28 25 23 25 16C25 9 19 8 16 11Z" fill="url(#appleGrad)"/>
        <ellipse cx="11.5" cy="14" rx="2.5" ry="4" transform="rotate(-25 11.5 14)" fill="#ffffff" fill-opacity="0.38"/>
      </svg>
    `
  },
  "Environment": {
    code: "ENV",
    color: "#0f766e",
    bg: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
    border: "#99f6e4",
    icon: `
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <defs>
          <linearGradient id="envLeafGrad1" x1="8" y1="4" x2="26" y2="26" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2dd4bf"/>
            <stop offset="1" stop-color="#0f766e"/>
          </linearGradient>
          <linearGradient id="envLeafGrad2" x1="6" y1="12" x2="18" y2="24" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5eead4"/>
            <stop offset="1" stop-color="#14b8a6"/>
          </linearGradient>
        </defs>
        <path d="M26 6C26 6 18 5 12 11C6.5 16.5 7 24 7 24C7 24 14.5 24.5 20 19C26 13 26 6 26 6Z" fill="url(#envLeafGrad1)"/>
        <path d="M7 25C11 21 16 16 23 9" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.6"/>
        <path d="M7 24C9 18 15 17 17 21C14 23 10 24 7 24Z" fill="url(#envLeafGrad2)"/>
        <path d="M18 10C22 7 24 7 24 7C24 7 24 9 21 13C19 11 18 10 18 10Z" fill="#ffffff" fill-opacity="0.32"/>
      </svg>
    `
  },
  "Packaging": {
    code: "PKG",
    color: "#c2410c",
    bg: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
    border: "#fed7aa",
    icon: `
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <defs>
          <linearGradient id="boxTop" x1="16" y1="4" x2="16" y2="15" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fed7aa"/>
            <stop offset="1" stop-color="#fdba74"/>
          </linearGradient>
          <linearGradient id="boxLeft" x1="4" y1="11" x2="16" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#f97316"/>
            <stop offset="1" stop-color="#c2410c"/>
          </linearGradient>
          <linearGradient id="boxRight" x1="16" y1="11" x2="28" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#ea580c"/>
            <stop offset="1" stop-color="#9a3412"/>
          </linearGradient>
        </defs>
        <path d="M16 4L27 10L16 16L5 10L16 4Z" fill="url(#boxTop)"/>
        <path d="M5 10L16 16V28L5 22V10Z" fill="url(#boxLeft)"/>
        <path d="M16 16L27 10V22L16 28V16Z" fill="url(#boxRight)"/>
        <path d="M16 4L16 16L20 18V26L16 28L12 26V18L16 16Z" fill="#fef3c7" fill-opacity="0.8"/>
        <path d="M5 10L16 16L27 10" stroke="#ffedd5" stroke-width="0.8" stroke-opacity="0.6"/>
      </svg>
    `
  },
  "Emergency": {
    code: "EMG",
    color: "#be123c",
    bg: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
    border: "#fecdd3",
    icon: `
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <defs>
          <linearGradient id="emgDome" x1="16" y1="4" x2="16" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fb7185"/>
            <stop offset="1" stop-color="#e11d48"/>
          </linearGradient>
          <linearGradient id="emgBase" x1="6" y1="21" x2="26" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#94a3b8"/>
            <stop offset="1" stop-color="#475569"/>
          </linearGradient>
        </defs>
        <ellipse cx="16" cy="24" rx="10" ry="3.5" fill="url(#emgBase)"/>
        <rect x="7" y="21" width="18" height="3" rx="1" fill="#64748b"/>
        <path d="M8 21C8 13 11 6 16 6C21 6 24 13 24 21H8Z" fill="url(#emgDome)"/>
        <path d="M16 11V17M13 14H19" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M11 11C11 8 13 7 15 7C14 8 13 11 13 15C13 17 13.5 19 14 20H11C11 17 11 14 11 11Z" fill="#ffffff" fill-opacity="0.45"/>
      </svg>
    `
  },
  "Lab": {
    code: "LAB",
    color: "#6b21a8",
    bg: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
    border: "#e9d5ff",
    icon: `
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <defs>
          <linearGradient id="flaskLiquid" x1="6" y1="16" x2="26" y2="28" gradientUnits="userSpaceOnUse">
            <stop stop-color="#c084fc"/>
            <stop offset="1" stop-color="#7c3aed"/>
          </linearGradient>
          <linearGradient id="flaskGlass" x1="10" y1="4" x2="22" y2="28" gradientUnits="userSpaceOnUse">
            <stop stop-color="#e9d5ff" stop-opacity="0.85"/>
            <stop offset="1" stop-color="#c084fc" stop-opacity="0.35"/>
          </linearGradient>
        </defs>
        <path d="M13 4H19V10L26 23C27 25 25.5 27 23.5 27H8.5C6.5 27 5 25 6 23L13 10V4Z" fill="url(#flaskGlass)" stroke="#7c3aed" stroke-width="1.8" stroke-linejoin="round"/>
        <rect x="12" y="3" width="8" height="2" rx="1" fill="#7c3aed"/>
        <path d="M9 20L8.5 27H23.5L23 20C21 21 19 19 16 20C13 21 11 19 9 20Z" fill="url(#flaskLiquid)"/>
        <circle cx="13" cy="23" r="1.5" fill="#f3e8ff"/>
        <circle cx="18" cy="22" r="1" fill="#f3e8ff"/>
        <circle cx="15.5" cy="18" r="1.2" fill="#f3e8ff" fill-opacity="0.75"/>
        <path d="M10 24L14 12V6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.6"/>
      </svg>
    `
  },
  "Default": {
    code: "CLS",
    color: "#0284c7",
    bg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    border: "#bae6fd",
    icon: `
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <defs>
          <linearGradient id="bookGrad" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
            <stop stop-color="#38bdf8"/>
            <stop offset="1" stop-color="#0284c7"/>
          </linearGradient>
        </defs>
        <path d="M6 6C6 6 11 5 16 8C21 5 26 6 26 6V23C26 23 21 22 16 25C11 22 6 23 6 23V6Z" fill="url(#bookGrad)"/>
        <path d="M16 8V25" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `
  }
};

// Realistic Pin SVG
const REALISTIC_PIN_SVG = `
  <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
    <defs>
      <linearGradient id="pinGrad" x1="4" y1="2" x2="16" y2="18" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0ea5e9"/>
        <stop offset="1" stop-color="#0284c7"/>
      </linearGradient>
    </defs>
    <path d="M10 2C6.13 2 3 5.13 3 9C3 13.5 10 18.5 10 18.5C10 18.5 17 13.5 17 9C17 5.13 13.87 2 10 2Z" fill="url(#pinGrad)"/>
    <circle cx="10" cy="8.5" r="2.8" fill="#ffffff"/>
    <ellipse cx="7.5" cy="6" rx="1.2" ry="1.8" transform="rotate(-30 7.5 6)" fill="#ffffff" fill-opacity="0.45"/>
  </svg>
`;

// Realistic Building SVG
const REALISTIC_BLDG_SVG = `
  <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
    <defs>
      <linearGradient id="bldgGrad" x1="2" y1="3" x2="18" y2="19" gradientUnits="userSpaceOnUse">
        <stop stop-color="#64748b"/>
        <stop offset="1" stop-color="#334155"/>
      </linearGradient>
    </defs>
    <rect x="3" y="4" width="14" height="14" rx="2" fill="url(#bldgGrad)"/>
    <rect x="5.5" y="6.5" width="2" height="2" rx="0.5" fill="#f8fafc"/>
    <rect x="9" y="6.5" width="2" height="2" rx="0.5" fill="#f8fafc"/>
    <rect x="12.5" y="6.5" width="2" height="2" rx="0.5" fill="#f8fafc"/>
    <rect x="5.5" y="10.5" width="2" height="2" rx="0.5" fill="#f8fafc"/>
    <rect x="9" y="10.5" width="2" height="2" rx="0.5" fill="#f8fafc"/>
    <rect x="12.5" y="10.5" width="2" height="2" rx="0.5" fill="#f8fafc"/>
    <path d="M8.5 18V14.5C8.5 14.2 8.7 14 9 14H11C11.3 14 11.5 14.2 11.5 14.5V18" fill="#bae6fd"/>
  </svg>
`;

// Realistic Duration Clock SVG
const REALISTIC_DURATION_SVG = `
  <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
    <circle cx="10" cy="10" r="7.5" fill="#f8fafc" stroke="#0284c7" stroke-width="1.6"/>
    <path d="M10 6.5V10L12.5 11.5" stroke="#0284c7" stroke-width="1.6" stroke-linecap="round"/>
  </svg>
`;

// Section 241-B Routine Mapping
const ROUTINE_DATA = {
  "Saturday": [
    { slotId: 1, subject: "Nutrition Education", room: "AB-1: 303", building: "AB-1" },
    null,
    null,
    { slotId: 4, subject: "Nutrition Education", room: "AB-1: 303", building: "AB-1" },
    null
  ],
  "Sunday": [null, null, null, null, null],
  "Monday": [
    { slotId: 1, subject: "Environment", room: "AB-2: 102", building: "AB-2" },
    null, null, null, null
  ],
  "Tuesday": [
    null,
    { slotId: 2, subject: "Environment", room: "AB-2: 102", building: "AB-2" },
    { slotId: 3, subject: "Packaging", room: "AB-2: 102", building: "AB-2" },
    { slotId: 4, subject: "Emergency", room: "AB-1: 503", building: "AB-1" },
    null
  ],
  "Wednesday": [
    null,
    { slotId: 2, subject: "Emergency", room: "AB-1: 503", building: "AB-1" },
    { slotId: 3, subject: "Lab", room: "AB: 101", building: "AB" },
    { slotId: 4, subject: "Lab", room: "AB: 101", building: "AB" },
    { slotId: 5, subject: "Packaging", room: "AB-1: 204", building: "AB-1" }
  ],
  "Thursday": [null, null, null, null, null],
  "Friday": [null, null, null, null, null]
};

// App State
const state = {
  selectedDay: null
};

// DOM References
const currentTimeEl = document.getElementById("currentTime");
const currentDateEl = document.getElementById("currentDate");
const radarCard = document.getElementById("radarCard");
const radarStatusWrap = document.getElementById("radarStatusWrap");
const radarStatusBadge = document.getElementById("radarStatusBadge");
const radarMeta = document.getElementById("radarMeta");
const radarSubject = document.getElementById("radarSubject");
const radarSubjectIcon = document.getElementById("radarSubjectIcon");
const radarRoom = document.getElementById("radarRoom");
const radarTime = document.getElementById("radarTime");
const radarProgressWrap = document.getElementById("radarProgressWrap");
const radarProgressBar = document.getElementById("radarProgressBar");
const progressElapsedText = document.getElementById("progressElapsedText");
const progressRemainingText = document.getElementById("progressRemainingText");
const radarNextCard = document.getElementById("radarNextCard");
const tickerTrack = document.getElementById("tickerTrack");

const dayTabsContainer = document.getElementById("dayTabs");
const cardsGrid = document.getElementById("cardsGrid");
const activeDayHeading = document.getElementById("activeDayHeading");
const activeDayPill = document.getElementById("activeDayPill");
const daySummaryStat = document.getElementById("daySummaryStat");

/**
 * Returns current real date and time information
 */
function getActiveDateTime() {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const totalMinutes = hours * 60 + minutes + (seconds / 60);

  return {
    dateObj: now,
    dayName,
    hours,
    minutes,
    seconds,
    totalMinutes
  };
}

/**
 * Format 12-hour time
 */
function formatTime12(hours, minutes, seconds = null) {
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const h12 = hours % 12 || 12;
  const mm = String(minutes).padStart(2, '0');
  if (seconds !== null) {
    const ss = String(seconds).padStart(2, '0');
    return `${String(h12).padStart(2, '0')}:${mm}:${ss} ${ampm}`;
  }
  return `${String(h12).padStart(2, '0')}:${mm} ${ampm}`;
}

/**
 * Update the Live Clock
 */
function updateClock(dt) {
  currentTimeEl.textContent = formatTime12(dt.hours, dt.minutes, dt.seconds);
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  currentDateEl.textContent = dt.dateObj.toLocaleDateString('en-US', options);
}

/**
 * Retrieve Schedule for specific day
 */
function getDaySchedule(dayName) {
  const dayList = ROUTINE_DATA[dayName] || [];
  const schedule = [];
  
  dayList.forEach((cls, index) => {
    if (cls) {
      const slot = TIME_SLOTS[index];
      const theme = SUBJECT_THEMES[cls.subject] || SUBJECT_THEMES["Default"];
      schedule.push({
        ...cls,
        slot,
        theme,
        startMin: slot.startMin,
        endMin: slot.endMin,
        displayTime: slot.display
      });
    }
  });

  return schedule;
}

/**
 * Find next upcoming class:
 * 1. Checks if any remaining class exists TODAY after currentMinutes.
 * 2. If no remaining class today, finds tomorrow's (or next class day's) first class.
 */
function findNextUpcomingClass(fromDayName, currentMinutes) {
  const dayIndex = WEEK_DAYS.indexOf(fromDayName);
  
  // 1. Any remaining classes today?
  const todayClasses = getDaySchedule(fromDayName);
  for (const c of todayClasses) {
    if (c.startMin > currentMinutes) {
      return {
        classItem: c,
        dayName: fromDayName,
        isToday: true,
        isTomorrow: false,
        daysAway: 0,
        minutesUntil: c.startMin - currentMinutes
      };
    }
  }

  // 2. Otherwise: check future days (tomorrow = 1, day after = 2, etc.)
  for (let i = 1; i <= 7; i++) {
    const nextIdx = (dayIndex + i) % 7;
    const nextDay = WEEK_DAYS[nextIdx];
    const nextDayClasses = getDaySchedule(nextDay);
    if (nextDayClasses.length > 0) {
      return {
        classItem: nextDayClasses[0],
        dayName: nextDay,
        isToday: false,
        isTomorrow: (i === 1),
        daysAway: i,
        minutesUntil: null
      };
    }
  }

  return null;
}

/**
 * Update Live Class Hero Radar Card
 */
function updateLiveRadar(dt) {
  const dayName = dt.dayName;
  const currentMin = dt.totalMinutes;
  const todaySchedule = getDaySchedule(dayName);

  const liveClass = todaySchedule.find(c => currentMin >= c.startMin && currentMin < c.endMin);
  const nextInfo = findNextUpcomingClass(dayName, currentMin);

  radarStatusWrap.className = "live-status-pill";

  if (liveClass) {
    if (radarCard) radarCard.className = "live-hero-card is-live-active";
    radarStatusWrap.classList.add("live");
    radarStatusBadge.textContent = "LIVE CLASS NOW";
    radarMeta.textContent = `Ends at ${liveClass.slot.end}`;
    
    radarSubject.textContent = liveClass.subject;
    radarSubjectIcon.innerHTML = liveClass.theme.icon;
    radarSubjectIcon.style.background = liveClass.theme.bg;
    radarSubjectIcon.style.border = `1px solid ${liveClass.theme.border}`;

    radarRoom.innerHTML = `${REALISTIC_PIN_SVG}<span>Room: ${liveClass.room}</span>`;
    radarTime.innerHTML = `${REALISTIC_DURATION_SVG}<span>${liveClass.displayTime}</span>`;

    const totalDuration = liveClass.endMin - liveClass.startMin;
    const elapsed = currentMin - liveClass.startMin;
    const remaining = Math.max(0, Math.ceil(liveClass.endMin - currentMin));
    const percent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

    radarProgressWrap.style.display = "flex";
    radarProgressBar.style.width = `${percent}%`;
    progressElapsedText.textContent = `${Math.floor(elapsed)}m done`;
    progressRemainingText.textContent = `${remaining}m left`;
  } else {
    radarProgressWrap.style.display = "none";

    radarSubjectIcon.innerHTML = SUBJECT_THEMES["Default"].icon;
    radarSubjectIcon.style.background = SUBJECT_THEMES["Default"].bg;
    radarSubjectIcon.style.border = `1px solid ${SUBJECT_THEMES["Default"].border}`;

    if (todaySchedule.length === 0) {
      if (radarCard) radarCard.className = "live-hero-card is-off-active";
      radarStatusWrap.classList.add("off");
      radarStatusBadge.textContent = "CAMPUS OFF";
      radarMeta.textContent = "Relax & Recharge";
      radarSubject.textContent = `No classes on ${dayName}`;
      radarRoom.innerHTML = `<span>✨ Free Day</span>`;
      radarTime.innerHTML = `<span>No lectures</span>`;
    } else if (currentMin < todaySchedule[0].startMin) {
      if (radarCard) radarCard.className = "live-hero-card is-next-active";
      radarStatusWrap.classList.add("next");
      radarStatusBadge.textContent = "UPCOMING TODAY";
      const startIn = Math.ceil(todaySchedule[0].startMin - currentMin);
      radarMeta.textContent = startIn > 60 ? `Starts in ${Math.floor(startIn/60)}h ${startIn%60}m` : `Starts in ${startIn} mins`;
      radarSubject.textContent = todaySchedule[0].subject;
      radarSubjectIcon.innerHTML = todaySchedule[0].theme.icon;
      radarSubjectIcon.style.background = todaySchedule[0].theme.bg;
      radarSubjectIcon.style.border = `1px solid ${todaySchedule[0].theme.border}`;

      radarRoom.innerHTML = `${REALISTIC_PIN_SVG}<span>Room: ${todaySchedule[0].room}</span>`;
      radarTime.innerHTML = `${REALISTIC_DURATION_SVG}<span>Starts ${todaySchedule[0].slot.start} AM</span>`;
    } else if (currentMin >= todaySchedule[todaySchedule.length - 1].endMin) {
      if (radarCard) radarCard.className = "live-hero-card is-done-active";
      radarStatusWrap.classList.add("off");
      radarStatusBadge.textContent = "DONE TODAY";
      radarMeta.textContent = "All classes over";
      radarSubject.textContent = "All classes done for today!";
      radarRoom.innerHTML = `<span>🎉 Day Complete</span>`;
      radarTime.innerHTML = `<span>See you next session</span>`;
    } else {
      if (radarCard) radarCard.className = "live-hero-card is-next-active";
      radarStatusWrap.classList.add("next");
      radarStatusBadge.textContent = "BREAK TIME";
      radarMeta.textContent = "Interval";
      radarSubject.textContent = "Interval / Break";
      radarRoom.innerHTML = `<span>☕ Relax</span>`;
      radarTime.innerHTML = `<span>Next class soon</span>`;
    }
  }

  // Up Next Smooth News Ticker
  updateNewsTicker(nextInfo, dayName, currentMin);
}

let lastTickerKey = "";

/**
 * Updates the Up Next News Ticker cleanly:
 * - If remaining classes exist today, shows the next upcoming class today with countdown.
 * - If today's classes are finished or campus is off today, shows tomorrow's (or next class day's) first class.
 * - Displays clean, relevant class information (Subject, Time, Room, Building) without clutter.
 * - Uses twin duplicate sets for 100% seamless, continuous 60fps infinite marquee looping.
 */
function updateNewsTicker(nextInfo, dayName, currentMin) {
  if (!radarNextCard || !tickerTrack) return;

  if (!nextInfo) {
    radarNextCard.style.display = "none";
    return;
  }

  radarNextCard.style.display = "flex";

  const cls = nextInfo.classItem;
  let badgeLabel = "";
  let badgeClass = "";
  let timeLabel = "";

  if (nextInfo.isToday) {
    const mins = Math.ceil(nextInfo.minutesUntil);
    const countdown = mins < 60 ? `in ${mins}m` : `in ${Math.floor(mins / 60)}h ${mins % 60}m`;
    badgeLabel = `TODAY • ${countdown}`;
    badgeClass = "green";
    timeLabel = `${cls.displayTime}`;
  } else if (nextInfo.isTomorrow) {
    badgeLabel = "TOMORROW";
    badgeClass = "amber";
    timeLabel = `Tomorrow, ${cls.displayTime}`;
  } else {
    badgeLabel = nextInfo.dayName.toUpperCase();
    badgeClass = "cyan";
    timeLabel = `${nextInfo.dayName}, ${cls.displayTime}`;
  }

  // Cache key: prevents re-rendering DOM unnecessarily so CSS animation is never interrupted
  const tickerKey = `${badgeLabel}|${cls.subject}|${timeLabel}|${cls.room}|${cls.building}`;
  if (tickerKey === lastTickerKey && tickerTrack.children.length === 2) {
    return;
  }
  lastTickerKey = tickerKey;

  // Clean pill with ONLY actual class info: Subject, Time, Room, and Building
  const pillHtml = `
    <div class="ticker-pill highlight">
      <span class="ticker-badge-pill ${badgeClass}">${badgeLabel}</span>
      <span class="ticker-sub-name">${cls.subject}</span>
      <span class="ticker-tag-room">⏰ ${timeLabel}</span>
      <span class="ticker-tag-room">📍 Room: ${cls.room}</span>
      <span class="ticker-tag-room">🏢 ${cls.building}</span>
    </div>
    <span class="ticker-sep">✦</span>
  `;

  // Repeat twice in each set so it spans nicely across all viewport widths
  const singleSet = `${pillHtml}${pillHtml}`;

  tickerTrack.innerHTML = `
    <div class="ticker-content">${singleSet}</div>
    <div class="ticker-content" aria-hidden="true">${singleSet}</div>
  `;
}

/**
 * Render Day Tabs
 */
function renderDayTabs(currentDayName) {
  const tabs = dayTabsContainer.querySelectorAll(".tab-item");
  tabs.forEach(tab => {
    const day = tab.getAttribute("data-day");
    if (day === state.selectedDay) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }

    if (day === currentDayName) {
      tab.classList.add("has-today-dot");
    } else {
      tab.classList.remove("has-today-dot");
    }

    // Indicate days that have classes scheduled
    const daySched = getDaySchedule(day);
    if (daySched.length > 0) {
      tab.classList.add("has-classes");
    } else {
      tab.classList.remove("has-classes");
    }
  });

}

/**
 * Render Day Cards with Staggered Entrance Animation & Realistic Depth
 */
function renderCardsView(dt) {
  const day = state.selectedDay;
  const isToday = (day === dt.dayName);
  const currentMin = dt.totalMinutes;
  const schedule = getDaySchedule(day);

  activeDayHeading.textContent = day;
  
  if (schedule.length === 0) {
    activeDayPill.textContent = "Campus Off";
    activeDayPill.className = "day-pill-badge off";
    daySummaryStat.textContent = "No classes";
    
    cardsGrid.innerHTML = `
      <div class="cute-empty-card" style="--i: 0">
        <div class="empty-icon-wrap">
          <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
            <defs>
              <linearGradient id="mugGrad" x1="8" y1="12" x2="28" y2="34" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fbbf24"/>
                <stop offset="1" stop-color="#d97706"/>
              </linearGradient>
              <linearGradient id="steamGrad" x1="14" y1="4" x2="14" y2="12" gradientUnits="userSpaceOnUse">
                <stop stop-color="#d97706" stop-opacity="0.8"/>
                <stop offset="1" stop-color="#f59e0b" stop-opacity="0.1"/>
              </linearGradient>
            </defs>
            <path d="M14 10C13 8 15 6 14 4" stroke="url(#steamGrad)" stroke-width="2" stroke-linecap="round"/>
            <path d="M20 10C19 8 21 6 20 4" stroke="url(#steamGrad)" stroke-width="2" stroke-linecap="round"/>
            <path d="M26 10C25 8 27 6 26 4" stroke="url(#steamGrad)" stroke-width="2" stroke-linecap="round"/>
            <path d="M9 13H27V26C27 29.5 24 32 20 32H16C12 32 9 29.5 9 26V13Z" fill="url(#mugGrad)"/>
            <path d="M27 16H29.5C31.5 16 33 17.5 33 19.5V21.5C33 23.5 31.5 25 29.5 25H27" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
            <ellipse cx="18" cy="13" rx="9" ry="2" fill="#fef3c7"/>
            <ellipse cx="18" cy="13.5" rx="8" ry="1.5" fill="#78350f"/>
          </svg>
        </div>
        <h3>No Classes on ${day}</h3>
        <p>No lectures scheduled for NFE Section 241-B on this day. Take a break & recharge!</p>
      </div>
    `;
    return;
  }

  activeDayPill.textContent = isToday ? "Today" : "Scheduled";
  activeDayPill.className = "day-pill-badge";
  daySummaryStat.textContent = `${schedule.length} Class${schedule.length === 1 ? '' : 'es'}`;

  cardsGrid.innerHTML = schedule.map((item, idx) => {
    let statusClass = "";
    let badgeHtml = "";

    if (isToday) {
      if (currentMin >= item.startMin && currentMin < item.endMin) {
        statusClass = "is-live";
        badgeHtml = `<span class="card-status-chip chip-live-badge"><span class="chip-live-dot"></span> LIVE NOW</span>`;
      } else if (currentMin < item.startMin) {
        badgeHtml = `<span class="card-status-chip chip-next-badge">UPCOMING</span>`;
      } else {
        statusClass = "is-passed";
        badgeHtml = `<span class="card-status-chip chip-done-badge">DONE</span>`;
      }
    } else {
      badgeHtml = `<span class="card-status-chip chip-slot-badge">${item.slot.label}</span>`;
    }

    return `
      <div class="class-cute-card ${statusClass}" style="--i: ${idx}">
        <div class="card-top-row">
          <span class="time-slot-pill">${item.displayTime}</span>
          ${badgeHtml}
        </div>
        
        <div class="card-subject-row">
          <div class="card-subj-icon" style="background: ${item.theme.bg}; border: 1px solid ${item.theme.border}">
            ${item.theme.icon}
          </div>
          <div class="card-subj-info">
            <div class="card-subj-title">${item.subject}</div>
            <div class="card-subj-code">NFE 241B • Slot ${item.slot.id}</div>
          </div>
        </div>

        <div class="card-meta-row">
          <span class="meta-bubble meta-bubble-room">
            ${REALISTIC_PIN_SVG}
            <span>${item.room}</span>
          </span>
          <span class="meta-bubble">
            ${REALISTIC_BLDG_SVG}
            <span>${item.building}</span>
          </span>
          <span class="meta-bubble">
            ${REALISTIC_DURATION_SVG}
            <span>1h 30m</span>
          </span>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Select a Day with Animated Card Render
 */
function selectDay(dayName) {
  state.selectedDay = dayName;
  const dt = getActiveDateTime();
  renderDayTabs(dt.dayName);
  renderCardsView(dt);

  const activeTab = dayTabsContainer.querySelector(`.tab-item[data-day="${dayName}"]`);
  if (activeTab && activeTab.scrollIntoView) {
    activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

/**
 * Setup Event Listeners
 */
function setupEventListeners() {
  dayTabsContainer.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab-item");
    if (tab) {
      selectDay(tab.getAttribute("data-day"));
    }
  });
}

/**
 * Update card live states seamlessly without re-rendering the whole DOM
 */
function updateTodayCardsLiveState(dt) {
  if (state.selectedDay !== dt.dayName) return;
  const currentMin = dt.totalMinutes;
  const cards = cardsGrid.querySelectorAll(".class-cute-card");
  const schedule = getDaySchedule(dt.dayName);

  cards.forEach((card, idx) => {
    const item = schedule[idx];
    if (!item) return;

    if (currentMin >= item.startMin && currentMin < item.endMin) {
      if (!card.classList.contains("is-live")) {
        card.classList.add("is-live");
        card.classList.remove("is-passed");
        const topRow = card.querySelector(".card-top-row");
        if (topRow) {
          const oldBadge = topRow.querySelector(".card-status-chip");
          if (oldBadge) oldBadge.remove();
          topRow.insertAdjacentHTML("beforeend", `<span class="card-status-chip chip-live-badge"><span class="chip-live-dot"></span> LIVE NOW</span>`);
        }
      }
    } else if (currentMin >= item.endMin) {
      if (!card.classList.contains("is-passed")) {
        card.classList.add("is-passed");
        card.classList.remove("is-live");
        const topRow = card.querySelector(".card-top-row");
        if (topRow) {
          const oldBadge = topRow.querySelector(".card-status-chip");
          if (oldBadge) oldBadge.remove();
          topRow.insertAdjacentHTML("beforeend", `<span class="card-status-chip chip-done-badge">DONE</span>`);
        }
      }
    }
  });
}

/**
 * Ticking Loop
 */
function tick() {
  const dt = getActiveDateTime();

  if (!state.selectedDay) {
    state.selectedDay = dt.dayName;
  }

  updateClock(dt);
  updateLiveRadar(dt);
  renderDayTabs(dt.dayName);
  updateTodayCardsLiveState(dt);
}

/**
 * Initialization
 */
function init() {
  const dt = getActiveDateTime();
  state.selectedDay = dt.dayName;

  setupEventListeners();
  renderCardsView(dt);
  tick();

  setInterval(tick, 1000);
}

document.addEventListener("DOMContentLoaded", init);
