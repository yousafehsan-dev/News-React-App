import React, { Component } from 'react'


export class Newsitem extends Component {
    
  render() {
  let  {tittle, description,imgurl,newsurl} = this.props;
    return (
      <div className="my-3">
       <div className="card" style={{width:"15rem"}}>
         <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
       <h5 className="card-title">{tittle}</h5>
      <p className="card-text">{description}</p>
      <a href={newsurl} target='-blank' className="btn btn-sm btn-primary">Read More</a>
       </div>
       </div>
      </div>
    )
  }
}

export default Newsitem
