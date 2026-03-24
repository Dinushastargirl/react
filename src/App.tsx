/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import DayDetail from './pages/DayDetail';

export default function App() {
  return (
    <CourseProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/day/:id" element={<DayDetail />} />
          </Routes>
        </Layout>
      </Router>
    </CourseProvider>
  );
}
