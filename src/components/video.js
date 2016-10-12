import React from 'react';

class Video extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="video">
				<iframe src={this.props.url}></iframe>
			</div>
		);
	}

}

export default Video;