import React from 'react';
import {Text, ScrollView, ActivityIndicator, View, Alert} from 'react-native';
import styles from './styles/homePage.style';
import {charactersStore, TCharac} from '../characters/stores/charactersStore';
import {CharacterCard} from '../characters/CharacterCard';

export class HomePage extends React.Component<any, any> {
  state = {
    title: 'Répertoire Game Of Thrones',
    characters: [],
    isLoading: true,
    reload: false,
  };

  constructor(props) {
    super(props);
    charactersStore
      .fetchCharacters()
      .then(response => {
        if (!response) {
          this.setState({
            ...this.state,
            isLoading: false,
          });
        }
        response.json().then(characters => {
          this.setState({
            ...this.state,
            characters: characters.sort((a, b) => (a.name > b.name ? 1 : -1)),
            isLoading: false,
          });
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({
          ...this.state,
          isLoading: false,
        });
        Alert.alert('Une erreur est survenue', 'Veuillez recharger', [
          {
            text: 'Recharger',
            onPress: () => this.setState({...this.state, reload: true}),
          },
        ]);
      });
  }

  componentDidUpdate() {
    if (this.state.reload) {
      this.setState({...this.state, reload: false});
      charactersStore
        .fetchCharacters()
        .then(response => {
          if (!response) {
            this.setState({
              ...this.state,
              isLoading: false,
            });
          }
          response.json().then((characters: TCharac[]) => {
            this.setState({
              ...this.state,
              characters: characters.sort((a, b) => (a.name > b.name ? 1 : -1)),
              isLoading: false,
            });
          });
        })
        .catch(e => {
          console.log(e);
          this.setState({
            ...this.state,
            isLoading: false,
          });
          Alert.alert('Une erreur est survenue', 'Veuillez recharger', [
            {
              text: 'Recharger',
              onPress: () => this.setState({...this.state, reload: true}),
            },
          ]);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <ScrollView>
          {this.state.characters.map(character => {
            return <CharacterCard key={character.id} character={character} />;
          })}
        </ScrollView>
        {this.state.isLoading && (
          <View style={{flex: 1}}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    );
  }
}
