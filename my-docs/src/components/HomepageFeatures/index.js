import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Web Javascript',
    description: (
      <>
        Vanilla SDK integration.
      </>
    ),
    buttonText: "WebJs Documentation",
    redirectLink: 'websdk/docs/intro'
  },
  {
    title: 'GTM',
    description: (
      <>
        SDK Integration using GTM.
      </>
    ),
    buttonText: "GTM Documentation",
     redirectLink: 'gtm/docs/intro'
    
  },
  {
    title: 'Adobe Launch',
    description: (
      <>
        SDK Integration using Adobe Launch.
      </>
    ),
    buttonText: "Adobe Launch Documentation",
     redirectLink: 'adobeLaunch/docs/intro'
    
  }
];

function Feature({title, description, buttonText, redirectLink}) {
  return (
    <div className={styles.featureContainer}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={redirectLink}>
            {buttonText}
          </Link>
        </div>
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
