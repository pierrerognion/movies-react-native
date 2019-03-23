import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <TouchableOpacity 
        onPress={() => displayDetailForFilm(film.id)}
        style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.original_title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
        </View>
        <View style={styles.date_container}>
          <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
        </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    height: 190
  },
  content_container: {
    flexDirection: 'column',
    height: 190,
    flex: 1,
  },
  header_container: {
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
  },
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 4,
    paddingRight: 5
  },
  description_container: {
    backgroundColor: 'white',
    flex: 5
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_text: {
    textAlign: 'right',
    paddingRight: 5
  },
  date_container: {
    flex: 1
  },
  vote_text: {
    fontSize: 26,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 1
  },
})

export default FilmItem
