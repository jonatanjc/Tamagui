import React from 'react';
import { Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Button, H1, Paragraph, Separator, YGroup, YStack } from 'tamagui';

import { MySafeAreaView } from '../components/MySafeAreaView';
import { MyStack } from '../components/MyStack';

import IronImage from '../assets/iron.png'; 

export default function Home(): JSX.Element {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack space="$4" maxWidth={600}>
          <Image source={IronImage} style={{ width: '112%', height: '65%', alignSelf: 'center' }} />
          <H1 textAlign="center" fontSize={40}>
            Iron Man
          </H1>
          <Paragraph textAlign="center">"Iron Man 3"</Paragraph>
        </YStack>

        <YStack space="$2.5">
          <Button
            size="$5"
            theme="active"
            style={{ backgroundColor: 'steelred', color: 'red' }}
            onPress={() => router.push('/tabs')}
          >
              Comensar
          </Button>
        </YStack>

        <YStack space="$18">
          <YGroup bordered separator={<Separator />} theme="red"></YGroup>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
