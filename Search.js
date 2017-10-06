import React, { Component } from 'react';
import PicNNo from './PicNNo.js';

class Search extends Component {
	
	constructor() {
        super();
        this.state = { term: 'me_irl' }
    }
	
    onInputChange(term) {
        this.setState({term});
    	{/*execute passed function as property*/}
        this.props.onTermChange(term);

    }

	render() {
		return(
			<div>
				<h1>{'Search Term'}</h1>
				<input onChange={event => this.onInputChange(event.target.value)} />
				<h5>{this.state.term}</h5>
				<PicNNo searchterm={'http://www.reddit.com/r/'+this.state.term +'.json'} />
				
			</div>
		);
	}

}

export default Search