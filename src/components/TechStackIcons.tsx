import React from 'react';
import { createUseStyles } from 'react-jss';

import IconAndroid from 'devicon/icons/android/android-original.svg';
import IconBash from 'devicon/icons/bash/bash-original.svg';
import IconChrome from 'devicon/icons/chrome/chrome-original.svg';
import IconCplusplus from 'devicon/icons/cplusplus/cplusplus-original.svg';
import IconD3js from 'devicon/icons/d3js/d3js-original.svg';
import IconDocker from 'devicon/icons/docker/docker-original-wordmark.svg';
import IconElectron from 'devicon/icons/electron/electron-original.svg';
import IconFlutter from 'devicon/icons/flutter/flutter-original.svg';
import IconGithub from 'devicon/icons/github/github-original-wordmark.svg';
import IconGit from 'devicon/icons/git/git-original.svg';
import IconGo from 'devicon/icons/go/go-original.svg';
import IconHtml5 from 'devicon/icons/html5/html5-plain-wordmark.svg';
import IconIntellij from 'devicon/icons/intellij/intellij-original.svg';
import IconJava from 'devicon/icons/java/java-original-wordmark.svg';
import IconJavascript from 'devicon/icons/javascript/javascript-original.svg';
import IconJquery from 'devicon/icons/jquery/jquery-plain-wordmark.svg';
import IconJupyter from 'devicon/icons/jupyter/jupyter-original-wordmark.svg';
import IconKotlin from 'devicon/icons/kotlin/kotlin-original.svg';
import IconLinux from 'devicon/icons/linux/linux-original.svg';
import IconMaterialui from 'devicon/icons/materialui/materialui-original.svg';
import IconNginx from 'devicon/icons/nginx/nginx-original.svg';
import IconNodejs from 'devicon/icons/nodejs/nodejs-original-wordmark.svg';
import IconNpm from 'devicon/icons/npm/npm-original-wordmark.svg';
import IconPhotoshop from 'devicon/icons/photoshop/photoshop-plain.svg';
import IconPostgresql from 'devicon/icons/postgresql/postgresql-plain-wordmark.svg';
import IconPython from 'devicon/icons/python/python-original.svg';
import IconReact from 'devicon/icons/react/react-original-wordmark.svg';
import IconSass from 'devicon/icons/sass/sass-original.svg';
import IconSsh from 'devicon/icons/ssh/ssh-original-wordmark.svg';
import IconTypescript from 'devicon/icons/typescript/typescript-original.svg';
import IconUbuntu from 'devicon/icons/ubuntu/ubuntu-plain-wordmark.svg';
import IconVim from 'devicon/icons/vim/vim-original.svg';
import IconVuejs from 'devicon/icons/vuejs/vuejs-original-wordmark.svg';
import IconWebpack from 'devicon/icons/webpack/webpack-original.svg';
import IconWindows from 'devicon/icons/windows8/windows8-original.svg';

// thanks to https://devicon.dev/

const useIconStackStyle = createUseStyles({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    '&>*': {
      width: '96px',
    },
  },
});

function IconStack({ iconSet }: { iconSet: [string, () => JSX.Element][] }) {
  const { box } = useIconStackStyle();

  return (
    <div className={box}>
      {iconSet.map(([name, Icon], i) => (
        <div title={name}>
          <Icon key={i} />
        </div>
      ))}
    </div>
  );
}

const useContainerStyle = createUseStyles({
  container: { '&>p': { margin: '2rem 0' } },
});

export default function () {
  const { container } = useContainerStyle();

  return (
    <div className={container}>
      <p>我很熟悉：</p>
      <IconStack
        iconSet={[
          ['C++', IconCplusplus],
          ['Chrome', IconChrome],
          ['HTML5', IconHtml5],
          ['Github', IconGithub],
          ['Git', IconGit],
          ['Jetbrains IDE', IconIntellij],
          ['Java', IconJava],
          ['JavaScript', IconJavascript],
          ['Jupyter', IconJupyter],
          ['Linux', IconLinux],
          ['Python', IconPython],
          ['React.js', IconReact],
          ['Vim', IconVim],
          ['TypeScript', IconTypescript],
          ['Windows', IconWindows],
        ]}
      />
      <p>我折腾过：</p>
      <IconStack
        iconSet={[
          ['Android', IconAndroid],
          ['Bash', IconBash],
          ['Docker', IconDocker],
          ['Electron', IconElectron],
          ['Flutter', IconFlutter],
          ['Jquery', IconJquery],
          ['Kotlin', IconKotlin],
          ['MaterialUI', IconMaterialui],
          ['Npm', IconNpm],
          ['Node.js', IconNodejs],
          ['Photoshop', IconPhotoshop],
          ['Sass', IconSass],
          ['SSH', IconSsh],
          ['Ubuntu', IconUbuntu],
          ['Vue.js', IconVuejs],
          ['Webpack', IconWebpack],
        ]}
      />
      <p>我感兴趣学的：</p>
      <IconStack
        iconSet={[
          ['D3.js', IconD3js],
          ['GoLang', IconGo],
          ['PostgreSql', IconPostgresql],
          ['Nginx', IconNginx],
        ]}
      />
    </div>
  );
}
