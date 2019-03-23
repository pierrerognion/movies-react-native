import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi, getBackdropFromApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'

class FilmDetail extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    }
    )
  }

  _displayFilm() {
    const film = this.state.film
    if (film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
          style={styles.backdrop}
          source={{uri: getBackdropFromApi(film.backdrop_path)}}
          />
          <Image
          style={styles.image}
          source={{uri: getBackdropFromApi(film.poster_path)}}
          />
          <Text>{film.title}</Text>
          <Text>ID TMDB: {film.id}</Text>
          <Text>Synopsis: {film.overview}</Text>
          <Text>Note moyenne: {film.vote_average}</Text>
          <Text>Nombre de votes: {film.vote_count}</Text>
          <Text>Statut: {film.status}</Text>
          <Text>Durée: {film.runtime}</Text>
          <Text>Date de sortie: {film.release_date}</Text>
          <Text>Popularité: {film.popularity}</Text>
          <Text>Budget: {film.budget}</Text>
          <Text>Bénéfices: {film.revenue}</Text>
        </ScrollView>
      )
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayFilm()}
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  backdrop: {
    width: "100%",
    height: 300,
    margin: 0,
    justifyContent: 'center'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
  },
})

export default FilmDetail