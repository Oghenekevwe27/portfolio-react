import React from 'react'
import { useState } from 'react'
import { projects } from '../data/project'

const Projectpage = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(projects)
  return (
    <section className="projects">
      <h1>Project</h1>
      <div className="card-wrap">
        <div className="cards">
          {cards.map(({ id, title, desc, github, demo, image }) => (
            <article key={id}>
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <p>{desc}</p>
              <ul>
                <li>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="github"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="demo"
                  >
                    Demo
                  </a>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projectpage
