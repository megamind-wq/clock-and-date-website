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
    "Mexico City, Mexico": "America/Mexico_City",
    "Mumbai, India": "Asia/Kolkata",
    "Beijing, China": "Asia/Shanghai",
    "Moscow, Russia": "Europe/Moscow",
    "Toronto, Canada": "America/Toronto",
    "Seoul, South Korea": "Asia/Seoul",
    "Bangkok, Thailand": "Asia/Bangkok",
    "Jakarta, Indonesia": "Asia/Jakarta",
    "Istanbul, Turkey": "Europe/Istanbul",
    "Lagos, Nigeria": "Africa/Lagos",
    "Cairo, Egypt": "Africa/Cairo",
    "Buenos Aires, Argentina": "America/Argentina/Buenos_Aires",
    "Rio de Janeiro, Brazil": "America/Sao_Paulo",
    "Delhi, India": "Asia/Kolkata",
    "Chicago, USA": "America/Chicago",
    "Rome, Italy": "Europe/Rome",
    "Madrid, Spain": "Europe/Madrid",
    "Amsterdam, Netherlands": "Europe/Amsterdam",
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
    "Kyiv, Ukraine": "Europe/Kyiv",
    "Bucharest, Romania": "Europe/Bucharest",
    "Sofia, Bulgaria": "Europe/Sofia",
    "Belgrade, Serbia": "Europe/Belgrade",
    "Zagreb, Croatia": "Europe/Zagreb",
    "Johannesburg, South Africa": "Africa/Johannesburg",
    "Cape Town, South Africa": "Africa/Johannesburg",
    "Nairobi, Kenya": "Africa/Nairobi",
    "Accra, Ghana": "Africa/Accra",
    "Algiers, Algeria": "Africa/Algiers",
    "Casablanca, Morocco": "Africa/Casablanca",
    "Addis Ababa, Ethiopia": "Africa/Addis_Ababa",
    "Dar es Salaam, Tanzania": "Africa/Dar_es_Salaam",
    "Luanda, Angola": "Africa/Luanda",
    "Tripoli, Libya": "Africa/Tripoli",
    "Tunis, Tunisia": "Africa/Tunis",
    "Kampala, Uganda": "Africa/Kampala",
    "Harare, Zimbabwe": "Africa/Harare",
    "Abuja, Nigeria": "Africa/Lagos",
    "Kinshasa, DR Congo": "Africa/Kinshasa",
    "Dakar, Senegal": "Africa/Dakar",
    "Abidjan, Ivory Coast": "Africa/Abidjan",
    "Yaoundé, Cameroon": "Africa/Douala",
    "Lusaka, Zambia": "Africa/Lusaka",
    "Maputo, Mozambique": "Africa/Maputo",
    "Kigali, Rwanda": "Africa/Kigali",
    "Manila, Philippines": "Asia/Manila",
    "Taipei, Taiwan": "Asia/Taipei",
    "Kuala Lumpur, Malaysia": "Asia/Kuala_Lumpur",
    "Tel Aviv, Israel": "Asia/Jerusalem",
    "Riyadh, Saudi Arabia": "Asia/Riyadh",
    "Doha, Qatar": "Asia/Qatar",
    "Karachi, Pakistan": "Asia/Karachi",
    "Colombo, Sri Lanka": "Asia/Colombo",
    "Hanoi, Vietnam": "Asia/Ho_Chi_Minh",
    "Ho Chi Minh City, Vietnam": "Asia/Ho_Chi_Minh",
    "Dhaka, Bangladesh": "Asia/Dhaka",
    "Islamabad, Pakistan": "Asia/Karachi",
    "Tehran, Iran": "Asia/Tehran",
    "Baghdad, Iraq": "Asia/Baghdad",
    "Kabul, Afghanistan": "Asia/Kabul",
    "Ankara, Turkey": "Europe/Istanbul",
    "Amman, Jordan": "Asia/Amman",
    "Beirut, Lebanon": "Asia/Beirut",
    "Damascus, Syria": "Asia/Damascus",
    "Ulaanbaatar, Mongolia": "Asia/Ulaanbaatar",
    "Pyongyang, North Korea": "Asia/Pyongyang",
    "Tashkent, Uzbekistan": "Asia/Tashkent",
    "Almaty, Kazakhstan": "Asia/Almaty",
    "Baku, Azerbaijan": "Asia/Baku",
    "Tbilisi, Georgia": "Asia/Tbilisi",
    "Yerevan, Armenia": "Asia/Yerevan",
    "Houston, USA": "America/Chicago",
    "Miami, USA": "America/New_York",
    "San Francisco, USA": "America/Los_Angeles",
    "Vancouver, Canada": "America/Vancouver",
    "Montreal, Canada": "America/Montreal",
    "Denver, USA": "America/Denver",
    "Ottawa, Canada": "America/Toronto",
    "Phoenix, USA": "America/Phoenix",
    "Philadelphia, USA": "America/New_York",
    "Dallas, USA": "America/Chicago",
    "San Diego, USA": "America/Los_Angeles",
    "Guadalajara, Mexico": "America/Mexico_City",
    "Tijuana, Mexico": "America/Tijuana",
    "Havana, Cuba": "America/Havana",
    "San Juan, Puerto Rico": "America/Puerto_Rico",
    "Santo Domingo, Dominican Republic": "America/Santo_Domingo",
    "Guatemala City, Guatemala": "America/Guatemala",
    "San Salvador, El Salvador": "America/El_Salvador",
    "Tegucigalpa, Honduras": "America/Tegucigalpa",
    "Managua, Nicaragua": "America/Managua",
    "San José, Costa Rica": "America/Costa_Rica",
    "Panama City, Panama": "America/Panama",
    "Bogotá, Colombia": "America/Bogota",
    "Lima, Peru": "America/Lima",
    "Santiago, Chile": "America/Santiago",
    "Caracas, Venezuela": "America/Caracas",
    "Medellín, Colombia": "America/Bogota",
    "Quito, Ecuador": "America/Guayaquil",
    "La Paz, Bolivia": "America/La_Paz",
    "Asunción, Paraguay": "America/Asuncion",
    "Montevideo, Uruguay": "America/Montevideo",
    "Brasília, Brazil": "America/Sao_Paulo",
    "Santiago, Chile": "America/Santiago",
    "Melbourne, Australia": "Australia/Melbourne",
    "Auckland, New Zealand": "Pacific/Auckland",
    "Brisbane, Australia": "Australia/Brisbane",
    "Perth, Australia": "Australia/Perth",
    "Adelaide, Australia": "Australia/Adelaide",
    "Wellington, New Zealand": "Pacific/Auckland",
    "Honolulu, USA": "Pacific/Honolulu",
    "Papeete, French Polynesia": "Pacific/Tahiti",
    "Suva, Fiji": "Pacific/Fiji",
    "Apia, Samoa": "Pacific/Apia",
    "Nukuʻalofa, Tonga": "Pacific/Tonga",
    "Port Moresby, Papua New Guinea": "Pacific/Port_Moresby",
    "Honiara, Solomon Islands": "Pacific/Guadalcanal",
    "Port Vila, Vanuatu": "Pacific/Efate",
    "Palikir, Micronesia": "Pacific/Pohnpei",
    "Majuro, Marshall Islands": "Pacific/Majuro",
    "Funafuti, Tuvalu": "Pacific/Funafuti",
    "Nouméa, New Caledonia": "Pacific/Noumea"
};

