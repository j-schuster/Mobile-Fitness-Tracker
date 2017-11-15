import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSliders ({ max, unit, step, value, onChange }) {
	return (
		<View>
			<Slider
				step={step}
				value={value}
				maximumValue={max}
				minimumValue={0}
				onValueChange={onChange}
			/>
			<Text>{value}</Text>
			<Text>{unit}</Text>
		</View>
	)
}