import { Linking, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { site } from '../constants/content';
import { colors, fonts, maxContent } from '../constants/theme';

function FooterLink({
  href,
  label,
}: {
  href: '/' | '/about' | '/gallery' | '/join';
  label: string;
}) {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Text style={styles.link}>{label}</Text>
      </Pressable>
    </Link>
  );
}

export function Footer() {
  const { width } = useWindowDimensions();
  const stacked = width < 760;

  return (
    <View style={styles.wrap}>
      <View style={[styles.inner, stacked && styles.innerStacked]}>
        <View style={styles.brandBlock}>
          <Image
            source={require('../assets/brand/logo-mark.png')}
            style={styles.logo}
            contentFit="contain"
          />
          <Text style={styles.name}>{site.name}</Text>
          <Text style={styles.tag}>{site.tagline}</Text>
          <Text style={styles.loc}>{site.location}</Text>
        </View>

        <View style={styles.links}>
          <Text style={styles.colTitle}>Explore</Text>
          <FooterLink href="/" label="Home" />
          <FooterLink href="/about" label="About Us" />
          <FooterLink href="/gallery" label="Photo Gallery" />
          <FooterLink href="/join" label="Join Us" />
        </View>

        <View style={styles.links}>
          <Text style={styles.colTitle}>Connect</Text>
          <Pressable onPress={() => Linking.openURL(`mailto:${site.email}`)}>
            <Text style={styles.link}>{site.email}</Text>
          </Pressable>
          <Text style={styles.note}>{site.nonprofitStatus} nonprofit · Metro Atlanta</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.copy}>© {site.year} by {site.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 72,
    backgroundColor: colors.ink,
    paddingTop: 56,
    paddingBottom: 28,
    paddingHorizontal: 24,
  },
  inner: {
    maxWidth: maxContent,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,
  },
  innerStacked: {
    flexDirection: 'column',
  },
  brandBlock: {
    flex: 1.2,
    gap: 8,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 8,
  },
  name: {
    fontFamily: fonts.displaySoft,
    fontSize: 22,
    color: colors.cream,
  },
  tag: {
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.mist,
    maxWidth: 280,
  },
  loc: {
    fontFamily: fonts.bodyMedium,
    fontSize: 13,
    color: colors.leafBright,
    marginTop: 4,
  },
  links: {
    gap: 10,
    minWidth: 140,
  },
  colTitle: {
    fontFamily: fonts.bodySemi,
    fontSize: 13,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: colors.leafBright,
    marginBottom: 4,
  },
  link: {
    fontFamily: fonts.bodyMedium,
    fontSize: 15,
    color: colors.cream,
    textDecorationLine: 'none',
  },
  note: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.mist,
    marginTop: 6,
    maxWidth: 200,
  },
  bottom: {
    maxWidth: maxContent,
    width: '100%',
    alignSelf: 'center',
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(197, 209, 191, 0.18)',
  },
  copy: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.mist,
  },
});
