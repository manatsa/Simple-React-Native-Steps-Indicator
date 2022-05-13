import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface LabelsProps {
  labels: string[];
  labelFontSize?: number;
  defaultStepColor?: string;
  completedStepColor?: string;
  currentStep: number;
}
export default function LabelStrip({
  labels,
  labelFontSize,
  defaultStepColor,
  completedStepColor,
  currentStep,
}: LabelsProps) {
  return (
    <View style={styles.container}>
      {labels.map((label, index) => {
        return (
          <Text
            key={index}
            style={[
              styles.label,
              {
                width: `${100 / labels.length - 5}%`,
                //marginRight: index===0?
                // color:
                //   currentStep > index + 1
                //     ? completedStepColor
                //     : defaultStepColor,
              },
            ]}
          >
            {label}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    marginHorizontal: 5,
  },
});
