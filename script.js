// Time Zones for World Clock and Converter (75 unique locations)
const timeZones = {
    "New York, USA": "America/New_York",
    "London, United Kingdom": "Europe/London",
    "Tokyo, Japan": "Asia/Tokyo",
    "Paris, France": "Europe/Paris",
    "Dubai, UAE": "Asia/Dubai",
    "Singapore, Singapore": "Asia/Singapore",
    "Hong Kong, China": "Asia/Hong_Kong",
    "Sydney, Australia": "Australia/Sydney",
    "Los Angeles, USA": "America/Los_Angeles",
    "Berlin, Germany": "Europe/Berlin",
    "Shanghai, China": "Asia/Shanghai",
    "São Paulo, Brazil": "America/Sao_Paulo",
    "Cairo, Egypt": "Africa/Cairo",
    "Lagos, Nigeria": "Africa/Lagos",
    "Nairobi, Kenya": "Africa/Nairobi",
    "Johannesburg, South Africa": "Africa/Johannesburg",
    "Cape Town, South Africa": "Africa/Johannesburg",
    "Algiers, Algeria": "Africa/Algiers",
    "Accra, Ghana": "Africa/Accra",
    "Casablanca, Morocco": "Africa/Casablanca",
    "Beijing, China": "Asia/Shanghai",
    "Seoul, South Korea": "Asia/Seoul",
    "Mumbai, India": "Asia/Kolkata",
    "Delhi, India": "Asia/Kolkata",
    "Bangkok, Thailand": "Asia/Bangkok",
    "Jakarta, Indonesia": "Asia/Jakarta",
    "Manila, Philippines": "Asia/Manila",
    "Taipei, Taiwan": "Asia/Taipei",
    "Kuala Lumpur, Malaysia": "Asia/Kuala_Lumpur",
    "Tel Aviv, Israel": "Asia/Jerusalem",
    "Riyadh, Saudi Arabia": "Asia/Riyadh",
    "Doha, Qatar": "Asia/Qatar",
    "Karachi, Pakistan": "Asia/Karachi",
    "Colombo, Sri Lanka": "Asia/Colombo",
    "Hanoi, Vietnam": "Asia/Ho_Chi_Minh",
    "Rome, Italy": "Europe/Rome",
    "Madrid, Spain": "Europe/Madrid",
    "Amsterdam, Netherlands": "Europe/Amsterdam",
    "Moscow, Russia": "Europe/Moscow",
    "Vienna, Austria": "Europe/Vienna",
    "Zurich, Switzerland": "Europe/Zurich",
    "Stockholm, Sweden": "Europe/Stockholm",
    "Copenhagen, Denmark": "Europe/Copenhagen",
    "Warsaw, Poland": "Europe/Warsaw",
    "Athens, Greece": "Europe/Athens",
    "Dublin, Ireland": "Europe/Dublin",
    "Lisbon, Portugal": "Europe/Lisbon",
    "Brussels, Belgium": "Europe/Brussels",
    "Helsinki, Finland": "Europe/Helsinki",
    "Oslo, Norway": "Europe/Oslo",
    "Prague, Czech Republic": "Europe/Prague",
    "Budapest, Hungary": "Europe/Budapest",
    "Chicago, USA": "America/Chicago",
    "Toronto, Canada": "America/Toronto",
    "Mexico City, Mexico": "America/Mexico_City",
    "Houston, USA": "America/Chicago",
    "Miami, USA": "America/New_York",
    "San Francisco, USA": "America/Los_Angeles",
    "Vancouver, Canada": "America/Vancouver",
    "Montreal, Canada": "America/Montreal",
    "Denver, USA": "America/Denver",
    "Ottawa, Canada": "America/Toronto",
    "Rio de Janeiro, Brazil": "America/Sao_Paulo",
    "Buenos Aires, Argentina": "America/Argentina/Buenos_Aires",
    "Bogotá, Colombia": "America/Bogota",
    "Lima, Peru": "America/Lima",
    "Santiago, Chile": "America/Santiago",
    "Caracas, Venezuela": "America/Caracas",
    "Medellín, Colombia": "America/Bogota",
    "Quito, Ecuador": "America/Guayaquil",
    "La Paz, Bolivia": "America/La_Paz",
    "Melbourne, Australia": "Australia/Melbourne",
    "Auckland, New Zealand": "Pacific/Auckland",
    "Brisbane, Australia": "Australia/Brisbane",
    "Perth, Australia": "Australia/Perth",
    "Adelaide, Australia": "Australia/Adelaide",
    "Wellington, New Zealand": "Pacific/Auckland",
    "Honolulu, USA": "Pacific/Honolulu"
};

