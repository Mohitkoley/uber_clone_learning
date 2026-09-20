import { icons } from "@/app/constants";
import { Image, Text, View } from "react-native";
import CustomButton from "./common/customButton";

const OAuth = () => {
  function handleGoogleSignIn() {
    
  }

  return (
    <View className="mt-4">
      <View className="flex-row items-center gap-x-3">
        <View className="h-px flex-1 bg-general-100" />
        <Text className="text-lg text-general-100 font-JakartaMedium">Or</Text>
        <View className="h-px flex-1 bg-general-100" />
      </View>

      <CustomButton
        title="Sign in with Google"
        bgVariant="outline"
        textVariant="primary"
        className="mt-5 w-full shadow-none gap-x-3"
        IconLeft={() => <Image source={icons.google} className="w-5 h-5 ml-2" />}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
