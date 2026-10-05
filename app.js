/**
 * DIU NFE 241B - CUTE & ANIMATED ROUTINE APP
 * Pure Card View with Smooth Animations & Real-time Tracker
 */

const TIME_SLOTS = [
  { id: 1, label: "Slot 1", start: "08:20", end: "09:50", display: "08:20 - 09:50", startMin: 8 * 60 + 20, endMin: 9 * 60 + 50 },
  { id: 2, label: "Slot 2", start: "09:50", end: "11:20", display: "09:50 - 11:20", startMin: 9 * 60 + 50, endMin: 11 * 60 + 20 },
  { id: 3, label: "Slot 3", start: "11:20", end: "12:50", display: "11:20 - 12:50", startMin: 11 * 60 + 20, endMin: 12 * 60 + 50 },
  { id: 4, label: "Slot 4", start: "13:10", end: "14:40", display: "01:10 - 02:40", startMin: 13 * 60 + 10, endMin: 14 * 60 + 40 },
  { id: 5, label: "Slot 5", start: "14:40", end: "16:10", display: "02:40 - 04:10", startMin: 14 * 60 + 40, endMin: 16 * 60 + 10 }
];

const WEEK_DAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Cute Subject Themes & SVG Icons
const SUBJECT_THEMES = {
  "Nutrition Education": {
    code: "NFE",
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10c0-4-3-8-7-9.5"/><path d="M12 2c-2 2-2 5 0 7s5 2 7 0"/><path d="M12 12a4 4 0 0 0 4 4"/></svg>`
  },
  "Environment": {
    code: "ENV",
    color: "#0d9488",
    bg: "#f0fdfa",
    border: "#99f6e4",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`
  },
  "Packaging": {
    code: "PKG",
    color: "#ea580c",
    bg: "#fff7ed",
    border: "#fed7aa",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`
  },
  "Emergency": {
    code: "EMG",
    color: "#e11d48",
    bg: "#fff1f2",
    border: "#fecdd3",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
  },
  "Lab": {
    code: "LAB",
    color: "#7c3aed",
    bg: "#faf5ff",
    border: "#e9d5ff",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>`
  },
  "Default": {
    code: "CLS",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>`
  }
};

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
const nextSubject = document.getElementById("nextSubject");
const nextDetails = document.getElementById("nextDetails");
const nextCountdown = document.getElementById("nextCountdown");

const todayQuickBtn = document.getElementById("todayQuickBtn");
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
 * Find next upcoming class
 */
