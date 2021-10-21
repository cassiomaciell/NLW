import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { ActivityIndicator, ColorValue, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
	color: ColorValue;
	backgroundColor: ColorValue;
	icon?: React.ComponentProps<typeof AntDesign>["name"];
	isLoading?: boolean;
};

export function Button({ backgroundColor, color, title, icon, isLoading = false, ...rest }: Props) {
	return (
		<TouchableOpacity disabled={isLoading} activeOpacity={0.7} style={[styles.button, { backgroundColor }]} {...rest}>
			{isLoading ? (
				<ActivityIndicator color={color} />
			) : (
				<>
					<AntDesign name={icon} size={24} style={styles.icon} />
					<Text style={[styles.title, { color }]}>{title}</Text>
				</>
			)}
		</TouchableOpacity>
	);
}
