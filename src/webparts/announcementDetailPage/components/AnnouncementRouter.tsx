import * as React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AnnouncementDetailWithSharePoint } from './AnnouncementDetailWithSharePoint';

export interface IAnnouncementRouterProps {
  basePath?: string;
}

export const AnnouncementRouter: React.FC<IAnnouncementRouterProps> = ({
  basePath = '/announcements'
}) => {
  return (
    <Router>
      <Routes>
        <Route path="/announcements/:slug" element={<AnnouncementDetailWithSharePoint basePath={basePath} useSharePoint={true} />} />
        <Route path="/announcements" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
