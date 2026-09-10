import { icons, images } from "@/app/constants";
import CustomButton from "@/components/common/customButton";
import InputField from "@/components/inputField";
import ScreenLayout from "@/components/layout/screenLayout";
import OAuth from "@/components/OAuth";
import { Link } from "expo-router";
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
                Create an Account
              </Text>
            </View>
          </View>
          <View className="p-5 gap-5">
            <InputField
              label={"name"}
              icon={icons.person}
              value={form.name}
              hint={"Enter your name"}
              onChange={(value) => {
                setForm({ ...form, name: value.toString() });
              }}
            ></InputField>
            <InputField
              label={"email"}
              icon={icons.email}
              value={form.email}
              hint={"Enter your email"}
              onChange={(value) => {
                setForm({ ...form, email: value.toString() });
              }}
            ></InputField>
            <InputField
              label={"password"}
              icon={icons.lock}
              value={form.password}
              secureTextEntry={true}
              hint={"Enter your password"}
              onChange={(value) => {
                setForm({ ...form, password: value.toString() });
              }}
            ></InputField>
            <CustomButton title="Create Account" onPress={onSignIn} />

            <OAuth />

            <Link href="/sign-in" asChild>
              <Pressable className="w-full items-center">
                <Text className="text-lg font-JakartaMedium text-black">
                  Already have an account?{" "}
                  <Text className="text-primary-500">Sign In</Text>
                </Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      }
      edges={["top"]}
    ></ScreenLayout>
  );
}

export default signIn;
