import { Box } from '@grapp/stacks';
import { FlatList, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const PlantList = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <Box flex="content" padding={2}>
      <FlatList
        ItemSeparatorComponent={() => <Box height={8} />}
        data={Array.from({ length: 8 })}
        renderItem={(item) => (
          <Box padding={4} backgroundColor="blue">
            <Text>Plant</Text>
          </Box>
        )}
        keyExtractor={(item, index) => `plant-${index}`}
      />
    </Box>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    flex: 1,
  },
  // Additional styles
}));
