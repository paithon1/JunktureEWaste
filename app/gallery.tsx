import { StyleSheet, Text, View } from 'react-native';
import { FadeIn } from '../components/FadeIn';
import { GalleryGrid } from '../components/GalleryGrid';
import { PageShell } from '../components/PageShell';
import { galleryIntro, site } from '../constants/content';
import { colors, fonts } from '../constants/theme';

export default function GalleryScreen() {
  return (
    <PageShell>
      <View style={styles.hero}>
        <FadeIn>
          <Text style={styles.brand}>{site.shortName}</Text>
        </FadeIn>
        <FadeIn delay={80}>
          <Text style={styles.title}>{galleryIntro.title}</Text>
        </FadeIn>
        <FadeIn delay={140}>
          <Text style={styles.body}>{galleryIntro.body}</Text>
        </FadeIn>
      </View>

      <GalleryGrid />
    </PageShell>
  );
}

const styles = StyleSheet.create({
  hero: {
    paddingTop: 40,
    paddingBottom: 36,
    gap: 12,
    maxWidth: 640,
  },
  brand: {
    fontFamily: fonts.display,
    fontSize: 44,
    lineHeight: 50,
    color: colors.moss,
    letterSpacing: -1,
  },
  title: {
    fontFamily: fonts.displaySoft,
    fontSize: 34,
    lineHeight: 40,
    color: colors.ink,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 28,
    color: colors.inkSoft,
  },
});
