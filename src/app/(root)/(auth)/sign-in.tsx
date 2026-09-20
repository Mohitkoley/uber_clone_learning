import { icons, images } from "@/app/constants";
import CustomButton from "@/components/common/customButton";
import InputField from "@/components/inputField";
import ScreenLayout from "@/components/layout/screenLayout";
import OAuth from "@/components/OAuth";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

function signIn() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSignIn = () => {};

  return (
    <ScreenLayout
      children={
        <ScrollView className="flex-1 bg-white h-full ">
          <View className="flex-1 bg-white">
            <View className="relative h-[200px] w-full">
              <Image
                source={images.signUpCar}
                resizeMode="cover"
                className="z-0 h-full w-full"
                // style={{ width: "100%", height: 200 }}
              />
              <Text className="absolute bottom-5 left-5 font-JakartaExtraBold text-2xl text-black">
                Login
              </Text>
            </View>
          </View>
          <View className="p-5 gap-5">
            <InputField
              label={"email"}
              icon={icons.email}
              value={form.email}
              hint={"Enter your email"}
              onChangeText={(text) => {
                setForm({ ...form, email: text });
              }}
            ></InputField>
            <InputField
              label={"password"}
              icon={icons.lock}
              value={form.password}
              secureTextEntry={true}
              hint={"Enter your password"}
              onChangeText={(text) => {
                setForm({ ...form, password: text });
              }}
            ></InputField>
            <CustomButton title="Login" onPress={onSignIn} />

            <OAuth />

            
              <Pressable className="w-full items-center" onPress= {() => {
                router.back
              }}>
                <Text className="text-lg font-JakartaMedium text-black">
                  Don't have an account?{" "}
                  <Text className="text-primary-500">Sign Up</Text>
                </Text>
              </Pressable>
           
          </View>
        </ScrollView>
      }
      edges={["top"]}
    ></ScreenLayout>
  );
}

export default signIn;
