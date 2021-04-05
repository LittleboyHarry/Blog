/// <reference types="@docusaurus/module-type-aliases" />
import React, { ReactElement, useContext, useRef } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Flex, Input, Label, Checkbox, ThemeProvider, Box } from 'theme-ui';
import { RecoilRoot, atom, useRecoilState, RecoilState } from 'recoil';
import copy from 'copy-to-clipboard';
import NotificationSystem, {
  System as Notificator,
} from 'react-notification-system';
import styled from 'styled-components';
import * as MyIcons from '@theme/MyIcons';

const StyledTable = styled.table`
  --ifm-table-cell-padding: 0.33rem;
  display: table;
  & td:first-child {
    width: 38%;
  }
  & .copy-button {
    opacity: 0;
    transition: 0.3s opacity;
    float: right;
  }
  & td:hover .copy-button {
    opacity: 1;
  }
`;

const StyledTabs = styled(Tabs)`
  & li {
    flex: 1;
    justify-content: center;
  }
`;

interface PackageManagerCommandSyntax {
  fetch: {
    install: string;
    desc: string;
  };
  installed: {
    desc: string;
    remove: string;
    update: string;
    search: string;
  };
}

const placeHolder = '<pkgName>';

const syntaxes: Record<string, PackageManagerCommandSyntax> = {
  apt: {
    fetch: {
      install: `sudo apt install ${placeHolder}`,
      desc: `apt-cache show ${placeHolder}`,
    },
    installed: {
      desc: `dpkg -s ${placeHolder}`,
      remove: `sudo apt remove ${placeHolder}`,
      update: `sudo apt update ${placeHolder}`,
      search: `dpkg -l | grep ${placeHolder}`,
    },
  },
  pacman: {
    fetch: {
      install: `sudo pacman -S ${placeHolder}`,
      desc: `pacman -Si ${placeHolder}`,
    },
    installed: {
      desc: `pacman -Qi ${placeHolder}`,
      remove: `sudo pacman -Rs ${placeHolder}`,
      update: `sudo pacman -Syu ${placeHolder}`,
      search: `pacman -Qs ${placeHolder}`,
    },
  },
  rpm: {
    fetch: {
      install: `sudo dnf install ${placeHolder}`,
      desc: `dnf info ${placeHolder}`,
    },
    installed: {
      desc: `dnf info installed ${placeHolder}`,
      remove: `sudo dnf remove ${placeHolder}`,
      update: `sudo dnf upgrade ${placeHolder}`,
      search: `rpm -qa ${placeHolder}`,
    },
  },
};

const recoilStates = {
  pkgName: atom({ key: 'pkgNameState', default: '' }),
  isSudo: atom({ key: 'sudoState', default: true }),
};

recoilStates as Record<string, RecoilState<any>>;

enum CommandType {
  WithPkgName,
  Fixed,
}

type Command =
  | {
      type: CommandType.WithPkgName;
      left: string;
      right: string;
    }
  | {
      type: CommandType.Fixed;
      str: string;
    };

function parseCommand(command: string): Command {
  const index = command.indexOf(placeHolder);
  const hasVar = index != -1;
  if (hasVar)
    return {
      type: CommandType.WithPkgName,
      left: command.slice(0, index),
      right: command.slice(index != -1 ? index + placeHolder.length : -1, -1),
    };
  else
    return {
      type: CommandType.Fixed,
      str: command,
    };
}

function PmUseCase({ desc, format }: { desc: string; format: string }) {
  const [pkgName] = useRecoilState(recoilStates.pkgName);
  const [isSudo] = useRecoilState(recoilStates.isSudo);
  const command = parseCommand(format);
  const notificator = useContext(NotifiterContext);

  // 自动解除 sudo 前缀
  if (!isSudo) {
    switch (command.type) {
      case CommandType.Fixed:
        command.str = command.str.replace('sudo ', '');
        break;
      case CommandType.WithPkgName:
        command.left = command.left.replace('sudo ', '');
        break;
    }
  }

  let node: ReactElement;
  switch (command.type) {
    case CommandType.Fixed:
      node = <>{command.str}</>;
      break;
    case CommandType.WithPkgName:
      const pkgNameOrNull = pkgName == '' ? placeHolder : pkgName;
      node = (
        <>
          {command.left}
          <span style={{ color: 'gray' }}>{pkgNameOrNull}</span>
          {command.right}
        </>
      );
      break;
  }

  return (
    <tr>
      <td>{desc}</td>
      <td
        onClick={() => {
          switch (command.type) {
            case CommandType.Fixed:
              copy(command.str);
              break;
            case CommandType.WithPkgName:
              const pkgNameOrNull = pkgName == '' ? '?' : pkgName;
              copy(command.left + pkgNameOrNull + command.right);
              break;
          }
          notificator.copied();
        }}
        style={{
          cursor: 'copy',
        }}
      >
        {node}
        <span className="copy-button" style={{ color: '#a44' }}>
          <MyIcons.Copy />
        </span>
      </td>
    </tr>
  );
}

