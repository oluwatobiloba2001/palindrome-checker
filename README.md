````markdown
# 🌀 Palindrome Checker

A simple, interactive web application that allows users to check whether a word, phrase, or sentence is a palindrome — a sequence that reads the same backward as forward, ignoring punctuation, case, and spacing.

## 🔍 Features

- ✅ Checks whether the input is a valid palindrome
- ✨ Strips out spaces, punctuation, symbols, and is case-insensitive
- 🧼 Input validation with helpful alerts
- 📱 Responsive and mobile-friendly design
- 🎨 Styled using modern CSS (Flexbox layout, custom colors, hover effects)

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Media Queries)
- Vanilla JavaScript (DOM manipulation, regex)

## 📂 Project Structure

```plaintext
palindrome-checker/
├── index.html       # HTML structure
├── styles.css       # Stylesheet
└── script.js        # JavaScript logic
````

## 💡 How It Works

1. User enters a word, sentence, or phrase.
2. JavaScript strips non-alphanumeric characters and converts the text to lowercase.
3. It compares the cleaned string to its reverse.
4. Displays a message if the input **is** or **is not** a palindrome.

### ✏️ Example

| Input                            | Output                                            |
| -------------------------------- | ------------------------------------------------- |
| `Racecar`                        | ✅ Racecar is a palindrome.                        |
| `A man, a plan, a canal. Panama` | ✅ A man, a plan, a canal. Panama is a palindrome. |
| `Hello`                          | ❌ Hello is not a palindrome.                      |

## 📦 Installation

To run the project locally:

1. Clone this repo:

   ```bash
   git clone https://github.com/yourusername/palindrome-checker.git
   ```
2. Navigate into the project folder:

   ```bash
   cd palindrome-checker
   ```
3. Open `index.html` in your browser:

   ```bash
   open index.html
   ```

## ✅ Future Improvements

* Add dark/light mode toggle
* Add voice input support
* Include palindrome statistics (e.g., word count, longest palindrome, etc.)

## 🙌 Acknowledgments

Inspired by freeCodeCamp and beginner-friendly frontend challenges.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
