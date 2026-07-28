import { useEffect } from 'react';
import { StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { colors, fonts } from '../constants/theme';

type Props = {
  children: React.ReactNode;
  delay?: number;
  style?: StyleProp<ViewStyle>;
  from?: 'up' | 'down' | 'none';
};

export function FadeIn({ children, delay = 0, style, from = 'up' }: Props) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(from === 'up' ? 28 : from === 'down' ? -18 : 0);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withTiming(1, { duration: 700, easing: Easing.out(Easing.cubic) }),
    );
    translateY.value = withDelay(
      delay,
      withTiming(0, { duration: 800, easing: Easing.out(Easing.cubic) }),
    );
  }, [delay, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>;
}

type SectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

export function SectionHeader({ eyebrow, title, body, style, titleStyle, children }: SectionProps) {
  return (
    <View style={[styles.section, style]}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {body ? <Text style={styles.body}>{body}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 12,
    maxWidth: 720,
  },
  eyebrow: {
    fontFamily: fonts.bodySemi,
    fontSize: 13,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: colors.leaf,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 40,
    lineHeight: 46,
    color: colors.ink,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 28,
    color: colors.inkSoft,
  },
});
