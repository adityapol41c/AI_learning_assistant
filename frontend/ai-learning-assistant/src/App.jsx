import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import DocumentListPage from './pages/Documents/DocumentListPage';
import DocumentDetailPage from './pages/Documents/DocumentDetailPage';
import FlashcardsListPage from './pages/Flashcards/FlashcardsListPage';
import FlashcardPage from './pages/Flashcards/FlashCardPage';           // FlashcardPage name change to FlashCardPage
import QuizTakePage from './pages/Quizzes/QuizTakePage';
import QuizResultPage from './pages/Quizzes/QuizResultPage';
import ProfilePage from './pages/Profile/ProfilePage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useAuth } from './context/AuthContext';




const App = () => {
  const {isAuthenticated, loading} = useAuth()

  if(loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>loading...</p>
      </div>
    )
  }

  return(
    <Router>
      <Routes>
        <Route 
        path="/" 
        element={isAuthenticated ? <Navigate to="/dashboard" replace/> : 
          <Navigate to="/login" replace/>
        }/>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/documents" element={<DocumentListPage />}></Route>
          <Route path="/documents/:id" element={<DocumentDetailPage />}></Route>
          <Route path="/flashcards" element={<FlashcardsListPage />}></Route>
          <Route path="/documents/:id/flashcards" element={<FlashcardPage />}></Route>
          <Route path="/quizzes/:quizId" element={<QuizTakePage />}></Route>
          <Route path="/quizzes/:quizId/results" element={<QuizResultPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Route>

        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App