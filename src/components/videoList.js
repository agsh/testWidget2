import React from 'react';
import Video from './video';

class VideoList extends React.Component {

	constructor(props) {
		super(props);
		console.log('List of videos to use: ' + props.videos.map((v, i) => `${i + 1}). ${v}`).join(', '));
	}

	/**
	 * Return random video url from the list
	 * @return {string}
	 */
	getRandomVideo(videos) {
		var rand = Math.floor(Math.random() * (videos.length + 1));
		var str = videos[rand];
		var strNew = str.replace("watch?v=", "embed/");
		return strNew;
	}

	add() {
		this.props.model.add(this.getRandomVideo(this.props.videos));
	}

	remove(video) {
		this.props.model.remove(video);
	}

	render() {
		const list = this.props.model.videos.map(video => {
			return (
				<div key={video.id} onClick={this.remove.bind(this, video)}>
					{video.url}
					<button className="btn btn-remove" onClick={this.remove.bind(this, video)}>x</button>
				</div>
			);
		}, this);
		const videos = this.props.model.videos.map(video => {
			return (
				<Video
					url={video.url}
					key={video.id}
				/>
			);
		}, this);
		return (
			<div>
				<div className="btn-wrap">
					<button className="btn btn-add" onClick={this.add.bind(this)}>+</button>
				</div>
				<div className="videoList">
					{list}
				</div>
				<div className="videos">
					{videos}
					<div className="empty"></div>
					<div className="empty"></div>
				</div>
			</div>
		);
	}

}

export default VideoList;