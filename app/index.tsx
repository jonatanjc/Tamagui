import React from 'react';
import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { Image, Button, H1, ListItem, Paragraph, Separator, YGroup, YStack } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

import myImage from "../assets/iron.png";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack space="$4" maxWidth={600}>
          <H1 textAlign="center">Iron Man</H1>
         
          <Image source={myImage} style={{ width: 200, height: 200, alignSelf: "center" }} />
          <Paragraph textAlign="center">
          "The Avengers"
          </Paragraph>
        </YStack>

        <YStack space="$2.5">
          <Button onPress={() => router.push("/users/testuser")}>
            Go to user page
          </Button>
          <Button onPress={() => router.push("/tabs")}>Go to tabs page</Button>
        </YStack>

        <YStack space="$5">
          <YGroup bordered separator={<Separator />} theme="green">
            <YGroup.Item>
              <Link asChild href="https://twitter.com/natebirdman" target="_blank">
                <ListItem hoverTheme pressTheme title="Nate" icon={Twitter} />
              </Link>
            </YGroup.Item>
            <YGroup.Item>
              <Link asChild href="https://github.com/tamagui/tamagui" target="_blank">
                <ListItem hoverTheme pressTheme title="Tamagui" icon={Github} />
              </Link>
            </YGroup.Item>
            <YGroup.Item>
              <Link asChild href="https://github.com/ivopr/tamagui-expo" target="_blank">
                <ListItem hoverTheme pressTheme title="This Template" icon={Github} />
              </Link>
            </YGroup.Item>
          </YGroup>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
