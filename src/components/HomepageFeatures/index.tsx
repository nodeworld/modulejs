import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Plug and play',
    Svg: require('@site/static/img/plug.svg').default,
    description: (
      <>
        Just import the autocomplete module and provide the necessary inputs.
      </>
    ),
  },
  {
    title: 'No external dependencies',
    Svg: require('@site/static/img/dependency.svg').default,
    description: (
      <>
        Lightweight module with no external dependencies.
      </>
    ),
  },
  {
    title: '100% customization',
    Svg: require('@site/static/img/customize.svg').default,
    description: (
      <>
        Allows to customize data, CSS and behavior of the autocomplete module. Supports libraries like bootstrap and tailwind.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
