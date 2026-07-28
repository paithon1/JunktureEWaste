import { Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';
import { useRouter, type Href } from 'expo-router';
import { colors, fonts, radii } from '../constants/theme';

type Variant = 'primary' | 'ghost' | 'soft';

type Props = {
  href: Href;
  label: string;
  variant?: Variant;
  style?: StyleProp<ViewStyle>;
};

export function AppButton({ href, label, variant = 'primary', style }: Props) {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => router.push(href)}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'ghost' && styles.ghost,
        variant === 'soft' && styles.soft,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  primary: {
    backgroundColor: colors.ink,
  },
  ghost: {
    backgroundColor: colors.moss,
  },
  soft: {
    backgroundColor: '#244A35',
  },
  pressed: {
    opacity: 0.88,
    transform: [{ translateY: 1 }],
  },
  label: {
    fontFamily: fonts.bodySemi,
    fontSize: 15,
    letterSpacing: 0.2,
    color: '#FBFFF8',
  },
});
