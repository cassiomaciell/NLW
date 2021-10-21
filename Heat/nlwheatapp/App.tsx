import React from "react";
import AppLoading from "expo-app-loading";
import { Home } from "./src/home";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
	return !fontsLoaded ? (
		<AppLoading />
	) : (
		<AuthProvider>
			<StatusBar style="light" translucent backgroundColor="transparent" />
			<Home />
		</AuthProvider>
	);
}
