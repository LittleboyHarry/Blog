import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1
            className={clsx('hero__title', styles.heroTitle)}
            style={{ color: 'black' }}
          >
            <span style={{ display: 'inline-block' }}>LittleboyHarry</span>
            <span style={{ display: 'inline-block' }}>博客</span>
          </h1>
          <br />
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary disabled',
                styles.getStarted,
              )}
            >
              网站建设中🔨
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container"></div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