const regions = {
    "Major Cities": [
        "New York, USA", "London, United Kingdom", "Tokyo, Japan", "Paris, France", "Dubai, UAE",
        "Singapore, Singapore", "Hong Kong, China", "Sydney, Australia", "Los Angeles, USA",
        "Berlin, Germany", "Shanghai, China", "São Paulo, Brazil", "Mexico City, Mexico",
        "Mumbai, India", "Beijing, China", "Moscow, Russia", "Toronto, Canada", "Seoul, South Korea",
        "Bangkok, Thailand", "Jakarta, Indonesia", "Istanbul, Turkey", "Lagos, Nigeria",
        "Cairo, Egypt", "Buenos Aires, Argentina", "Rio de Janeiro, Brazil", "Delhi, India"
    ],
    "Africa": [
        "Lagos, Nigeria", "Cairo, Egypt", "Johannesburg, South Africa", "Cape Town, South Africa",
        "Nairobi, Kenya", "Accra, Ghana", "Algiers, Algeria", "Casablanca, Morocco",
        "Addis Ababa, Ethiopia", "Dar es Salaam, Tanzania", "Luanda, Angola", "Tripoli, Libya",
        "Tunis, Tunisia", "Kampala, Uganda", "Harare, Zimbabwe", "Abuja, Nigeria",
        "Kinshasa, DR Congo", "Dakar, Senegal", "Abidjan, Ivory Coast", "Yaoundé, Cameroon",
        "Lusaka, Zambia", "Maputo, Mozambique", "Kigali, Rwanda"
    ],
    "Asia": [
        "Tokyo, Japan", "Beijing, China", "Shanghai, China", "Seoul, South Korea", "Singapore, Singapore",
        "Dubai, UAE", "Mumbai, India", "Delhi, India", "Bangkok, Thailand", "Jakarta, Indonesia",
        "Manila, Philippines", "Taipei, Taiwan", "Hong Kong, China", "Kuala Lumpur, Malaysia",
        "Tel Aviv, Israel", "Riyadh, Saudi Arabia", "Doha, Qatar", "Karachi, Pakistan",
        "Colombo, Sri Lanka", "Hanoi, Vietnam", "Ho Chi Minh City, Vietnam", "Dhaka, Bangladesh",
        "Islamabad, Pakistan", "Tehran, Iran", "Baghdad, Iraq", "Kabul, Afghanistan",
        "Ankara, Turkey", "Amman, Jordan", "Beirut, Lebanon", "Damascus, Syria",
        "Ulaanbaatar, Mongolia", "Pyongyang, North Korea", "Tashkent, Uzbekistan",
        "Almaty, Kazakhstan", "Baku, Azerbaijan", "Tbilisi, Georgia", "Yerevan, Armenia"
    ],
    "Europe": [
        "London, United Kingdom", "Paris, France", "Berlin, Germany", "Moscow, Russia",
        "Rome, Italy", "Madrid, Spain", "Amsterdam, Netherlands", "Vienna, Austria",
        "Zurich, Switzerland", "Stockholm, Sweden", "Copenhagen, Denmark", "Warsaw, Poland",
        "Athens, Greece", "Dublin, Ireland", "Lisbon, Portugal", "Brussels, Belgium",
        "Helsinki, Finland", "Oslo, Norway", "Prague, Czech Republic", "Budapest, Hungary",
        "Kyiv, Ukraine", "Bucharest, Romania", "Sofia, Bulgaria", "Belgrade, Serbia",
        "Zagreb, Croatia"
    ],
    "North America": [
        "New York, USA", "Los Angeles, USA", "Mexico City, Mexico", "Toronto, Canada",
        "Chicago, USA", "Houston, USA", "Miami, USA", "San Francisco, USA",
        "Vancouver, Canada", "Montreal, Canada", "Denver, USA", "Ottawa, Canada",
        "Phoenix, USA", "Philadelphia, USA", "Dallas, USA", "San Diego, USA",
        "Guadalajara, Mexico", "Tijuana, Mexico", "Havana, Cuba", "San Juan, Puerto Rico",
        "Santo Domingo, Dominican Republic", "Guatemala City, Guatemala",
        "San Salvador, El Salvador", "Tegucigalpa, Honduras", "Managua, Nicaragua",
        "San José, Costa Rica", "Panama City, Panama"
    ],
    "South America": [
        "São Paulo, Brazil", "Buenos Aires, Argentina", "Rio de Janeiro, Brazil",
        "Bogotá, Colombia", "Lima, Peru", "Santiago, Chile", "Caracas, Venezuela",
        "Medellín, Colombia", "Quito, Ecuador", "La Paz, Bolivia", "Asunción, Paraguay",
        "Montevideo, Uruguay", "Brasília, Brazil"
    ],
    "Australia/Oceania": [
        "Sydney, Australia", "Melbourne, Australia", "Auckland, New Zealand",
        "Brisbane, Australia", "Perth, Australia", "Adelaide, Australia",
        "Wellington, New Zealand", "Honolulu, USA", "Papeete, French Polynesia",
        "Suva, Fiji", "Apia, Samoa", "Nukuʻalofa, Tonga", "Port Moresby, Papua New Guinea",
        "Honiara, Solomon Islands", "Port Vila, Vanuatu", "Palikir, Micronesia",
        "Majuro, Marshall Islands", "Funafuti, Tuvalu", "Nouméa, New Caledonia"
    ]
};

