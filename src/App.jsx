import "./app.css"
import 'katex/dist/katex.min.css';

import { Routes, Route } from "react-router-dom";

import ArticlesPage from "./Pages/ArticlesPage";
import HomePage from "./Pages/HomePage";
import ArticleCreate from "./Pages/ArticleCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/article-create" element={<ArticleCreate/>} />
    </Routes>
  );
}

export default App;
