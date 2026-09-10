import { icons } from "@/app/constants";
import { Image, View } from "react-native";
import CustomButton from "./common/customButton";

const OAuth = () => {
  function handleGoogleSignIn() {
    
  }

  return (
    <View className="flex-1 flex-row justify-center items-center mt-4 gap-x-3">
      <View className="flex-1 h-[5px] text-general-100"></View>
      <View className="flex text-lg">Or</View>
      <View className="flex-1 h-[5px] text-general-100"></View>

      <CustomButton
        title="Sign in with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => <Image source={icons.google} className="w-5 h-5" />}
        onPress={handleGoogleSignIn}
      ></CustomButton>
    </View>
  );
};

export default OAuth;
