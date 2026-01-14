# 📖 Smart Dictionary Web Application

A modern, mobile-responsive dictionary web application that allows users to search for English words and view their meaning, part of speech, example sentence, phonetic pronunciation, and audio pronunciation using a public Dictionary API.

---

## 🎯 Objective

To create a web application where users can:
- Search for an English word
- View its meaning and part of speech
- See an example sentence
- View phonetic pronunciation
- Listen to audio pronunciation
- Receive proper error messages for invalid inputs

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the web application  
- **CSS3** – Styling and responsive design  
- **JavaScript (ES6)** – Application logic and API integration  
- **Public Dictionary API** – https://api.dictionaryapi.dev  

---

## 📂 Project Structure
dictionary-app/
│
├── index.html # Main HTML file
├── style.css # CSS for styling and responsiveness
├── script.js # JavaScript logic and API handling
└── README.md # Project documentation

---

## 🚀 Features

### 1. Word Search Functionality
- Input field to enter an English word
- Search button
- Search triggered by pressing the **Enter key**

### 2. Meaning Display
- Displays at least one valid meaning
- Shows the **part of speech** (noun, verb, adjective, etc.)

### 3. Example Sentence
- Displays an example sentence if available
- Shows **"Example not available"** when missing

### 4. Pronunciation
- Displays phonetic spelling
- Provides an **audio pronunciation button** if audio is available

### 5. Error Handling
- Empty input → Alert message
- Word not found →  
  **"Word not found. Please try another word."**

### 6. Responsive Design
- Works on **mobile, tablet, and desktop**
- Modern glassmorphism UI
- Smooth user experience

---

## 📱 Responsive Design

- Mobile-first layout
- Flexible components using CSS Flexbox
- Media queries for small screens
- Touch-friendly buttons and inputs

---

## 🔗 API Used

**Dictionary API (Free & Public)**  
https://api.dictionaryapi.dev/api/v2/entries/en/{word}



No authentication or API key required.

---

## 🧪 Example Test Cases

| Input | Expected Output |
|------|----------------|
| hello | Meaning, phonetic, example, audio |
| run | Meaning with part of speech |
| qwertyuiop | Word not found message |
| (empty input) | Alert message |

---

## ▶️ How to Run the Project

1. Download or clone the project
2. Open `index.html` in any modern web browser
3. Enter a word and click **Search** or press **Enter**

---

## 📌 Future Enhancements

- Dark / Light mode toggle
- Loading animation
- Search history
- Multiple meanings display
- React.js version

---

## 👨‍🎓 Author

Developed as an academic project to demonstrate:
- API integration
- Responsive UI design
- JavaScript DOM manipulation
- Error handling best practices

---

## 📜 License

This project is open-source and free to use for educational purposes.

