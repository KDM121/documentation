import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    description: (
      <>
        This site primarily hosts documentation for projects 
        that i run/ have run in my homelab. It acts as a 
        centralised knowledgebase for me.
      </>
    )
  },
  {
    title: 'Reliability',
    description: (
      <>
        There is no guarantee than any information on this 
        site is up to date or even correct, it is used for 
        me to reference for projects and services that i run.
      </>
    )
  },
  {
    title: 'Commands',
    description: (
      <>
        There should be various useful code snippets and 
        commands on this site to help with running tasks 
        on linux and windows machines.
      </>
    )
  },

];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>  
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />  
          ))}
        </div>
      </div>
    </section>
  );
}
