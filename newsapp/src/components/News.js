import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles =  [ ]


    handlenextbtn= async()=>{
     console.log( "next")

       let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=1d7b87bed5e64de1adae0824b0399ff6&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})

    this.setState({
     page:this.state.page + 1,
     articles:parsedData.articles
     })
    }


    handlepreviousbtn=async()=>{
   console.log ("previoys")
     let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=1d7b87bed5e64de1adae0824b0399ff6&page=${this.state.page - 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})

    this.setState({
     page:this.state.page - 1,
     articles:parsedData.articles
     })

    }







    constructor(){
        super();
          this.state ={
          articles : this.articles,
          loading : false,
          page:1
        }
    }
     async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=1d7b87bed5e64de1adae0824b0399ff6&page=1";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }
  render() {
    return (
      <div className ="container my-3">
        <h2> NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-3" key={element.url}>
        <Newsitem  tittle={element.title.slice(0, 45)} description={element.description.slice(0,50)} imgurl ={element.urlToImage} newsurl={element.url}/>
            </div>
        })}
           </div>
           <div className="container d-flex justify-content-between">
           <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreviousbtn}> &laquo; Previous</button>
       <button type="button" className="btn btn-dark" onClick={this.handlenextbtn}> Next &raquo; </button>
           </div>
      </div>
    )
  }
}

export default News
