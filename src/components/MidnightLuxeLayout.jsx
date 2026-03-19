import React from 'react';

const MidnightLuxeLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-void text-ghost font-sans selection:bg-plasma selection:text-white overflow-x-hidden">
      {/* Content */}
      <main className="relative z-10 w-full">
        {children}
      </main>
    </div>
  );
};

export default MidnightLuxeLayout;
