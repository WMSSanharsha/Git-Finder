import React from "react";

function About() {
  return (
    <div className="flex justify-between align-middle">
      <div>
        <h1 className="text-6xl mb-4">Github FindX</h1>
        <p className="mb-4 text-2xl font-light">
          A React app to search GitHub profiles and see profile details.
        </p>
        <p>- Developed by Sakila Sanharsha - </p>
      </div>
      <div className="h-1/5 w-1/5">
        <img src="/images/mylogo.png" alt="My Logo" />
      </div>
    </div>
  );
}

export default About;