// Regional Breakdown for World Clock
const regions = {
    "Major Cities": [
        "New York, USA", "London, United Kingdom", "Tokyo, Japan", "Paris, France", "Dubai, UAE",
        "Singapore, Singapore", "Hong Kong, China", "Sydney, Australia", "Los Angeles, USA", "Berlin, Germany",
        "Shanghai, China", "São Paulo, Brazil"
    ],
    "Africa": [
        "Cairo, Egypt", "Lagos, Nigeria", "Nairobi, Kenya", "Johannesburg, South Africa", "Cape Town, South Africa",
        "Algiers, Algeria", "Accra, Ghana", "Casablanca, Morocco"
    ],
    "Asia": [
        "Tokyo, Japan", "Beijing, China", "Shanghai, China", "Seoul, South Korea", "Singapore, Singapore",
        "Dubai, UAE", "Mumbai, India", "Delhi, India", "Bangkok, Thailand", "Jakarta, Indonesia",
        "Manila, Philippines", "Taipei, Taiwan", "Hong Kong, China", "Kuala Lumpur, Malaysia", "Tel Aviv, Israel",
        "Riyadh, Saudi Arabia", "Doha, Qatar", "Karachi, Pakistan", "Colombo, Sri Lanka", "Hanoi, Vietnam"
    ],
    "Europe": [
        "London, United Kingdom", "Paris, France", "Berlin, Germany", "Rome, Italy", "Madrid, Spain",
        "Amsterdam, Netherlands", "Moscow, Russia", "Vienna, Austria", "Zurich, Switzerland", "Stockholm, Sweden",
        "Copenhagen, Denmark", "Warsaw, Poland", "Athens, Greece", "Dublin, Ireland", "Lisbon, Portugal",
        "Brussels, Belgium", "Helsinki, Finland", "Oslo, Norway", "Prague, Czech Republic", "Budapest, Hungary"
    ],
    "North America": [
        "New York, USA", "Los Angeles, USA", "Chicago, USA", "Toronto, Canada", "Mexico City, Mexico",
        "Houston, USA", "Miami, USA", "San Francisco, USA", "Vancouver, Canada", "Montreal, Canada",
        "Denver, USA", "Ottawa, Canada"
    ],
    "South America": [
        "São Paulo, Brazil", "Rio de Janeiro, Brazil", "Buenos Aires, Argentina", "Bogotá, Colombia", "Lima, Peru",
        "Santiago, Chile", "Caracas, Venezuela", "Medellín, Colombia", "Quito, Ecuador", "La Paz, Bolivia"
    ],
    "Australia/Oceania": [
        "Sydney, Australia", "Melbourne, Australia", "Auckland, New Zealand", "Brisbane, Australia", "Perth, Australia",
        "Adelaide, Australia", "Wellington, New Zealand", "Honolulu, USA"
    ]
};

// Major Worldwide Holidays for 2025 with Short Names
const holidays = [
    { name: "New Yr", month: 0, day: 1 },        // Jan 1
    { name: "CNY", month: 0, day: 29 },          // Jan 29, 2025 (Chinese New Year)
    { name: "Val", month: 1, day: 14 },          // Feb 14 (Valentine's)
    { name: "Wom Day", month: 2, day: 8 },       // Mar 8 (Women's Day)
    { name: "St Pat", month: 2, day: 17 },       // Mar 17 (St. Patrick's)
    { name: "Earth", month: 3, day: 22 },        // Apr 22 (Earth Day)
    { name: "Labor", month: 4, day: 1 },         // May 1 (Labor Day)
    { name: "Eid-F", month: 2, day: 30 },        // Mar 30, 2025 (Eid al-Fitr, est.)
    { name: "Eid-A", month: 5, day: 6 },         // Jun 6, 2025 (Eid al-Adha, est.)
    { name: "Ind US", month: 6, day: 4 },        // Jul 4 (Independence Day USA)
    { name: "Bastille", month: 6, day: 14 },     // Jul 14 (France)
    { name: "Diwali", month: 9, day: 20 },       // Oct 20, 2025 (approx.)
    { name: "Hall", month: 9, day: 31 },         // Oct 31 (Halloween)
    { name: "Xmas Eve", month: 11, day: 24 },    // Dec 24
    { name: "Xmas", month: 11, day: 25 },        // Dec 25
    { name: "NY Eve", month: 11, day: 31 }       // Dec 31
];

