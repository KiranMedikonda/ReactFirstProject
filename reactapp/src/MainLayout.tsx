import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';

const MainLayout: React.FC<{ children?: React.ReactNode }> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} tab={tab} setTab={setTab} />
      <Drawer
        variant="temporary"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          zIndex: 1300,
          '& .MuiDrawer-paper': {
            width: 220,
            boxSizing: 'border-box',
            background: '#f5f5f5',
            borderRight: 0
          },
        }}
      >
        <Sidebar open={true} width={220} onClose={() => setSidebarOpen(false)} />
      </Drawer>
      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
