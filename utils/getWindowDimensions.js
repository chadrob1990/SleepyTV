import { Dimensions } from "react-native";

const getWindowDimensions = (setCallback) => {
  const updateDimensions = () => {
    setCallback(Dimensions.get("window").height);
  };
  Dimensions.addEventListener("change", updateDimensions);
  return () => {
    Dimensions.removeEventListener("change", updateDimensions);
  };
};

export { getWindowDimensions };
