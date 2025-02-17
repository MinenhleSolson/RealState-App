import { Redirect, Slot } from "expo-router"; // Importing necessary components from expo-router
import { ActivityIndicator } from "react-native"; // Importing ActivityIndicator from react-native
import { SafeAreaView } from "react-native-safe-area-context"; // Importing SafeAreaView from react-native-safe-area-context

import { useGlobalContext } from "@/lib/global-provider"; // Importing custom hook to use global context

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext(); // Destructuring loading and isLoggedIn from global context

  // If the app is loading, show a loading indicator
  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  // If the user is not logged in, redirect to the sign-in page
  if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }

  // If the user is logged in and the app is not loading, render the Slot component
  return <Slot />;
}