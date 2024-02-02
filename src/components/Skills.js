
import React from 'react';
import SkillsPieChart from './SkillsPieChart';

function Skills() {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>

      <div className="skill-dropdowns">
        <div className="frontend-skills">
          <h3>Frontend Development</h3>
          <select>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="seo">SEO Basics</option>
            <option value="responsive-design">Responsive Design</option>
            <option value="css-preprocessors">CSS Preprocessors</option>
            <option value="version-control">Version Control Systems: Git</option>
            <option value="frontend-framework">Front-end Frampworks: Boostrap</option>
            <option value="javascript-framework">JS Frameworks: React</option>
            <option value="accessibility">Accessibility Standards </option>
            <option value="cross-browser">Cross-Browser Compatibility</option>
            <option value="build-tools">Front-end Build Tools: Webpack</option>
          </select>
        </div>

        <div className="backend-skills">
          <h3>Backend Development</h3>
          <select>
            <option value="runtime">Runtime Environment: Node.js</option>
            <option value="languages">Languages: JavaScript </option>
            <option value="server-side">Server-Side Frameworks: Express.js</option>
            <option value="database">Database: MySQL, MongoDB</option>
            <option value="java">Authentication and Authorization</option>
            <option value="api">Application Programming Interface</option>
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
