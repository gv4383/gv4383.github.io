import React from 'react'

import reactLogo from '../assets/skills/react_logo.svg'
import es6Logo from '../assets/skills/es6_logo.svg'
import expressLogo from '../assets/skills/express_logo.svg'
import vueLogo from '../assets/skills/vue_logo.svg'
import gitLogo from '../assets/skills/git_logo.svg'
import postgresLogo from '../assets/skills/postgres_logo.svg'
import nodeLogo from '../assets/skills/node_logo.svg'
import npmLogo from '../assets/skills/npm_logo.svg'
import sassLogo from '../assets/skills/sass_logo.svg'
import cssLogo from '../assets/skills/css_logo.svg'
import reduxLogo from '../assets/skills/redux_logo.svg'
import htmlLogo from '../assets/skills/html_logo.svg'
import railsLogo from '../assets/skills/rails_logo.svg'
// import railsLogo from '../assets/skills/rails-logo.png'

const skillsArray = [
  {
    id: '1',
    name: 'React',
    url: 'https://reactjs.org/',
    src: reactLogo,
  },
  {
    id: '2',
    name: 'Redux',
    url: 'https://redux.js.org/',
    src: reduxLogo,
  },
  {
    id: '3',
    name: 'Ruby on Rails',
    url: 'https://rubyonrails.org/',
    src: railsLogo,
    // src: '',
  },
  {
    id: '4',
    name: 'Vue.js',
    url: 'https://vuejs.org/',
    src: vueLogo,
  },
  {
    id: '5',
    name: 'ES6+',
    url: 'https://es6.io/',
    src: es6Logo,
  },
  {
    id: '6',
    name: 'Express',
    url: 'https://expressjs.com/',
    src: expressLogo,
  },
  {
    id: '7',
    name: 'Node',
    url: 'https://nodejs.org/en/',
    src: nodeLogo,
  },
  {
    id: '8',
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    src: postgresLogo,
  },
  {
    id: '9',
    name: 'Sass',
    url: 'https://sass-lang.com/',
    src: sassLogo,
  },
  {
    id: '10',
    name: 'HTML5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    src: htmlLogo,
  },
  {
    id: '11',
    name: 'CSS3',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
    src: cssLogo,
  },
  {
    id: '12',
    name: 'Git + GitHub',
    url: 'https://git-scm.com/',
    src: gitLogo,
  }
]

const Skills = () => {
  const displaySkills = skillsArray.map(skill => {
    return (
      <div key={skill.id} className="dev-icon">
        <a
          className="no-link hover-icon"
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{skill.name}</p>
          <div>
            <img
              className="hvr-grow"
              src={skill.src}
              alt={skill.name}
            />
          </div>
        </a>
      </div>
    )
  })

  return <div id="skills">{skillsArray[0] && displaySkills}</div>
};

export default Skills