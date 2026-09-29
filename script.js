"use strict";

/*
 * Données du planning.
 * Chaque présence indique le professionnel, le jour, la période, la salle,
 * le type d’occupation et ses heures approximatives de début et de fin.
 */
const PLANNING_DATA = {
  days: [
    { id: "lundi", label: "Lundi" },
    { id: "mardi", label: "Mardi" },
    { id: "mercredi", label: "Mercredi" },
    { id: "jeudi", label: "Jeudi" },
    { id: "vendredi", label: "Vendredi" },
  ],

  periods: [
    { id: "matin", label: "Matin", start: "08:00", end: "12:00" },
    { id: "apres-midi", label: "Après-midi", start: "13:00", end: "19:00" },
  ],

  rooms: [1, 2, 3, 4, 5],

  professionals: [
    { id: "damien", name: "Damien", color: "#a8cdea", ink: "#172936", active: true },
    { id: "johan", name: "Johan", color: "#b7dba8", ink: "#172936", active: true },
    { id: "justine", name: "Justine", color: "#b6a0db", ink: "#172936", active: true },
    { id: "marine", name: "Marine", color: "#c47f90", ink: "#172936", active: true },
    { id: "simon", name: "Simon", color: "#2f5b88", ink: "#ffffff", active: true },
    { id: "florianne", name: "Florianne", color: "#68c7c1", ink: "#172936", active: true },
    { id: "nouveau", name: "Nouveau kiné", color: "#f2bd79", ink: "#172936", active: true },
  ],

  occupations: [
    // Damien
    { professionalId: "damien", day: "mercredi", period: "matin", room: 1, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "damien", day: "jeudi", period: "apres-midi", room: 1, typeOccupation: "complete", start: "13:00", end: "19:00" },

    // Johan
    { professionalId: "johan", day: "lundi", period: "matin", room: 5, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "johan", day: "mardi", period: "matin", room: 5, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "johan", day: "mercredi", period: "matin", room: 5, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "johan", day: "jeudi", period: "matin", room: 5, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "johan", day: "vendredi", period: "matin", room: 5, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "johan", day: "lundi", period: "apres-midi", room: 5, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "johan", day: "mercredi", period: "apres-midi", room: 5, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "johan", day: "jeudi", period: "apres-midi", room: 5, typeOccupation: "complete", start: "13:00", end: "19:00" },

    // Justine
    { professionalId: "justine", day: "mardi", period: "matin", room: 3, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "justine", day: "jeudi", period: "matin", room: 3, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "justine", day: "lundi", period: "apres-midi", room: 3, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "justine", day: "mardi", period: "apres-midi", room: 3, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "justine", day: "jeudi", period: "apres-midi", room: 3, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "justine", day: "vendredi", period: "apres-midi", room: 3, typeOccupation: "partielle", start: "13:00", end: "16:00", comment: "Justine · salle 3 · vendredi de 13 h à 16 h" },

    // Marine
    { professionalId: "marine", day: "lundi", period: "matin", room: 1, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "marine", day: "lundi", period: "apres-midi", room: 1, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "marine", day: "mardi", period: "apres-midi", room: 1, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "marine", day: "mercredi", period: "matin", room: 4, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "marine", day: "jeudi", period: "apres-midi", room: 4, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "marine", day: "vendredi", period: "matin", room: 1, typeOccupation: "complete", start: "08:00", end: "12:00" },

    // Simon
    { professionalId: "simon", day: "lundi", period: "matin", room: 4, typeOccupation: "partielle", start: "11:00", end: "12:00", comment: "Simon · salle 4 · lundi de 11 h à 12 h" },
    { professionalId: "simon", day: "lundi", period: "apres-midi", room: 4, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "simon", day: "mardi", period: "matin", room: 4, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "simon", day: "mardi", period: "apres-midi", room: 4, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "simon", day: "mercredi", period: "apres-midi", room: 4, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "simon", day: "jeudi", period: "matin", room: 4, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "simon", day: "vendredi", period: "apres-midi", room: 4, typeOccupation: "complete", start: "13:00", end: "19:00" },

    // Florianne — occupations complètes
    { professionalId: "florianne", day: "lundi", period: "apres-midi", room: 2, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "florianne", day: "mardi", period: "matin", room: 2, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "florianne", day: "mardi", period: "apres-midi", room: 2, typeOccupation: "complete", start: "13:00", end: "19:00" },
    { professionalId: "florianne", day: "jeudi", period: "matin", room: 2, typeOccupation: "complete", start: "08:00", end: "12:00" },
    { professionalId: "florianne", day: "jeudi", period: "apres-midi", room: 2, typeOccupation: "complete", start: "13:00", end: "19:00" },

    // Florianne — occupations partielles
    { professionalId: "florianne", day: "lundi", period: "matin", room: 2, typeOccupation: "partielle", start: "11:30", end: "12:00", comment: "Florianne · salle 2 · lundi de 11 h 30 à 12 h" },
    { professionalId: "florianne", day: "mercredi", period: "matin", room: 2, typeOccupation: "partielle", start: "11:30", end: "12:00", comment: "Florianne · salle 2 · mercredi de 11 h 30 à 12 h" },
    { professionalId: "florianne", day: "mercredi", period: "apres-midi", room: 2, typeOccupation: "partielle", start: "13:00", end: "15:00", approximate: true, comment: "Florianne · salle 2 · mercredi en début d’après-midi (horaire approximatif)" },
  ],
};

