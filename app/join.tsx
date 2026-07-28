import { Linking, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { AppButton } from '../components/AppButton';
import { FadeIn } from '../components/FadeIn';
import { PageShell } from '../components/PageShell';
import { join, site } from '../constants/content';
import { colors, fonts, radii } from '../constants/theme';

export default function JoinScreen() {
  const { width } = useWindowDimensions();
  const stacked = width < 860;

  return (
    <PageShell>
      <FadeIn style={styles.copy}>
        <Text style={styles.brand}>{site.shortName}</Text>
        <Text style={styles.eyebrow}>{join.eyebrow}</Text>
        <Text style={styles.title}>{join.title}</Text>
        <Text style={styles.body}>{join.body}</Text>
        <Text style={styles.invite}>{join.invite}</Text>
      </FadeIn>

      <FadeIn delay={120} style={styles.contactBand}>
        <Text style={styles.contactTitle}>{join.contactTitle}</Text>
        <View style={[styles.contactRow, stacked && styles.contactStacked]}>
          {join.ways.map((way) => (
            <Pressable
              key={way.label}
              disabled={!way.href}
              onPress={() => way.href && Linking.openURL(way.href)}
              style={styles.contactCard}
            >
              <Text style={styles.contactLabel}>{way.label}</Text>
              <Text style={[styles.contactValue, way.href && styles.contactLink]}>{way.value}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.ctaRow}>
          <AppButton href="/gallery" label="See the gallery" />
          <AppButton href="/about" label="Our story" variant="ghost" />
        </View>
      </FadeIn>
    </PageShell>
  );
}

const styles = StyleSheet.create({
  copy: {
    paddingTop: 40,
    paddingBottom: 12,
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
  eyebrow: {
    fontFamily: fonts.bodySemi,
    fontSize: 13,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: colors.leaf,
    marginTop: 8,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 42,
    lineHeight: 48,
    color: colors.ink,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 28,
    color: colors.inkSoft,
  },
  invite: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
    lineHeight: 26,
    color: colors.moss,
    marginTop: 4,
  },
  contactBand: {
    marginTop: 20,
    marginBottom: 16,
    backgroundColor: colors.white,
    borderRadius: radii.xl,
    padding: 32,
    gap: 20,
    borderWidth: 1,
    borderColor: 'rgba(47, 93, 66, 0.08)',
  },
  contactTitle: {
    fontFamily: fonts.displaySoft,
    fontSize: 28,
    color: colors.ink,
  },
  contactRow: {
    flexDirection: 'row',
    gap: 14,
  },
  contactStacked: {
    flexDirection: 'column',
  },
  contactCard: {
    flex: 1,
    backgroundColor: colors.foam,
    borderRadius: radii.md,
    padding: 18,
    gap: 6,
  },
  contactLabel: {
    fontFamily: fonts.bodySemi,
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: colors.leaf,
  },
  contactValue: {
    fontFamily: fonts.bodyMedium,
    fontSize: 15,
    lineHeight: 22,
    color: colors.ink,
  },
  contactLink: {
    color: colors.moss,
    textDecorationLine: 'underline',
  },
  ctaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
});
