// Dummy database of booked slots (this would come from the backend in real app)
const bookedSlots = {
  "2025-06-20": ["09:00 AM", "01:00 PM"],
  "2025-06-21": ["11:00 AM"]
};

const generateTimeSlots = () => {
  const slots = [];
  let start = 9; // 9AM
  const end = 18; // 6PM
  const interval = 2;

  for (let hour = start; hour < end; hour += interval) {
    let time = `${hour < 10 ? "0" + hour : hour}:00`;
    slots.push(formatTime(time));
  }
  return slots;
};

const formatTime = (time24) => {
  const [h, m] = time24.split(":");
  const hour = parseInt(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${m} ${ampm}`;
};

document.getElementById("appointment-date").addEventListener("change", function () {
  const date = this.value;
  const timeSlotsDiv = document.getElementById("time-slots");
  timeSlotsDiv.innerHTML = "";

  const slots = generateTimeSlots();
  const booked = bookedSlots[date] || [];

  slots.forEach((slot) => {
    const btn = document.createElement("div");
    btn.className = "slot";
    btn.innerText = slot;

    if (booked.includes(slot)) {
      btn.classList.add("disabled");
    } else {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".slot").forEach(s => s.classList.remove("selected"));
        btn.classList.add("selected");
      });
    }

    timeSlotsDiv.appendChild(btn);
  });
});
