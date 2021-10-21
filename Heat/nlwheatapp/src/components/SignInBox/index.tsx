import React from "react";

import { View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SignInBox() {
	const { signIn, isSigningIn } = useAuth();
	return (
		<View style={styles.container}>
			<Button title="ENTRAR COM O GITHUB" icon="github" color={COLORS.BLACK_PRIMARY} isLoading={isSigningIn} backgroundColor={COLORS.YELLOW} onPress={signIn} />
		</View>
	);
}