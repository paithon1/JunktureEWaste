import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { AppButton } from '../components/AppButton';
import { FadeIn, SectionHeader } from '../components/FadeIn';
import { PageShell } from '../components/PageShell';
import { about, site } from '../constants/content';
import { colors, fonts, radii } from '../constants/theme';

export default function AboutScreen() {
  const { width } = useWindowDimensions();
  const stacked = width < 860;

  return (
    <PageShell>
      <View style={styles.hero}>
        <FadeIn>
          <Text style={styles.brand}>{site.shortName}</Text>
        </FadeIn>
        <FadeIn delay={80}>
          <Text style={styles.welcome}>{about.welcome}</Text>
        </FadeIn>
        <FadeIn delay={140}>
          <Text style={styles.headline}>{about.headline}</Text>
        </FadeIn>
        <FadeIn delay={200}>
          <Text style={styles.belief}>{about.belief}</Text>
        </FadeIn>
      </View>

      <FadeIn style={styles.copyCol}>
        {about.body.map((paragraph) => (
          <Text key={paragraph.slice(0, 24)} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}
        <Text style={styles.closing}>{about.closing}</Text>
      </FadeIn>

      <FadeIn style={styles.whyBand}>
        <SectionHeader eyebrow="Name & purpose" title={about.whyTitle} body={about.whyBody} />
      </FadeIn>

      <FadeIn delay={80} style={[styles.partner, stacked && styles.partnerStacked]}>
        <View style={styles.partnerCopy}>
          <SectionHeader
            eyebrow={about.partnerTitle}
            title={about.partnerName}
            body={`${about.partnerLocation}\n\n${about.partnerThanks}`}
          />
          <AppButton href="/gallery" label="Visit the gallery" />
        </View>
        <View
          style={[
            styles.partnerLogoWrap,
            stacked ? styles.partnerLogoWrapStacked : styles.partnerLogoWrapWide,
          ]}
        >
          <Image
            source={require('../assets/brand/partnerlogo.png')}
            style={styles.partnerLogo}
            contentFit="contain"
          />
        </View>
      </FadeIn>
    </PageShell>
  );
}

const styles = StyleSheet.create({
  hero: {
    paddingTop: 40,
    paddingBottom: 28,
    gap: 14,
    maxWidth: 760,
  },
  brand: {
    fontFamily: fonts.display,
    fontSize: 48,
    lineHeight: 54,
    color: colors.moss,
    letterSpacing: -1,
  },
  welcome: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
    color: colors.leaf,
    letterSpacing: 0.3,
  },
  headline: {
    fontFamily: fonts.displaySoft,
    fontSize: 34,
    lineHeight: 42,
    color: colors.ink,
  },
  belief: {
    fontFamily: fonts.body,
    fontSize: 18,
    lineHeight: 30,
    color: colors.inkSoft,
  },
  copyCol: {
    gap: 18,
    marginBottom: 40,
    maxWidth: 760,
  },
  paragraph: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 28,
    color: colors.inkSoft,
  },
  closing: {
    fontFamily: fonts.bodySemi,
    fontSize: 17,
    lineHeight: 28,
    color: colors.moss,
    marginTop: 8,
  },
  whyBand: {
    backgroundColor: colors.white,
    borderRadius: radii.xl,
    padding: 32,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: 'rgba(47, 93, 66, 0.08)',
  },
  partner: {
    marginBottom: 20,
    backgroundColor: 'rgba(213, 230, 238, 0.55)',
    borderRadius: radii.xl,
    padding: 32,
    gap: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  partnerStacked: {
    flexDirection: 'column',
  },
  partnerCopy: {
    flex: 1,
    gap: 20,
  },
  partnerLogoWrap: {
    backgroundColor: colors.ink,
    borderRadius: radii.lg,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  partnerLogoWrapWide: {
    minWidth: 260,
  },
  partnerLogoWrapStacked: {
    width: '100%',
  },
  partnerLogo: {
    width: 220,
    height: 64,
  },
});
