import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { availableColors } from '../../../../utils';
import { filterByColor } from '../../filters.slice';
import './ColorFilter.styles.scss';

const ColorFilter = () => {
	const dispatch = useAppDispatch();

	const [checkedState, setCheckedState] = useState(() => {
		const state = {};
		availableColors.forEach((c) => {
			state[c] = false;
		});
		return state;
	});
	const handleCheckedState = (c) => {
		setCheckedState({
			...checkedState,
			[c]: !checkedState[c],
		});
	};
	const colorCheckboxes = availableColors.map((c) => (
		<label key={c}>
			<input
				type="checkbox"
				checked={checkedState[c]}
				onChange={() => handleCheckedState(c)}
			/>
			<span
				className="color-filter__badge"
				style={{ backgroundColor: c }}
			></span>
			<span className="color-filter__name">{c}</span>
		</label>
	));

	useEffect(() => {
		const selectedColor = Object.entries(checkedState)
			.filter(([name, state]) => state)
			.map(([name, state]) => name);
		dispatch(filterByColor(selectedColor));
	}, [dispatch, checkedState]);

	return (
		<div className="footer-widget footer-widget--color-filter">
			<h3 className="footer-widget__title">Filter By Color</h3>
			{colorCheckboxes}
		</div>
	);
};

export default ColorFilter;
