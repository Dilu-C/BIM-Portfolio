# Dilupa Chathuranga - BIM & Automation Portfolio

Welcome to your official professional portfolio workspace. This folder is synchronized across your **Home PC** and **Office PC** via **Google Drive**.

---

## 📂 Folder Structure

```
Portfolio/
├── index.html                   # Main Portfolio Website (Double click to open in Chrome/Edge)
├── css/
│   └── styles.css               # Styling (Architectural dark/light theme & Print/PDF styles)
├── js/
│   ├── main.js                  # Interactive logic (modals, filters, PDF export trigger)
│   └── projects-data.js         # Project specifications, metrics, and automation details
└── assets/
    ├── images/
    │   └── projects/            # Drop your project renders/screenshots here
    └── docs/                    # Store your CV/certificates here if needed
```

---

## 🚀 How to Use & Present Your Portfolio

### 1. View Locally on Any Computer (Home or Office)
Simply navigate to `G:\My Drive\Portfolio\` and double-click **`index.html`**. It will open instantly in Google Chrome or Microsoft Edge. No web server required!

### 2. Export as a High-Quality PDF (for CV or Job Submissions)
- Open `index.html` in your browser.
- Click the **"Export PDF"** button in the navigation bar or the **"Generate & Print / Save PDF"** button in the Contact section.
- In the print dialog, select **"Save as PDF"** as the Destination.
- The built-in print stylesheet will automatically format the portfolio into a clean, executive document.

### 3. Publish to GitHub Pages (Get a Free Live Web Link)
To share your portfolio with employers worldwide via a live URL (e.g. `https://Dilu-C.github.io/portfolio`):
1. In your GitHub account (`Dilu-C`), create a new public repository named `portfolio`.
2. Push the contents of this folder to that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/Dilu-C/portfolio.git
   git push -u origin main
   ```
3. In GitHub repo Settings -> **Pages**, select branch `main` and save. Your site will be live instantly!

---

## 📸 Updating Project Images Later
When you have renders or screenshots ready for:
- Office Building
- Luxury Beach Villa with Skydeck
- Bedford Dwelling
- D&W Scheduling Tool
Simply save the image inside `assets/images/projects/` and reference it in `js/projects-data.js`!