const professionalById = new Map(
  PLANNING_DATA.professionals.map((professional) => [professional.id, professional]),
);
const dayById = new Map(PLANNING_DATA.days.map((day) => [day.id, day]));
const periodById = new Map(PLANNING_DATA.periods.map((period) => [period.id, period]));
let selectedProfessionalId = null;
let assignments = new Map();
const hourCellByKey = new Map();

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatTime(time) {
  const [hours, minutes] = time.split(":");
  return minutes === "00" ? `${Number(hours)} h` : `${Number(hours)} h ${minutes}`;
}

function occupationDescription(occupation) {
  if (occupation.comment) return occupation.comment;
  const professional = professionalById.get(occupation.professionalId);
  const day = dayById.get(occupation.day).label.toLowerCase();
  return `${professional.name} · salle ${occupation.room} · ${day} de ${formatTime(occupation.start)} à ${formatTime(occupation.end)}`;
}

function activeOccupations() {
  return PLANNING_DATA.occupations.filter(
    (occupation) => professionalById.get(occupation.professionalId)?.active,
  );
}

function slotKey(day, room, hour) {
  return `${day}|${room}|${hour}`;
}

function periodHours(period) {
  const firstHour = timeToMinutes(period.start) / 60;
  const lastHour = timeToMinutes(period.end) / 60;
  return Array.from({ length: lastHour - firstHour }, (_, index) => firstHour + index);
}

function buildInitialAssignments() {
  const initialAssignments = new Map();

  activeOccupations().forEach((occupation) => {
    const period = periodById.get(occupation.period);
    const occupationStart = timeToMinutes(occupation.start);
    const occupationEnd = timeToMinutes(occupation.end);

    periodHours(period).forEach((hour) => {
      const hourStart = hour * 60;
      const hourEnd = (hour + 1) * 60;
      if (occupationStart >= hourEnd || occupationEnd <= hourStart) return;

      const key = slotKey(occupation.day, occupation.room, hour);
      const occupants = initialAssignments.get(key) ?? new Set();
      occupants.add(occupation.professionalId);
      initialAssignments.set(key, occupants);
    });
  });

  return initialAssignments;
}

function validateData() {
  const errors = [];
  const blockingConflicts = [];
  const advisoryOverlaps = [];
  const occupations = activeOccupations();

  PLANNING_DATA.occupations.forEach((occupation, index) => {
    const period = periodById.get(occupation.period);
    const start = timeToMinutes(occupation.start);
    const end = timeToMinutes(occupation.end);

    if (!professionalById.has(occupation.professionalId)) errors.push(`Professionnel inconnu à la ligne ${index + 1}.`);
    if (!dayById.has(occupation.day)) errors.push(`Jour inconnu à la ligne ${index + 1}.`);
    if (!period) errors.push(`Période inconnue à la ligne ${index + 1}.`);
    if (!PLANNING_DATA.rooms.includes(occupation.room)) errors.push(`Salle inconnue à la ligne ${index + 1}.`);
    if (!Number.isFinite(start) || !Number.isFinite(end) || start >= end) errors.push(`Horaire invalide à la ligne ${index + 1}.`);
    if (period && (start < timeToMinutes(period.start) || end > timeToMinutes(period.end))) {
      errors.push(`Horaire hors de la période à la ligne ${index + 1}.`);
    }
  });

  for (let firstIndex = 0; firstIndex < occupations.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < occupations.length; secondIndex += 1) {
      const first = occupations[firstIndex];
      const second = occupations[secondIndex];
      const samePlace = first.day === second.day && first.room === second.room;
      const overlaps =
        timeToMinutes(first.start) < timeToMinutes(second.end) &&
        timeToMinutes(second.start) < timeToMinutes(first.end);

      if (!samePlace || !overlaps) continue;

      const record = { first, second };
      if (first.typeOccupation === "complete" && second.typeOccupation === "complete") {
        blockingConflicts.push(record);
      } else {
        advisoryOverlaps.push(record);
      }
    }
  }

  return { errors, blockingConflicts, advisoryOverlaps };
}

