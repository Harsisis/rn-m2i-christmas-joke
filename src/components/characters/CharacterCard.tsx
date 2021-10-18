import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles/characCard.style';
import {TCharac} from './stores/charactersStore';
import {useNavigation} from '@react-navigation/native';

type Props = {
  character: TCharac;
};

export function CharacterCard(props: Props) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('/character', {character: props.character})
      }>
      <View style={styles.container}>
        <Text style={styles.text}>{props.character.name}</Text>
      </View>
    </TouchableHighlight>
  );
}