// Utility Functions
function formatStopwatchTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10); // Divide by 10 for 2 digits (00-99)
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`;
}

function formatTimerTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Local Time and Date
function updateLocalTimeAndDate() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", { hour12: false });
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = now.toLocaleDateString("en-US", options);
    document.getElementById("time-display").textContent = time;
    document.getElementById("date-display").textContent = date;
}
setInterval(updateLocalTimeAndDate, 1000);
updateLocalTimeAndDate();

// World Clock
function updateClocks() {
    const grid = document.getElementById("clock-grid");
    grid.innerHTML = "";
    Object.entries(regions).forEach(([region, cityList]) => {
        const header = document.createElement("div");
        header.className = "continent-header";
        header.textContent = region;
        grid.appendChild(header);

        cityList.forEach(city => {
            const timezone = timeZones[city];
            const time = new Date().toLocaleTimeString("en-US", { timeZone: timezone, hour12: false });
            const card = document.createElement("div");
            card.className = "clock-card";
            card.innerHTML = `<h3>${city}</h3><p>${time}</p>`;
            grid.appendChild(card);
        });
    });
}
setInterval(updateClocks, 1000);
updateClocks();

// Stopwatch
const stopwatch = {
    elapsedTime: 0,
    running: false,
    interval: null,
    startTime: null,
    init() {
        document.getElementById("start-stopwatch").addEventListener("click", () => this.toggle());
        document.getElementById("stop-stopwatch").addEventListener("click", () => this.stop());
        document.getElementById("lap-stopwatch").addEventListener("click", () => this.lap());
        document.getElementById("reset-stopwatch").addEventListener("click", () => this.reset());
    },
    update() {
        const currentTime = performance.now();
        const deltaTime = currentTime - this.startTime;
        const totalTime = this.elapsedTime + deltaTime;
        document.getElementById("stopwatch-time").textContent = formatStopwatchTime(totalTime);
    },
    toggle() {
        if (!this.running) {
            this.startTime = performance.now();
            this.interval = setInterval(() => this.update(), 10);
            this.running = true;
            document.getElementById("start-stopwatch").textContent = "Pause";
        } else {
            clearInterval(this.interval);
            const currentTime = performance.now();
            this.elapsedTime += currentTime - this.startTime;
            this.running = false;
            document.getElementById("start-stopwatch").textContent = "Start";
        }
    },
    stop() {
        if (this.running) {
            clearInterval(this.interval);
            const currentTime = performance.now();
            this.elapsedTime += currentTime - this.startTime;
            this.running = false;
            document.getElementById("start-stopwatch").textContent = "Start";
        }
    },
    lap() {
        if (this.running) {
            const currentTime = performance.now();
            const lapTime = this.elapsedTime + (currentTime - this.startTime);
            const lapElement = document.createElement("p");
            lapElement.textContent = formatStopwatchTime(lapTime);
            document.getElementById("laps").appendChild(lapElement);
        }
    },
    reset() {
        clearInterval(this.interval);
        this.running = false;
        this.elapsedTime = 0;
        this.startTime = null;
        document.getElementById("stopwatch-time").textContent = "00:00:00.00";
        document.getElementById("laps").innerHTML = "";
        document.getElementById("start-stopwatch").textContent = "Start";
    }
};
stopwatch.init();

// Timer
const timer = {
    remainingTime: 0,
    running: false,
    interval: null,
    endTime: null,
    init() {
        document.getElementById("start-timer").addEventListener("click", () => this.toggle());
        document.getElementById("stop-timer").addEventListener("click", () => this.stop());
        document.getElementById("reset-timer").addEventListener("click", () => this.reset());
    },
    update() {
        const currentTime = performance.now();
        this.remainingTime = Math.max(0, this.endTime - currentTime);
        document.getElementById("timer-time").textContent = formatTimerTime(this.remainingTime);
        if (this.remainingTime <= 0) {
            this.stop();
            alert("Time's up!");
        }
    },
    toggle() {
        if (!this.running && this.remainingTime === 0) {
            const hours = parseInt(document.getElementById("timer-hours").value) || 0;
            const minutes = parseInt(document.getElementById("timer-minutes").value) || 0;
            const seconds = parseInt(document.getElementById("timer-seconds").value) || 0;
            const totalMs = (hours * 3600 + minutes * 60 + seconds) * 1000;
            if (totalMs > 0) {
                this.remainingTime = totalMs;
                this.endTime = performance.now() + totalMs;
                this.interval = setInterval(() => this.update(), 1000);
                this.running = true;
                document.getElementById("start-timer").textContent = "Pause";
                this.update();
            } else {
                alert("Please set a valid time!");
            }
        } else if (this.running) {
            clearInterval(this.interval);
            this.running = false;
            document.getElementById("start-timer").textContent = "Start";
        } else if (!this.running && this.remainingTime > 0) {
            this.endTime = performance.now() + this.remainingTime;
            this.interval = setInterval(() => this.update(), 1000);
            this.running = true;
            document.getElementById("start-timer").textContent = "Pause";
        }
    },
    stop() {
        clearInterval(this.interval);
        this.running = false;
        document.getElementById("start-timer").textContent = "Start";
    },
    reset() {
        clearInterval(this.interval);
        this.running = false;
        this.remainingTime = 0;
        this.endTime = null;
        document.getElementById("timer-time").textContent = "00:00:00";
        document.getElementById("timer-hours").value = "";
        document.getElementById("timer-minutes").value = "";
        document.getElementById("timer-seconds").value = "";
        document.getElementById("start-timer").textContent = "Start";
    }
};
timer.init();

// Global Clock Converter
function populateCities() {
    const fromCitySelect = document.getElementById("from-city");
    const toCitySelect = document.getElementById("to-city");

    if (!fromCitySelect || !toCitySelect) {
        console.error("Dropdown elements not found!");
        return;
    }

    fromCitySelect.innerHTML = "";
    toCitySelect.innerHTML = "";

    Object.entries(timeZones).forEach(([city, timezone]) => {
        const fromOption = document.createElement("option");
        const toOption = document.createElement("option");
        fromOption.value = toOption.value = timezone;
        fromOption.text = toOption.text = city;
        fromCitySelect.appendChild(fromOption);
        toCitySelect.appendChild(toOption);
    });
}

function convertTime() {
    const fromCity = document.getElementById("from-city").value;
    const toCity = document.getElementById("to-city").value;
    const fromTimeInput = document.getElementById("from-time").value;
    const convertedTimeDiv = document.getElementById("converted-time");

    if (!fromTimeInput) {
        convertedTimeDiv.innerHTML = "<p>Please select a date and time!</p>";
        return;
    }

    const fromTime = new Date(fromTimeInput);
    if (isNaN(fromTime.getTime())) {
        convertedTimeDiv.innerHTML = "<p>Invalid date/time!</p>";
        return;
    }

    const fromCityName = Object.keys(timeZones).find(key => timeZones[key] === fromCity);
    const toCityName = Object.keys(timeZones).find(key => timeZones[key] === toCity);

    const fromTimeStr = fromTime.toLocaleString("en-US", { timeZone: fromCity });
    const toTimeStr = new Date(fromTimeStr).toLocaleString("en-US", { timeZone: toCity });

    convertedTimeDiv.innerHTML = "";
    const fromP = document.createElement("p");
    const toP = document.createElement("p");
    fromP.textContent = `From ${fromCityName}: ${fromTimeStr}`;
    toP.textContent = `To ${toCityName}: ${toTimeStr}`;
    convertedTimeDiv.appendChild(fromP);
    convertedTimeDiv.appendChild(toP);
}

// Calendar with Holidays
function generateCalendar() {
    const grid = document.getElementById("calendar-grid");
    grid.innerHTML = "";
    const now = new Date();
    const year = now.getFullYear();
    const today = now.getDate();
    const currentMonth = now.getMonth();
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement("div");
        monthDiv.className = "month";
        monthDiv.innerHTML = `<h3>${monthNames[month]} ${year}</h3>`;
        const daysDiv = document.createElement("div");
        daysDiv.className = "days";

        // Day headers (Sun–Sat)
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        daysOfWeek.forEach(day => {
            const dayHeader = document.createElement("div");
            dayHeader.className = "header";
            dayHeader.textContent = day;
            daysDiv.appendChild(dayHeader);
        });

        // Days of the month
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const firstDayOfWeek = firstDay.getDay();
        const totalDays = lastDay.getDate();

        // Previous month days
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const dayDiv = document.createElement("div");
            dayDiv.className = "inactive";
            dayDiv.textContent = prevMonthLastDay - i;
            daysDiv.appendChild(dayDiv);
        }

        // Current month days
        for (let day = 1; day <= totalDays; day++) {
            const dayDiv = document.createElement("div");
            if (month === currentMonth && day === today) {
                dayDiv.className = "today";
            }

            // Check for holidays
            const holiday = holidays.find(h => h.month === month && h.day === day);
            if (holiday) {
                dayDiv.className = "holiday";
                dayDiv.innerHTML = `${day}<br>${holiday.name}`;
            } else {
                dayDiv.textContent = day;
            }

            daysDiv.appendChild(dayDiv);
        }

        // Next month days
        const lastDayOfWeek = lastDay.getDay();
        const remainingDays = 6 - lastDayOfWeek;
        for (let i = 1; i <= remainingDays; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.className = "inactive";
            dayDiv.textContent = i;
            daysDiv.appendChild(dayDiv);
        }

        monthDiv.appendChild(daysDiv);
        grid.appendChild(monthDiv);
    }
}

// Update Copyright Year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
}

// Initialize Converter, Calendar, and Copyright
document.addEventListener("DOMContentLoaded", () => {
    populateCities();
    generateCalendar();
    updateCopyrightYear();
});

// Navigation
function showSection(id) {
    const sections = [
        "time", "stopwatch", "timer", "world-clock", "converter", "calendar"
    ];
    sections.forEach(section => {
        document.getElementById(`${section}-content`).classList.remove("active");
        document.getElementById(`${section}-instructions`).classList.remove("active");
    });
    document.getElementById(`${id}-content`).classList.add("active");
    document.getElementById(`${id}-instructions`).classList.add("active");
}

// Dark Mode
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        document.body.style.backgroundColor = "#222";
        document.querySelectorAll(".content-section, .instructions-section").forEach(section => {
            section.style.backgroundColor = "#333";
        });
        document.querySelectorAll(".clock-card, .month").forEach(card => card.style.backgroundColor = "#444");
        document.querySelectorAll("h2, h3, #laps p").forEach(el => el.style.color = "#fff");
        document.querySelectorAll("input, select").forEach(el => {
            el.style.backgroundColor = "#444";
            el.style.color = "#fff";
        });
        document.getElementById("date-display").style.color = "#fff";
        document.querySelectorAll(".instructions-section p").forEach(el => el.style.color = "#ddd");
        document.querySelectorAll(".days .header").forEach(el => {
            el.style.backgroundColor = "#555";
            el.style.color = "#fff"; // Week days white
        });
        document.querySelectorAll(".days .holiday").forEach(el => el.style.color = "#333");
        document.querySelectorAll(".days div:not(.header):not(.holiday):not(.today)").forEach(el => {
            el.style.color = "#00ccff"; // Dates blue
        });
        document.querySelectorAll(".month h3").forEach(el => el.style.color = "#fff"); // Month names white
        document.getElementById("copyright").style.color = "#ddd";
        toggleButton.textContent = "Light Mode";
    } else {
        document.body.style.backgroundColor = "#f4f4f4";
        document.querySelectorAll(".content-section, .instructions-section").forEach(section => {
            section.style.backgroundColor = "white";
        });
        document.querySelectorAll(".clock-card").forEach(card => card.style.backgroundColor = "#f4f4f4");
        document.querySelectorAll(".month").forEach(card => card.style.backgroundColor = "#f9f9f9");
        document.querySelectorAll("h2, h3, #laps p").forEach(el => el.style.color = "#333");
        document.querySelectorAll("input, select").forEach(el => {
            el.style.backgroundColor = "white";
            el.style.color = "#333";
        });
        document.getElementById("date-display").style.color = "#333";
        document.querySelectorAll(".instructions-section p").forEach(el => el.style.color = "#555");
        document.querySelectorAll(".days .header").forEach(el => {
            el.style.backgroundColor = "#e0e0e0";
            el.style.color = "#333"; // Week days back to default
        });
        document.querySelectorAll(".days .holiday").forEach(el => el.style.color = "#333");
        document.querySelectorAll(".days div:not(.header):not(.holiday):not(.today)").forEach(el => {
            el.style.color = "#333"; // Dates back to default
        });
        document.querySelectorAll(".month h3").forEach(el => el.style.color = "#0078d4"); // Month names back to blue
        document.getElementById("copyright").style.color = "#555";
        toggleButton.textContent = "Dark Mode";
    }
});