import React from "react";
import styles from "./skills.module.css";

export default function SkillsBanner() {
  const skills = [
    {
      name: 'Django',
      color: '#dadada'
    },
    {
      name: 'FastAPI',
      color: '#dadada'
    },
    {
      name: 'GO',
      color: '#dadada'
    },
    {name: 'React'},
    {name: 'WPF'},
    {
      name: 'Docker',
      color: '#dadada'
    },
    {name: 'AWS'},
    {name: 'k8s'},
    {
      name: 'MySQL',
      color: '#dadada'
    },
    {
      name: 'Postgresql',
      color: '#dadada'
    },
    {name: 'MongoDB'},
    {name: 'Elaticsearch'},
    {name: 'Redis'},
    {name: 'RabbitMQ'},
    {name: 'Kafka'},
    {name: 'Kinesis'},
    {name: 'Git Actions'},
    {name: 'gRPC'},
  ]
  return (
    <>
      <div className={styles.bannerSkills}>
        {skills.map((skill) => (
          <div className={styles.bannerSkill} style={{color: skill.color}}>
            {skill.name}
          </div>
        ))}
      </div>
    </>
  )
}