function appendHeaders(board) {
  const dayCorner = document.createElement("div");
  dayCorner.className = "corner-cell corner-cell--day";
  dayCorner.setAttribute("aria-hidden", "true");
  board.append(dayCorner);

  const roomCorner = document.createElement("div");
  roomCorner.className = "corner-cell corner-cell--room";
  roomCorner.textContent = "Salle";
  board.append(roomCorner);

  PLANNING_DATA.days.forEach((day, dayIndex) => {
    const dayHeader = document.createElement("div");
    dayHeader.className = "day-header day-start day-end";
    dayHeader.style.gridColumn = `${2 + dayIndex * PLANNING_DATA.rooms.length} / span ${PLANNING_DATA.rooms.length}`;
    dayHeader.textContent = day.label;
    board.append(dayHeader);

    PLANNING_DATA.rooms.forEach((room, roomIndex) => {
      const roomHeader = document.createElement("div");
      roomHeader.className = "room-header";
      if (roomIndex === 0) roomHeader.classList.add("day-start");
      if (roomIndex === PLANNING_DATA.rooms.length - 1) roomHeader.classList.add("day-end");
      roomHeader.style.gridColumn = String(2 + dayIndex * PLANNING_DATA.rooms.length + roomIndex);
      roomHeader.textContent = String(room);
      roomHeader.setAttribute("aria-label", `${day.label}, salle ${room}`);
      board.append(roomHeader);
    });
  });
}

function createAxis(period) {
  const axis = document.createElement("div");
  axis.className = "period-axis";

  const name = document.createElement("span");
  name.className = "period-name";
  name.textContent = period.label;
  axis.append(name);

  const startHour = timeToMinutes(period.start) / 60;
  const endHour = timeToMinutes(period.end) / 60;
  const duration = endHour - startHour;

  for (let hour = startHour; hour <= endHour; hour += 1) {
    const label = document.createElement("span");
    label.className = "hour-label";
    if (hour === startHour) label.classList.add("hour-label--start");
    if (hour === endHour) label.classList.add("hour-label--end");
    label.style.top = `${((hour - startHour) / duration) * 100}%`;
    label.textContent = `${hour}h`;
    axis.append(label);
  }

  return axis;
}

function describeSlot(dayId, room, hour) {
  return `${dayById.get(dayId).label.toLowerCase()}, salle ${room}, de ${hour} h à ${hour + 1} h`;
}

function conflictBackground(colors) {
  if (colors.length === 2) {
    return `linear-gradient(135deg, ${colors[0]} 0 47%, #ffffff 47% 53%, ${colors[1]} 53% 100%)`;
  }

  const segment = 100 / colors.length;
  const stops = colors
    .map((color, index) => `${color} ${index * segment}% ${(index + 1) * segment}%`)
    .join(", ");
  return `conic-gradient(${stops})`;
}

function renderHourCell(cell, key, dayId, room, hour) {
  const occupantIds = [...(assignments.get(key) ?? [])];
  const professionals = occupantIds.map((id) => professionalById.get(id)).filter(Boolean);
  const names = professionals.map((professional) => professional.name);

  cell.classList.toggle("is-occupied", professionals.length > 0);
  cell.classList.toggle("is-conflict", professionals.length > 1);
  cell.style.removeProperty("--cell-color");
  cell.style.removeProperty("--cell-background");

  if (professionals.length === 1) {
    cell.style.setProperty("--cell-color", professionals[0].color);
  } else if (professionals.length > 1) {
    cell.style.setProperty(
      "--cell-background",
      conflictBackground(professionals.map((professional) => professional.color)),
    );
  }

  const place = describeSlot(dayId, room, hour);
  const detail = names.length ? names.join(" et ") : "libre";
  cell.title = `${place} · ${detail}`;
  cell.setAttribute("aria-label", `${place}, ${detail}`);
}

function countInteractiveConflicts() {
  return [...assignments.values()].filter((occupants) => occupants.size > 1).length;
}

function updateSelectionStatus(message) {
  const status = document.querySelector("#selectionStatus");
  const conflicts = countInteractiveConflicts();
  status.textContent = conflicts
    ? `${message} · ${conflicts} conflit${conflicts > 1 ? "s" : ""} à vérifier.`
    : message;
}

