// Skills.js
import React from 'react';
import SkillsPieChart from './SkillsPieChart';

function Skills() {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>

      <div className="skill-dropdowns">
        <div className="frontend-skills">
          <h3>Frontend Development</h3>
          {/* Frontend skills dropdown */}
          <select>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            {/* Add more frontend skills here */}
          </select>
        </div>

        <div className="backend-skills">
          <h3>Backend Development</h3>
          {/* Backend skills dropdown */}
          <select>
            <option value="nodejs">Node.js</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            {/* Add more backend skills here */}
          </select>
        </div>
      </div>

      <div className="pie-chart-container">
        <SkillsPieChart />
      </div>

    </div>
  );
}

export default Skills;