function PmUseCases({
  syntax,
}: {
  syntax: PackageManagerCommandSyntax;
}): ReactElement {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th colSpan={2}>在线获取</th>
        </tr>
        <PmUseCase desc="安装" format={syntax.fetch.install} />
        <PmUseCase desc="查询版本号等描述信息" format={syntax.fetch.desc} />

        <tr>
          <th colSpan={2}>已安装</th>
        </tr>
        <PmUseCase desc="查询版本号等描述信息" format={syntax.installed.desc} />
        <PmUseCase desc="卸载" format={syntax.installed.remove} />
        <PmUseCase desc="在线升级" format={syntax.installed.update} />
        <PmUseCase desc="搜索" format={syntax.installed.search} />
      </tbody>
    </StyledTable>
  );
}

function Modifier() {
  const [pkgName, setPkgName] = useRecoilState(recoilStates.pkgName);
  const [isSudo, setIsSudoState] = useRecoilState(recoilStates.isSudo);

  return (
    <Flex mb={4}>
      <Flex
        sx={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Label>
          <Checkbox
            checked={isSudo}
            onChange={({ target: { checked } }) => {
              setIsSudoState(checked);
            }}
          />
          需要 sudo
        </Label>
      </Flex>
      <Box sx={{ flex: '2' }}>
        <Input
          type="text"
          placeholder={`${placeHolder} 填入所需的包名`}
          value={pkgName}
          onChange={({ target: { value } }) => {
            setPkgName(value);
          }}
        />
      </Box>
    </Flex>
  );
}

const NotifiterContext = React.createContext<{
  copied: () => void;
}>(null);

function NotificatorProvider({ children }: { children: ReactElement }) {
  const notificatorRef = useRef<Notificator>();
  return (
    <NotifiterContext.Provider
      value={{
        copied() {
          notificatorRef.current.addNotification({
            title: '已复制！',
            level: 'success',
            position: 'bl',
            autoDismiss: 2,
            dismissible: 'none',
          });
        },
      }}
    >
      <NotificationSystem ref={notificatorRef} />
      {children}
    </NotifiterContext.Provider>
  );
}

export default ({ type }: { type: 'apt' | 'pacman' | 'rpm' }) => {
  return (
    <RecoilRoot>
      <NotificatorProvider>
        <ThemeProvider
          theme={{ useBodyStyles: false, colors: { primary: '#07c' } }}
        >
          <StyledTabs
            defaultValue={type}
            values={[
              { label: 'Ubuntu - Debian', value: 'apt' },
              { label: 'Manjaro - Arch', value: 'pacman' },
              { label: 'Fedora - RedHat', value: 'rpm' },
            ]}
          >
            <TabItem value="apt">
              <PmUseCases {...{ syntax: syntaxes.apt }} />
            </TabItem>
            <TabItem value="pacman">
              <PmUseCases {...{ syntax: syntaxes.pacman }} />
            </TabItem>
            <TabItem value="rpm">
              <PmUseCases {...{ syntax: syntaxes.rpm }} />
            </TabItem>
          </StyledTabs>
          <Modifier />
          参考来自&nbsp;
          <a href="https://wiki.archlinux.org/index.php/Pacman/Rosetta">
            ArchWiki
          </a>
          . 喜欢好用的话可以收藏 ⭐ 下本博客哦~
          <p></p>
        </ThemeProvider>
      </NotificatorProvider>
    </RecoilRoot>
  );
};
