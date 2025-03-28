import React from "react";

export default function Header() {
  return (
    <header className="bg-primary text-white py-5">
      <div className="container text-center">
        <h1 className="display-4 my-4">Organize Your Life with TaskMaster</h1>
        <p className="lead mb-4">
          TaskMaster helps you keep track of your tasks, set priorities, and achieve your goals.
        </p>
        <a href="#" className="btn btn-outline-light">
          Start Managing Your Tasks
        </a>
      </div>
    </header>
  );
}

Header.displayName = 'HomePageHeader';