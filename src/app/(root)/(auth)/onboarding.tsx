import { onboarding as onboardingSlides } from "@/app/constants";
import CustomButton from "@/components/common/customButton";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide: boolean = activeIndex === onboardingSlides.length - 1;
  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="flex-1 items-center justify-between px-5 py-4 h-full"
    >
      {/* <View className="flex-1 justify-between flex-row">
          <Text className="text-2xl font-bold">Welcome</Text>
        </View> */}
      <TouchableOpacity
        onPress={() => {
          router.replace("/(root)/(auth)/sign-up");
        }}
        className="w-full items-end justify-start"
      >
        <Text className="text-2xl color-black font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={true}

        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-slate-400 rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-black rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboardingSlides.map((slide) => (
          <View key={slide.id} className="flex-1 items-center justify-center">
            <Image
              source={slide.image}
              contentFit="contain"
              style={{ width: "100%", height: 300 }}
            />
            <Text className="px-6 text-center text-3xl font-JakartaBold text-black">
              {slide.title}
            </Text>
            <Text className="mt-3 px-8 text-center text-base font-Jakarta text-[#858585]">
              {slide.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        textVariant="default"
        onPress={() => {
          if (isLastSlide) {
            router.replace("/(root)/(auth)/sign-up");
          } else {
            swiperRef.current?.scrollBy(1);
          }
        }}
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
