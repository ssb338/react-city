import React from 'react';
import './Tourlist.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../testdata';

export default class TourList extends React.Component {
	state={
		tours: tourData
	}
	removeTour= id =>{
		const { tours } = this.state;
		const sortedTours = tours.filter(tour => tour.id != id);
		this.setState({
			tours: sortedTours
		})
	}
	render() {
		const {tours} = this.state;
		return (
			<section classNmae="tourlist">
			{tours.map(tour => {
				return(
					<Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
				);
			})}
			</section>
		)
	}
}