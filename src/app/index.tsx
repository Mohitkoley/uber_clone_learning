import { Redirect } from "expo-router";

const home = () => {
  return <Redirect href="/(root)/(auth)/onboarding" />;
};

export default home;
