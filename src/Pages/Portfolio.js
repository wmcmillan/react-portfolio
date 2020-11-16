import React from 'react'
import './style.css'

export default function Portfolio() {
    return (
        <div>
            <div className="jumbotron">
        <h1 className="display-4" id="project-header">Projects</h1>
          <section id="covid-stats">
            <h4>United States COVID-19 Statistics</h4>
            <ul>
              <li>This page can be used to view the current COVID-19 statistics in the region of the user's choosing. Users may seek out this information in relation to their personal health/well-being or that of a loved one. Once the user inputs a city and state, they can view current COVID-19 statistics, local testing centers, and the contact information for the associated county health department. Their search history is also saved and can be clicked on to re-view that location's information.</li>
              <li><a href="https://sophia2798.github.io/covid_stats/">Deployed Website</a></li>
              <li><a href="https://github.com/sophia2798/covid_stats">Repository</a></li>
            </ul>
          </section>

          <section id="gerome-the-gnome">
            <h4>Gerome the Gnome</h4>
            <ul>
              <li>Need some quick and unique tabletop RPG characters? Gerome the Gnome is an NPC generator that gives you a randomly generated name and statistics with modifiers based on the selected race/ class of your desired character. You are also able to create and save notes about the character in order to remember who they are and what impact they had on the game.</li>
              <li><a href="https://gerome-the-gnome.herokuapp.com/">Deployed Website</a></li>
              <li><a href="https://github.com/insideseanshead/gerome-the-gnome">Repository</a></li>
            </ul>
          </section>
      
      </div>
        </div>
    )
}
