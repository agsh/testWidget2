import React from 'react';

class Video extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="video">
				<iframe width="auto" height="auto" src={this.props.url} frameborder="0" allowfullscreen></iframe>
			</div>
		);
	}

}

export default Video;