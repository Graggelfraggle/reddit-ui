import React, { Component } from 'react';
import Container from './Container.js';
import axios from 'axios';

class PicNNo extends Component {

	constructor(){
      super();
      this.state={
        posts:[]
      };
    }

	componentDidMount() {
    axios.get(this.props.searchterm)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  	}  
  	componentWillReceiveProps(nextProps) {
    axios.get(nextProps.searchterm)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  	} 


  	render(){
	var list=[];
	
	

	this.state.posts.map(post =>
		{if (post.url!=null && !post.url.includes('youtu') && !post.url.includes('twitter') && !post.url.includes('deviantart') && !post.url.includes('comments')){
			if (post.url.includes("imgur")){
				list.push(<Container score={post.score} title={post.title} perm={post.permalink} text='' link={post.url+'.png'}/>)
			} else{
				list.push(<Container score={post.score} title={post.title} perm={post.permalink} text='' link={post.url}/>)
			}
		}}    
		
	        	
	)


		return (
			<div>
				{list.slice(3,21)}
				          
			</div>
		);
	}
};

export default PicNNo