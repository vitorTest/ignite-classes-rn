import React from 'react'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  Username,
  Icon
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/10060108?v=4' }}
            />
            <User>
              <UserGreeting>
                Olá,
              </UserGreeting>
              <Username>
                Vitor
              </Username>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  )
}
