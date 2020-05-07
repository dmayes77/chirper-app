import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h3 className='center'>Your Timeline</h3>
				<ul className='dashboard-list'>
					{this.props.chirpIds.map(id => (
						<li key={id}>
							<div>CHIRP ID: {id}</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ chirps }) {
	return {
		chirpIds: Object.keys(chirps).sort(
			(a, b) => chirps[b].timestamp - chirps[a].timestamp
		),
	};
}

export default connect(mapStateToProps)(Dashboard);
