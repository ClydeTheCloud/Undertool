import React from 'react'
import configInfo from '../../Assets/configInfo'

import ConfigCard from '../ConfigCard'

function Configuration() {
	return (
		<>
			<h3 className="row-header click" id="configuration">
				Configuration
			</h3>
			<div className="intro-wrapper">
				<p>
					To fine-tune appearance and behavior of a tooltip use <code className="inline-code">data-tooltip-config</code>{' '}
					attribute. Provide properties as a string, divided by space.
				</p>
				<p>Possible options are:</p>
				{Object.values(configInfo).map(i => (
					<ConfigCard key={i.title} title={i.title} desc={i.desc} options={i.options} />
				))}
			</div>
		</>
	)
}

export default Configuration
