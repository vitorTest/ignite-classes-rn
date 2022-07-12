import React from 'react';
import { PushNotificationIOS } from 'react-native';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  Username
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/10060108?v=4'}}
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
        </UserWrapper>
      </Header>
    </Container>
  )
}
