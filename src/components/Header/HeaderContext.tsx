/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export type HeaderTextColorContextType = {
	headerTextColor: string;
	updateHeaderTextColor: (bgColor: string) => void;
};

type PropsType = {
	children: React.ReactNode;
};


export const HeaderTextColorContext = createContext<HeaderTextColorContextType>(
	{
		headerTextColor: '',
		updateHeaderTextColor: () => {},
	}
);

export const HeaderTextColorProvider = ({ children }: PropsType) => {
	const [headerTextColor, setHeaderTextColor] = useState<string>('');

	const updateHeaderTextColor = (bgColor: string) => {
		setHeaderTextColor(bgColor === 'dark' ? 'white' : 'black');
	};

	return (
		<HeaderTextColorContext.Provider
			value={{ headerTextColor, updateHeaderTextColor }}
		>
			{children}
		</HeaderTextColorContext.Provider>
	);
};
