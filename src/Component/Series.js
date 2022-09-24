import React, { Component } from "react";
import axios from "axios";

const SeriesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=b18edc39107ffeb7f7472ba9e760799c&language=pt-BR&page=1"
});

export default class Series extends Component {
  state = {
    series: [],
    buscadas: []
  };
  componentDidMount() {
    this.getSeries();
  }

  getSeries = async () => {
    const resposta = await SeriesApi.get();
    console.log(resposta);

    const allSeries = resposta.data.results.map((item) => {
      return {
        ...item,
        imagem: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      series: allSeries
    });
  };

  handleChange = (e) => {
    const SeriesBuscadas = this.state.series.filter((item) => {
      if (
        item.original_name.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return true;
      }
    });
    this.setState({
      buscadas: SeriesBuscadas
    });
  };
  render() {
    return (
      <>
        <input onChange={this.handleChange} />
        {this.state.buscadas.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item.original_name}</li>
              <li>{item.overview}</li>
            </ul>
            <img src={item.imagem} alt={item.name} />
          </div>
        ))}
      </>
    );
  }
}
