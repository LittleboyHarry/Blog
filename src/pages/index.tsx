import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { TechStackIcons } from '../components';
import styled from 'styled-components';

const StyledSpecialPageCard = styled.div`
  min-width: 100%;
  padding: 1rem;
  display: inline-block;
  @media only screen and (min-width: 400px) {
    minwidth: '50%';
  }
  @media only screen and (min-width: 640px) {
    minwidth: '33%';
  }
`;

function SpecialPage(props: {
  name: string;
  desc: string;
  path: string;
  color?: string;
}) {
  return (
    <StyledSpecialPageCard>
      <a
        href={props.path}
        target="_self"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div
          className="card"
          /* 
          {...(props.color && {
            style: { color: 'white', background: props.color },
          })}
           */
        >
          <div className="card__header">
            <h3>{props.name}</h3>
          </div>
          <div className="card__body">
            <p>{props.desc}</p>
          </div>
        </div>
      </a>
    </StyledSpecialPageCard>
  );
}

function SpecialPages() {
  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <SpecialPage
        name="解决方法汇总"
        desc="我收集的日常技术问题"
        path="/solutions"
        color="#F33"
      />
    </div>
  );
}

function Home() {
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
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary disabled',
                styles.getStarted,
              )}
            >
              网站建设中🔨
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        <section className={styles.features}>{/* <SpecialPages /> */}</section>
        <div className="container" style={{ marginBottom: '64px' }}>
          <TechStackIcons />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
