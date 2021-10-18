import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TCharac} from './stores/charactersStore';
import styles from './styles/characterPage.style';
import Icomoon from '../../common/icons/Icomoon';
import {useNavigation} from '@react-navigation/native';

type Props = {
  route: {params: {character: TCharac}};
};

export function CharacterPage(props: Props) {
  const charac: TCharac = props.route.params.character;
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingLeft: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icomoon
          style={styles.back}
          name="keyboard_backspace"
          onPress={() => navigation.goBack()}
        />
        <Text style={{...styles.title, flex: 1, textAlign: 'center'}}>
          {charac.name}
        </Text>
      </View>
      <View>
        <View style={styles.row}>
          <Text style={{...styles.text, flex: 1}}>Maison</Text>
          <Text style={{...styles.text, flex: 2}}>{charac.house}</Text>
        </View>
        {charac.allegiance && (
          <Text style={styles.highlightedTitle}>Ses allégeances</Text>
        )}
        {charac.allegiance.map((alliegiance, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={{...styles.text, flex: 1}}>Allégeance {idx + 1}</Text>
            <Text style={{...styles.text, flex: 2}}>{alliegiance}</Text>
          </View>
        ))}
        {charac.titles && (
          <Text style={styles.highlightedTitle}>Ses titres</Text>
        )}
        {charac.titles.map((title, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={{...styles.text, flex: 1}}>Titre {idx + 1}</Text>
            <Text style={{...styles.text, flex: 2}}>{title}</Text>
          </View>
        ))}
        {charac.books && (
          <Text style={styles.highlightedTitle}>Présence dans les livres</Text>
        )}
        {charac.books.map((book, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={{...styles.text, flex: 1}}>Livre {idx + 1}</Text>
            <Text style={{...styles.text, flex: 2}}>{book}</Text>
          </View>
        ))}
        <View style={styles.placeholder} />
      </View>
    </ScrollView>
  );
}
