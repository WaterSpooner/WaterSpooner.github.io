import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ProjectCard} from '../components/ProjectCard'
export default function Projects() {
  return (
    <>
    <ProjectCard title = "Housemates" link= "https://devpost.com/software/housemates" tags={new Array("React Native","Firebase","Machine Learning","Azure","Hackathon")} description = ""></ProjectCard>
    <ProjectCard title = "Marching Cubes" link= "" tags={new Array("Rust","Bevy Engine","ECS")} description = ""></ProjectCard>
    <ProjectCard title = "Graphics Card Stock Tracker" link= "https://github.com/WaterSpooner/TwitterBot" tags={new Array("Python","Twilio","test")} description = ""></ProjectCard>
    <ProjectCard title = "Wordle Solver" link= "https://github.com/WaterSpooner/WordleSolver" tags={new Array("Python")} description = ""></ProjectCard>
    <ProjectCard title = "Personal Informatics Tracker" link= "" tags={new Array("Python","SQL","Svelte","Vue.js")} description = ""></ProjectCard>
    <ProjectCard title = "Badminton AI Coach" link= "" tags={new Array("Python","Machine Learning","React Native")} description = ""></ProjectCard>
    </>
  )
}
