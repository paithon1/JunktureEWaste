import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { AppButton } from '../components/AppButton';
import { FadeIn, SectionHeader } from '../components/FadeIn';
import { PageShell } from '../components/PageShell';
import { StatsRow } from '../components/StatsRow';
import { home, site } from '../constants/content';
import { colors, fonts, radii } from '../constants/theme';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const stacked = width < 900;

  return (
    <PageShell>
      <View style={[styles.hero, stacked && styles.heroStacked]}>
        <FadeIn style={styles.heroCopy}>
          <Text style={styles.brandHero}>{site.shortName}</Text>
          <Text style={styles.headline}>
            Reviving Tech,{'\n'}Restoring the Planet
          </Text>
          <Text style={styles.support}>{home.heroSupport}</Text>
          <View style={styles.ctaRow}>
            <AppButton href="/about" label="Learn how" />
            <AppButton href="/gallery" label="See the gallery" variant="ghost" />
            <AppButton href="/join" label="Join us" variant="ghost" />
          </View>
        </FadeIn>
      </View>

      <FadeIn delay={120} style={styles.statsSection}>
        <Text style={styles.statsEyebrow}>Impact so far</Text>
        <Text style={styles.statsTitle}>Numbers with a second life</Text>
        <StatsRow />
        <Text style={styles.artCredit}>
          Vector illustrations on this page are from Wix.
        </Text>
      </FadeIn>

      <FadeIn style={styles.crisis}>
        <SectionHeader
          eyebrow="The challenge"
          title={home.crisisLead}
          titleStyle={styles.crisisTitle}
        />
        <Text style={styles.crisisBody}>{home.crisisBody}</Text>
        <Text style={styles.crisisClose}>{home.crisisClose}</Text>
      </FadeIn>

      <FadeIn style={styles.missionBand}>
        <SectionHeader
          eyebrow={home.missionEyebrow}
          title={home.missionTitle}
          body={home.missionBody}
        />
        <View style={styles.ctaRow}>
          <AppButton href="/about" label="Our story" variant="soft" />
        </View>
      </FadeIn>
    </PageShell>
  );
}

const styles = StyleSheet.create({
  hero: {
    paddingTop: 40,
    paddingBottom: 28,
    maxWidth: 640,
  },
  heroStacked: {
    maxWidth: '100%',
  },
  heroCopy: {
    gap: 16,
  },
  brandHero: {
    fontFamily: fonts.display,
    fontSize: 52,
    lineHeight: 58,
    color: colors.moss,
    letterSpacing: -1.2,
  },
  headline: {
    fontFamily: fonts.displaySoft,
    fontSize: 36,
    lineHeight: 42,
    color: colors.ink,
  },
  support: {
    fontFamily: fonts.body,
    fontSize: 18,
    lineHeight: 30,
    color: colors.inkSoft,
    maxWidth: 480,
  },
  ctaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 6,
  },
  statsSection: {
    marginTop: 20,
    marginBottom: 56,
    gap: 12,
  },
  statsEyebrow: {
    fontFamily: fonts.bodySemi,
    fontSize: 13,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: colors.leaf,
  },
  statsTitle: {
    fontFamily: fonts.display,
    fontSize: 34,
    lineHeight: 40,
    color: colors.ink,
    marginBottom: 8,
  },
  artCredit: {
    fontFamily: fonts.body,
    fontSize: 12,
    lineHeight: 18,
    color: colors.inkSoft,
    opacity: 0.7,
    marginTop: 8,
  },
  crisis: {
    marginBottom: 56,
    gap: 16,
    maxWidth: 760,
  },
  crisisTitle: {
    fontSize: 34,
    lineHeight: 40,
  },
  crisisBody: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 28,
    color: colors.inkSoft,
  },
  crisisClose: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
    lineHeight: 28,
    color: colors.moss,
  },
  missionBand: {
    marginBottom: 24,
    backgroundColor: 'rgba(232, 240, 227, 0.85)',
    borderRadius: radii.xl,
    padding: 36,
    gap: 20,
    borderWidth: 1,
    borderColor: 'rgba(47, 93, 66, 0.08)',
  },
});
