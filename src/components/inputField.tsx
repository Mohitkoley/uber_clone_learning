import { InputFieldProps } from "@/types/types";
import { Image, Text, TextInput, View } from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  value,
  secureTextEntry = false,
  inputStyle,
  containerStyle,
  iconStyle,
  className,
  onChange,
  hint,
  ...textInputProps
}: InputFieldProps) => {
  return (
    <View className={`my-2 w-full ${className ?? ""}`}>
      <Text className={`mb-3 text-lg font-JakartaSemiBold ${labelStyle ?? ""}`}>
        {label}
      </Text>
      <View
        className={`flex flex-row items-center rounded-full border border-neutral-300 px-4 ${containerStyle ?? ""}`}
      >
        {icon ? (
          <Image
            source={icon}
            className={`mr-3 h-5 w-5 ${iconStyle ?? ""}`}
            resizeMode="contain"
          />
        ) : null}
        <TextInput
          {...textInputProps}
          onChange={onChange}
          placeholder={hint}
          secureTextEntry={secureTextEntry}
          className={`h-14 flex-1 text-base ${inputStyle ?? ""} ${className}`}
        />
      </View>
    </View>
  );
};

export default InputField;
