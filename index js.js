// JavaScript to dynamically create the court booking interface

// Create the basic structure of the page
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f4f4";

// Container for the booking system
const container = document.createElement("div");
container.style.textAlign = "center";
container.style.padding = "20px";
container.style.backgroundColor = "#fff";
container.style.borderRadius = "8px";
container.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
document.body.appendChild(container);

// Title
const title = document.createElement("h1");
title.textContent = "7 Hills Badminton Court Booking";
title.style.fontSize = "24px";
title.style.fontWeight = "bold";
title.style.marginBottom = "10px";
container.appendChild(title);

// Price information
const priceInfo = document.createElement("p");
priceInfo.textContent = "Price: ₹200 per hour";
priceInfo.style.fontSize = "16px";
priceInfo.style.marginBottom = "20px";
container.appendChild(priceInfo);

// Slots container
const slotsContainer = document.createElement("div");
slotsContainer.style.display = "flex";
slotsContainer.style.flexWrap = "wrap";
slotsContainer.style.justifyContent = "center";
container.appendChild(slotsContainer);

// Copyright
const copyright = document.createElement("p");
copyright.textContent = "© 2024 Vivaan. All Rights Reserved.";
copyright.style.marginTop = "20px";
copyright.style.fontSize = "12px";
copyright.style.color = "#888";
container.appendChild(copyright);

// JavaScript to handle slot booking

const hours = Array.from({ length: 16 }, (_, i) => i + 6); // Hours from 6 AM to 10 PM
const bookedSlots = []; // Track booked slots
const pricePerHour = 200; // Price per hour

// Function to format hours in AM/PM format
function formatHour(hour) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const adjustedHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${adjustedHour} ${period}`;
}

// Function to create slots
function createSlots() {
    slotsContainer.innerHTML = ''; // Clear previous slots

    hours.forEach((hour) => {
        const slotDiv = document.createElement('div');
        slotDiv.style.width = '48%';
        slotDiv.style.padding = '15px';
        slotDiv.style.margin = '5px';
        slotDiv.style.borderRadius = '8px';
        slotDiv.style.backgroundColor = '#4caf50';
        slotDiv.style.color = '#fff';
        slotDiv.style.fontWeight = 'bold';
        slotDiv.style.textAlign = 'center';
        slotDiv.style.cursor = 'pointer';

        if (bookedSlots.includes(hour)) {
            slotDiv.style.backgroundColor = '#ff6b6b';
            slotDiv.style.cursor = 'not-allowed';
        }

        slotDiv.textContent = `${formatHour(hour)} - ${formatHour(hour + 1)}`;

        // Handle slot click
        slotDiv.addEventListener('click', () => {
            if (!bookedSlots.includes(hour)) {
                bookedSlots.push(hour);
                createSlots(); // Re-render slots
            }
        });

        slotsContainer.appendChild(slotDiv);
    });
}

// Initialize slots on page load
createSlots();