const holidays = [
    { name: "New Yr", month: 0, day: 1 },
    { name: "CNY", month: 0, day: 29 },
    { name: "Val", month: 1, day: 14 },
    { name: "Wom Day", month: 2, day: 8 },
    { name: "St Pat", month: 2, day: 17 },
    { name: "Earth", month: 3, day: 22 },
    { name: "Labor", month: 4, day: 1 },
    { name: "Eid-F", month: 2, day: 30 },
    { name: "Eid-A", month: 5, day: 6 },
    { name: "Ind US", month: 6, day: 4 },
    { name: "Bastille", month: 6, day: 14 },
    { name: "Diwali", month: 9, day: 20 },
    { name: "Hall", month: 9, day: 31 },
    { name: "Xmas Eve", month: 11, day: 24 },
    { name: "Xmas", month: 11, day: 25 },
    { name: "NY Eve", month: 11, day: 31 }
];

function formatStopwatchTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`;
}

function formatTimerTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateLocalTimeAndDate() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", { hour12: false });
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = now.toLocaleDateString("en-US", options);
    const timeDisplay = document.getElementById("time-display");
    const dateDisplay = document.getElementById("date-display");
    if (timeDisplay) timeDisplay.textContent = time;
    if (dateDisplay) dateDisplay.textContent = date;
}

function updateClocks() {
    const grid = document.getElementById("clock-grid");
    if (!grid) {
        console.warn("clock-grid not found");
        return;
    }
    grid.innerHTML = "";
    Object.entries(regions).forEach(([region, cityList]) => {
        const header = document.createElement("div");
        header.className = "continent-header";
        header.textContent = region;
        grid.appendChild(header);

        cityList.forEach(city => {
            const timezone = timeZones[city];
            try {
                const time = new Date().toLocaleTimeString("en-US", { timeZone: timezone, hour12: false });
                const card = document.createElement("div");
                card.className = "clock-card";
                card.innerHTML = `<h3>${city}</h3><p>${time}</p>`;
                grid.appendChild(card);
            } catch (e) {
                console.error(`Error for city ${city}: ${e.message}`);
            }
        });
    });
}

const stopwatch = {
    elapsedTime: 0,
    running: false,
    interval: null,
    startTime: null,
    init() {
        console.log("Initializing stopwatch");
        const startButton = document.getElementById("start-stopwatch");
        const stopButton = document.getElementById("stop-stopwatch");
        const lapButton = document.getElementById("lap-stopwatch");
        const resetButton = document.getElementById("reset-stopwatch");
        if (!startButton || !stopButton || !lapButton || !resetButton) {
            console.warn("Stopwatch buttons not found");
            return;
        }
        startButton.addEventListener("click", () => this.toggle());
        stopButton.addEventListener("click", () => this.stop());
        lapButton.addEventListener("click", () => this.lap());
        resetButton.addEventListener("click", () => this.reset());
    },
    update() {
        const currentTime = performance.now();
        const deltaTime = currentTime - this.startTime;
        const totalTime = this.elapsedTime + deltaTime;
        const timeDisplay = document.getElementById("stopwatch-time");
        if (timeDisplay) timeDisplay.textContent = formatStopwatchTime(totalTime);
    },
    toggle() {
        if (!this.running) {
            this.startTime = performance.now();
            this.interval = setInterval(() => this.update(), 10);
            this.running = true;
            const startButton = document.getElementById("start-stopwatch");
            if (startButton) startButton.textContent = "Pause";
        } else {
            clearInterval(this.interval);
            const currentTime = performance.now();
            this.elapsedTime += currentTime - this.startTime;
            this.running = false;
            const startButton = document.getElementById("start-stopwatch");
            if (startButton) startButton.textContent = "Start";
        }
    },
    stop() {
        if (this.running) {
            clearInterval(this.interval);
            const currentTime = performance.now();
            this.elapsedTime += currentTime - this.startTime;
            this.running = false;
            const startButton = document.getElementById("start-stopwatch");
            if (startButton) startButton.textContent = "Start";
        }
    },
    lap() {
        if (this.running) {
            const currentTime = performance.now();
            const lapTime = this.elapsedTime + (currentTime - this.startTime);
            const lapElement = document.createElement("p");
            lapElement.textContent = formatStopwatchTime(lapTime);
            const lapsContainer = document.getElementById("laps");
            if (lapsContainer) lapsContainer.appendChild(lapElement);
        }
    },
    reset() {
        clearInterval(this.interval);
        this.running = false;
        this.elapsedTime = 0;
        this.startTime = null;
        const timeDisplay = document.getElementById("stopwatch-time");
        const lapsContainer = document.getElementById("laps");
        if (timeDisplay) timeDisplay.textContent = "00:00:00.00";
        if (lapsContainer) lapsContainer.innerHTML = "";
        const startButton = document.getElementById("start-stopwatch");
        if (startButton) startButton.textContent = "Start";
    }
};

const timer = {
    remainingTime: 0,
    running: false,
    interval: null,
    endTime: null,
    init() {
        console.log("Initializing timer");
        const startButton = document.getElementById("start-timer");
        const stopButton = document.getElementById("stop-timer");
        const resetButton = document.getElementById("reset-timer");
        if (!startButton || !stopButton || !resetButton) {
            console.warn("Timer buttons not found");
            return;
        }
        startButton.addEventListener("click", () => this.toggle());
        stopButton.addEventListener("click", () => this.stop());
        resetButton.addEventListener("click", () => this.reset());
    },
    update() {
        const currentTime = performance.now();
        this.remainingTime = Math.max(0, this.endTime - currentTime);
        const timeDisplay = document.getElementById("timer-time");
        if (timeDisplay) timeDisplay.textContent = formatTimerTime(this.remainingTime);
        if (this.remainingTime <= 0) {
            this.stop();
            alert("Time's up!");
        }
    },
    toggle() {
        if (!this.running && this.remainingTime === 0) {
            const hours = parseInt(document.getElementById("timer-hours")?.value) || 0;
            const minutes = parseInt(document.getElementById("timer-minutes")?.value) || 0;
            const seconds = parseInt(document.getElementById("timer-seconds")?.value) || 0;
            const totalMs = (hours * 3600 + minutes * 60 + seconds) * 1000;
            if (totalMs > 0) {
                this.remainingTime = totalMs;
                this.endTime = performance.now() + totalMs;
                this.interval = setInterval(() => this.update(), 1000);
                this.running = true;
                const startButton = document.getElementById("start-timer");
                if (startButton) startButton.textContent = "Pause";
                this.update();
            } else {
                alert("Please set a valid time!");
            }
        } else if (this.running) {
            clearInterval(this.interval);
            this.running = false;
            const startButton = document.getElementById("start-timer");
            if (startButton) startButton.textContent = "Start";
        } else if (!this.running && this.remainingTime > 0) {
            this.endTime = performance.now() + this.remainingTime;
            this.interval = setInterval(() => this.update(), 1000);
            this.running = true;
            const startButton = document.getElementById("start-timer");
            if (startButton) startButton.textContent = "Pause";
        }
    },
    stop() {
        clearInterval(this.interval);
        this.running = false;
        const startButton = document.getElementById("start-timer");
        if (startButton) startButton.textContent = "Start";
    },
    reset() {
        clearInterval(this.interval);
        this.running = false;
        this.remainingTime = 0;
        this.endTime = null;
        const timeDisplay = document.getElementById("timer-time");
        const hoursInput = document.getElementById("timer-hours");
        const minutesInput = document.getElementById("timer-minutes");
        const secondsInput = document.getElementById("timer-seconds");
        if (timeDisplay) timeDisplay.textContent = "00:00:00";
        if (hoursInput) hoursInput.value = "";
        if (minutesInput) minutesInput.value = "";
        if (secondsInput) secondsInput.value = "";
        const startButton = document.getElementById("start-timer");
        if (startButton) startButton.textContent = "Start";
    }
};

function populateCities() {
    const fromCitySelect = document.getElementById("from-city");
    const toCitySelect = document.getElementById("to-city");
    if (!fromCitySelect || !toCitySelect) {
        console.warn("City dropdowns not found");
        return;
    }
    console.log("Populating city dropdowns");
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
    const fromCity = document.getElementById("from-city")?.value;
    const toCity = document.getElementById("to-city")?.value;
    const fromTimeInput = document.getElementById("from-time")?.value;
    const convertedTimeDiv = document.getElementById("converted-time");
    if (!convertedTimeDiv) {
        console.warn("converted-time div not found");
        return;
    }
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

function generateCalendar() {
    const grid = document.getElementById("calendar-grid");
    if (!grid) {
        console.warn("calendar-grid not found");
        return;
    }
    console.log("Generating calendar");
    grid.innerHTML = "";
    const now = new Date();
    const year = now.getFullYear();
    const today = now.getDate();
    const currentMonth = now.getMonth();
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
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        daysOfWeek.forEach(day => {
            const dayHeader = document.createElement("div");
            dayHeader.className = "header";
            dayHeader.textContent = day;
            daysDiv.appendChild(dayHeader);
        });
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const firstDayOfWeek = firstDay.getDay();
        const totalDays = lastDay.getDate();
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const dayDiv = document.createElement("div");
            dayDiv.className = "inactive";
            dayDiv.textContent = prevMonthLastDay - i;
            daysDiv.appendChild(dayDiv);
        }
        for (let day = 1; day <= totalDays; day++) {
            const dayDiv = document.createElement("div");
            if (month === currentMonth && day === today) {
                dayDiv.className = "today";
            }
            const holiday = holidays.find(h => h.month === month && h.day === day);
            if (holiday) {
                dayDiv.className = "holiday";
                dayDiv.innerHTML = `${day}<br>${holiday.name}`;
            } else {
                dayDiv.textContent = day;
            }
            daysDiv.appendChild(dayDiv);
        }
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

function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year");
    if (yearElement) yearElement.textContent = currentYear;
}

function showSection(id) {
    const sections = [
        "time", "stopwatch", "timer", "world-clock", "converter", "calendar"
    ];
    sections.forEach(section => {
        const content = document.getElementById(`${section}-content`);
        const instructions = document.getElementById(`${section}-instructions`);
        if (content) content.classList.remove("active");
        if (instructions) instructions.classList.remove("active");
    });
    const content = document.getElementById(`${id}-content`);
    const instructions = document.getElementById(`${id}-instructions`);
    if (content) content.classList.add("active");
    if (instructions) instructions.classList.add("active");
}

function toggleDarkMode() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    if (!toggleButton) return;
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
        const dateDisplay = document.getElementById("date-display");
        if (dateDisplay) dateDisplay.style.color = "#fff";
        document.querySelectorAll(".instructions-section p").forEach(el => el.style.color = "#ddd");
        document.querySelectorAll(".days .header").forEach(el => {
            el.style.backgroundColor = "#555";
            el.style.color = "#fff";
        });
        document.querySelectorAll(".days .holiday").forEach(el => el.style.color = "#333");
        document.querySelectorAll(".days div:not(.header):not(.holiday):not(.today)").forEach(el => {
            el.style.color = "#00ccff";
        });
        document.querySelectorAll(".month h3").forEach(el => el.style.color = "#fff");
        const copyright = document.getElementById("copyright");
        if (copyright) copyright.style.color = "#ddd";
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
        const dateDisplay = document.getElementById("date-display");
        if (dateDisplay) dateDisplay.style.color = "#333";
        document.querySelectorAll(".instructions-section p").forEach(el => el.style.color = "#555");
        document.querySelectorAll(".days .header").forEach(el => {
            el.style.backgroundColor = "#e0e0e0";
            el.style.color = "#333";
        });
        document.querySelectorAll(".days .holiday").forEach(el => el.style.color = "#333");
        document.querySelectorAll(".days div:not(.header):not(.holiday):not(.today)").forEach(el => {
            el.style.color = "#333";
        });
        document.querySelectorAll(".month h3").forEach(el => el.style.color = "#0078d4");
        const copyright = document.getElementById("copyright");
        if (copyright) copyright.style.color = "#555";
        toggleButton.textContent = "Dark Mode";
    }
}

function initializeIndex() {
    console.log("Initializing index.html");
    updateLocalTimeAndDate();
    setInterval(updateLocalTimeAndDate, 1000);
    updateClocks();
    setInterval(updateClocks, 1000);
    stopwatch.init();
    timer.init();
    populateCities();
    generateCalendar();
}

function initializeWorldClock() {
    console.log("Initializing world-clock.html");
    updateClocks();
    setInterval(updateClocks, 1000);
}

function initializeStopwatch() {
    console.log("Initializing stopwatch.html");
    stopwatch.init();
}

function initializeTimer() {
    console.log("Initializing timer.html");
    timer.init();
}

function initializeConverter() {
    console.log("Initializing converter.html");
    populateCities();
}

function initializeCalendar() {
    console.log("Initializing calendar.html");
    generateCalendar();
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    updateCopyrightYear();
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) darkModeToggle.addEventListener("click", toggleDarkMode);

    const path = window.location.pathname.toLowerCase();
    if (path.includes("index.html") || path === "/" || path === "") {
        initializeIndex();
    } else if (path.includes("world-clock.html")) {
        initializeWorldClock();
    } else if (path.includes("stopwatch.html")) {
        initializeStopwatch();
    } else if (path.includes("timer.html")) {
        initializeTimer();
    } else if (path.includes("converter.html")) {
        initializeConverter();
    } else if (path.includes("calendar.html")) {
        initializeCalendar();
    }
});
