# 📚 React Book Vibe

Welcome to **React Book Vibe**, a modern book-tracking application built with **React 19**. This project was created as a hands-on learning journey to master the core fundamental concepts of React, from state management to component architecture.

## 🚀 About the Project

React Book Vibe is a simple yet functional web application that allows users to browse a collection of books, read detailed reviews, and manage their reading progress. Users can categorize books into two lists: **Read Books** and **Wishlist**.

I built this project to move beyond theory and understand how to build a real-world, interactive UI using the latest React ecosystem tools.

## ✨ Key Features

- 📖 **Browse Books:** Explore a curated list of books with essential details like author, category, and rating.
- 🔍 **Detailed View:** Click on any book to see a full review, page count, and more.
- 📑 **Read & Wishlist Tracking:**
  - Add books to your "Read" list once you've finished them.
  - Save books you're interested in to your "Wishlist".
  - Automatic validation: A book can't be added to the Wishlist if it's already in the Read list!
- 💾 **Persistent Storage:** Your lists are saved to `localStorage`, so your progress isn't lost when you refresh the page.
- 🔔 **Interactive Feedback:** Real-time notifications using **React Toastify** when adding books or handling errors.
- 📱 **Responsive Design:** A sleek, modern UI built with **Tailwind CSS 4** and **DaisyUI 5**, fully optimized for all screen sizes.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 🧠 Core React Concepts Learned

While building this project, I focused on these fundamental concepts:

- **Component-Based Architecture:** Breaking down the UI into reusable components like `Navbar`, `BookCard`, and `Banner`.
- **State Management:** Using the **Context API** (`BookProvider`) to manage global state across the entire app without prop drilling.
- **Hooks:** Deepening my understanding of `useState`, `useEffect`, and `useContext`.
- **Routing:** Implementing dynamic routes (e.g., `/bookDetails/:id`) and using loaders for data fetching with React Router.
- **Conditional Rendering:** Dynamically showing/hiding content based on user interaction and data availability.
- **Data Persistence:** Interfacing with the browser's `localStorage` to save user data.

## 📁 Project Structure

```text
src/
├── components/   # Reusable UI components
├── contexts/     # Global state management (BookProvider)
├── layout/       # Main page layouts
├── pages/        # Main application views (Homepage, BookDetails, etc.)
├── routes/       # React Router configuration
├── utils/        # Helper functions (localDB logic)
└── assets/       # Images and icons
```

---

*This project was built with ❤️ to learn the "Vibe" of React!*
