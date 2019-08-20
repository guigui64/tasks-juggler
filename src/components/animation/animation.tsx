import React, { CSSProperties, FC } from 'react';
import { Transition } from 'react-transition-group';
import {
	ENTERED,
	ENTERING,
	EXITED,
	EXITING,
	TransitionProps
} from 'react-transition-group/Transition';

type AnimationProps = {
	customClass?: string;
	customStyle?: CSSProperties;
	enteringAnimation?: string;
	enteredAnimation?: string;
	exitingAnimation?: string;
	exitedAnimation?: string;
} & TransitionProps;

const Animation: FC<AnimationProps> = ({
	customClass,
	customStyle,
	enteringAnimation,
	enteredAnimation,
	exitingAnimation,
	exitedAnimation,
	...transitionProps
}) => {
	const classFrom: { [key: string]: string | undefined } = {
		[ENTERING as string]: enteringAnimation,
		[ENTERED as string]: enteredAnimation,
		[EXITING as string]: exitingAnimation,
		[EXITED as string]: exitedAnimation
	};
	return (
		<Transition {...transitionProps}>
			{state => (
				<div
					className={`${customClass || ''} animated ${classFrom[state] || ''}`}
					style={customStyle}
				>
					{transitionProps.children}
				</div>
			)}
		</Transition>
	);
};

export default Animation;