function toggleHour(dayId, room, hour) {
  if (!selectedProfessionalId) {
    updateSelectionStatus("Sélectionnez d’abord un kiné dans la légende.");
    return;
  }

  const key = slotKey(dayId, room, hour);
  const occupants = assignments.get(key) ?? new Set();
  const wasPresent = occupants.has(selectedProfessionalId);

  if (wasPresent) {
    occupants.delete(selectedProfessionalId);
  } else {
    occupants.add(selectedProfessionalId);
  }

  if (occupants.size) assignments.set(key, occupants);
  else assignments.delete(key);

  renderHourCell(hourCellByKey.get(key), key, dayId, room, hour);

  const professional = professionalById.get(selectedProfessionalId);
  const action = wasPresent ? "retiré" : "ajouté";
  updateSelectionStatus(
    `${professional.name} ${action} · ${describeSlot(dayId, room, hour)}.`,
  );
}

function createHourCell(dayId, room, hour) {
  const key = slotKey(dayId, room, hour);
  const cell = document.createElement("button");
  cell.type = "button";
  cell.className = "hour-cell";
  cell.dataset.slotKey = key;
  cell.addEventListener("click", () => toggleHour(dayId, room, hour));
  hourCellByKey.set(key, cell);
  renderHourCell(cell, key, dayId, room, hour);
  return cell;
}

function appendPeriod(board, period) {
  const band = document.createElement("div");
  band.className = `period-band period-band--${period.id === "matin" ? "morning" : "afternoon"}`;
  band.style.setProperty(
    "--hours",
    String((timeToMinutes(period.end) - timeToMinutes(period.start)) / 60),
  );
  band.append(createAxis(period));

  PLANNING_DATA.days.forEach((day) => {
    PLANNING_DATA.rooms.forEach((room, roomIndex) => {
      const track = document.createElement("div");
      track.className = "room-track";
      if (roomIndex === 0) track.classList.add("day-start");
      if (roomIndex === PLANNING_DATA.rooms.length - 1) track.classList.add("day-end");
      track.setAttribute("aria-label", `${day.label}, salle ${room}, ${period.label.toLowerCase()}`);

      periodHours(period).forEach((hour) => track.append(createHourCell(day.id, room, hour)));

      band.append(track);
    });
  });

  board.append(band);
}

function appendLunchGap(board) {
  const gap = document.createElement("div");
  gap.className = "lunch-gap";
  const label = document.createElement("span");
  label.className = "lunch-label";
  label.textContent = "12–13h";
  gap.append(label);
  board.append(gap);
}

function renderLegend() {
  const legend = document.querySelector("#legend");

  PLANNING_DATA.professionals
    .filter((professional) => professional.active)
    .forEach((professional) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "legend-item";
      item.style.setProperty("--person-color", professional.color);
      item.style.setProperty("--person-ink", professional.ink);
      item.dataset.professionalId = professional.id;
      item.setAttribute("aria-pressed", "false");
      item.textContent = professional.name;
      item.addEventListener("click", () => {
        selectedProfessionalId =
          selectedProfessionalId === professional.id ? null : professional.id;

        legend.querySelectorAll(".legend-item").forEach((button) => {
          button.setAttribute(
            "aria-pressed",
            String(button.dataset.professionalId === selectedProfessionalId),
          );
        });

        updateSelectionStatus(
          selectedProfessionalId
            ? `${professional.name} sélectionné · cliquez sur une heure pour l’ajouter ou la retirer.`
            : "Sélection annulée · choisissez un kiné pour modifier le planning.",
        );
      });
      legend.append(item);
    });
}

function resetPlanning() {
  assignments = buildInitialAssignments();
  hourCellByKey.forEach((cell, key) => {
    const [dayId, room, hour] = key.split("|");
    renderHourCell(cell, key, dayId, Number(room), Number(hour));
  });
  updateSelectionStatus("Planning réinitialisé à l’organisation de départ.");
}

function initializePlanning() {
  const board = document.querySelector("#planningBoard");
  const validation = validateData();
  assignments = buildInitialAssignments();

  appendHeaders(board);
  appendPeriod(board, PLANNING_DATA.periods[0]);
  appendLunchGap(board);
  appendPeriod(board, PLANNING_DATA.periods[1]);
  renderLegend();
  document.querySelector("#resetButton").addEventListener("click", resetPlanning);

  const status = document.querySelector("#validationStatus");
  status.textContent = validation.errors.length
    ? `${validation.errors.length} incohérence(s) dans les données.`
    : `${validation.blockingConflicts.length} conflit(s) bloquant(s) détecté(s).`;
}

if (typeof window !== "undefined") window.PLANNING_DATA = PLANNING_DATA;
if (typeof document !== "undefined") initializePlanning();
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PLANNING_DATA,
    validateData,
    timeToMinutes,
    periodHours,
    buildInitialAssignments,
  };
}
