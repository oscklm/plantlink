import { Row, Rows } from '@grapp/stacks';
import { Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { PlantList } from '~/components/plant/PlantList';

export default function Home() {
  const { theme, styles } = useStyles(stylesheet);
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Rows>
        <Row flex="content">
          <Text style={theme.components.title}>Plants</Text>
        </Row>
        <Row flex="content">
          <PlantList />
        </Row>
      </Rows>
    </>
  );
}

const stylesheet = StyleSheet.create({});
