import React from 'react';
import './title-text-container.css';

import Divider from '../../components/divider/divider';

const TitleTextContainer = ({title, text}) =>
{
	return (
		<div className="container leftAlignment">
			<h1 className="display-5">{title}</h1>
			<p className="lead">{text}</p>
			<Divider/>
		</div>
	);
}

export default TitleTextContainer;