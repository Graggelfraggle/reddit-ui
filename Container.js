import React, { Component } from 'react';
import './Container.css';

const Container =(props) => {
	return (
		<a href={'https://www.reddit.com'+props.perm}>	
			<div className='shell'>
				<img className='pic' src={props.link}/>	
				<div className='upvotes'>
					
				</div>
				<div className='postno'>
					{props.score}
				</div>
				<div className='text'>
					{props.title}
				</div>
			</div>
		</a>
	)
};

export default Container