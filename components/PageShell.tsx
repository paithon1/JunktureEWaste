import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, maxContent } from '../constants/theme';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export function PageShell({ children }: Props) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[colors.skySoft, colors.paper, colors.foam]}
        locations={[0, 0.35, 1]}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View
        pointerEvents="none"
        style={[
          styles.blob,
          styles.blobOne,
          { width: Math.min(520, width * 0.7), height: Math.min(520, width * 0.7) },
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          styles.blob,
          styles.blobTwo,
          {
            width: Math.min(420, width * 0.55),
            height: Math.min(420, width * 0.55),
            top: height * 0.45,
          },
        ]}
      />

      <Header />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.page}>{children}</View>
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.paper,
    minHeight: '100%' as any,
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  page: {
    width: '100%',
    maxWidth: maxContent,
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  blob: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.45,
  },
  blobOne: {
    top: -80,
    right: -100,
    backgroundColor: colors.mist,
  },
  blobTwo: {
    left: -120,
    backgroundColor: colors.sky,
    opacity: 0.22,
  },
});