function findNextUpcomingClass(fromDayName, currentMinutes) {
  const dayIndex = WEEK_DAYS.indexOf(fromDayName);
  
  // Today's next classes
  const todayClasses = getDaySchedule(fromDayName);
  for (const c of todayClasses) {
    if (c.startMin > currentMinutes) {
      return { classItem: c, dayName: fromDayName, isToday: true, minutesUntil: c.startMin - currentMinutes };
    }
  }

  // Future days
  for (let i = 1; i <= 7; i++) {
    const nextIdx = (dayIndex + i) % 7;
    const nextDay = WEEK_DAYS[nextIdx];
    const nextDayClasses = getDaySchedule(nextDay);
    if (nextDayClasses.length > 0) {
      return { classItem: nextDayClasses[0], dayName: nextDay, isToday: false, minutesUntil: null };
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
    radarStatusWrap.classList.add("live");
    radarStatusBadge.textContent = "LIVE CLASS NOW";
    radarMeta.textContent = `Ends at ${liveClass.slot.end}`;
    
    radarSubject.textContent = liveClass.subject;
    radarSubjectIcon.innerHTML = liveClass.theme.icon;
    radarSubjectIcon.style.color = liveClass.theme.color;
    radarSubjectIcon.style.backgroundColor = liveClass.theme.bg;

    radarRoom.innerHTML = `
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      <span>${liveClass.room}</span>
    `;
    radarTime.innerHTML = `
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 15 14"/></svg>
      <span>${liveClass.displayTime}</span>
    `;

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

    radarSubjectIcon.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>`;
    radarSubjectIcon.style.color = "#0284c7";
    radarSubjectIcon.style.backgroundColor = "#e0f2fe";

    if (todaySchedule.length === 0) {
      radarStatusWrap.classList.add("off");
      radarStatusBadge.textContent = "CAMPUS OFF";
      radarMeta.textContent = "Relax & Recharge";
      radarSubject.textContent = `No classes on ${dayName}`;
      radarRoom.innerHTML = `<span>✨ Free Day</span>`;
      radarTime.innerHTML = `<span>No lectures</span>`;
    } else if (currentMin < todaySchedule[0].startMin) {
      radarStatusWrap.classList.add("next");
      radarStatusBadge.textContent = "UPCOMING TODAY";
      const startIn = Math.ceil(todaySchedule[0].startMin - currentMin);
      radarMeta.textContent = startIn > 60 ? `Starts in ${Math.floor(startIn/60)}h ${startIn%60}m` : `Starts in ${startIn} mins`;
      radarSubject.textContent = todaySchedule[0].subject;
      radarSubjectIcon.innerHTML = todaySchedule[0].theme.icon;
      radarSubjectIcon.style.color = todaySchedule[0].theme.color;
      radarSubjectIcon.style.backgroundColor = todaySchedule[0].theme.bg;

      radarRoom.innerHTML = `
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${todaySchedule[0].room}</span>
      `;
      radarTime.innerHTML = `
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 15 14"/></svg>
        <span>${todaySchedule[0].slot.start} AM</span>
      `;
    } else if (currentMin >= todaySchedule[todaySchedule.length - 1].endMin) {
      radarStatusWrap.classList.add("off");
      radarStatusBadge.textContent = "DONE TODAY";
      radarMeta.textContent = "All classes over";
      radarSubject.textContent = "All classes done for today!";
      radarRoom.innerHTML = `<span>🎉 Day Complete</span>`;
      radarTime.innerHTML = `<span>See you next session</span>`;
    } else {
      radarStatusWrap.classList.add("next");
      radarStatusBadge.textContent = "BREAK TIME";
      radarMeta.textContent = "Interval";
      radarSubject.textContent = "Interval / Break";
      radarRoom.innerHTML = `<span>☕ Relax</span>`;
      radarTime.innerHTML = `<span>Next class soon</span>`;
    }
  }

  // Up Next Ribbon
  if (nextInfo) {
    radarNextCard.style.display = "flex";
    nextSubject.textContent = nextInfo.classItem.subject;
    const dayStr = nextInfo.isToday ? "Today" : nextInfo.dayName;
    nextDetails.textContent = `${dayStr} • ${nextInfo.classItem.slot.start} (${nextInfo.classItem.room})`;

    if (nextInfo.isToday && nextInfo.minutesUntil !== null) {
      const mins = Math.ceil(nextInfo.minutesUntil);
      nextCountdown.textContent = mins < 60 ? `in ${mins}m` : `in ${Math.floor(mins/60)}h ${mins%60}m`;
    } else {
      nextCountdown.textContent = nextInfo.dayName;
    }
  } else {
    radarNextCard.style.display = "none";
  }
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
  });

  if (state.selectedDay === currentDayName) {
    todayQuickBtn.classList.add("is-active-day");
  } else {
    todayQuickBtn.classList.remove("is-active-day");
  }
}

/**
 * Render Day Cards with Staggered Entrance Animation
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
        <div class="empty-icon-wrap">☕</div>
        <h3>No Classes on ${day}</h3>
        <p>No lectures scheduled for NFE Section 241-B on this day.</p>
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
          <div class="card-subj-icon" style="background: ${item.theme.bg}; color: ${item.theme.color}">
            ${item.theme.icon}
          </div>
          <div class="card-subj-info">
            <div class="card-subj-title">${item.subject}</div>
            <div class="card-subj-code">NFE 241B • Slot ${item.slot.id}</div>
          </div>
        </div>

        <div class="card-meta-row">
          <span class="meta-bubble meta-bubble-room">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            ${item.room}
          </span>
          <span class="meta-bubble">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="9" x2="15" y1="6" y2="6"/><line x1="9" x2="15" y1="10" y2="10"/></svg>
            ${item.building}
          </span>
          <span class="meta-bubble">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 15 14"/></svg>
            1h 30m
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

  todayQuickBtn.addEventListener("click", () => {
    const dt = getActiveDateTime();
    selectDay(dt.dayName);
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
