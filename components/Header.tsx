import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { Link, usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { site } from '../constants/content';
import { colors, fonts, maxContent, radii } from '../constants/theme';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/join', label: 'Join Us' },
] as const;

export function Header() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isNarrow = width < 780;
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.wrap, { paddingTop: Math.max(insets.top, 12) }]}>
      <View style={styles.inner}>
        <Link href="/" asChild>
          <Pressable style={styles.brand} accessibilityRole="link">
            <Image
              source={require('../assets/brand/logo-circle.png')}
              style={styles.logo}
              contentFit="contain"
            />
            <View>
              <Text style={styles.brandName}>{site.shortName}</Text>
              <Text style={styles.brandSub}>Inc.</Text>
            </View>
          </Pressable>
        </Link>

        {isNarrow ? (
          <Pressable
            onPress={() => setOpen((v) => !v)}
            style={styles.menuBtn}
            accessibilityRole="button"
            accessibilityLabel="Toggle menu"
          >
            <Text style={styles.menuBtnText}>{open ? 'Close' : 'Menu'}</Text>
          </Pressable>
        ) : (
          <View style={styles.nav}>
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} asChild>
                  <Pressable
                    style={StyleSheet.flatten([
                      styles.navItem,
                      active && styles.navItemActive,
                    ])}
                  >
                    <Text style={[styles.navText, active && styles.navTextActive]}>
                      {link.label}
                    </Text>
                  </Pressable>
                </Link>
              );
            })}
          </View>
        )}
      </View>

      {isNarrow && open ? (
        <View style={styles.mobileNav}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} asChild>
                <Pressable
                  onPress={() => setOpen(false)}
                  style={StyleSheet.flatten([
                    styles.mobileItem,
                    active && styles.mobileItemActive,
                  ])}
                >
                  <Text style={[styles.mobileText, active && styles.navTextActive]}>
                    {link.label}
                  </Text>
                </Pressable>
              </Link>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'sticky' as any,
    top: 0,
    zIndex: 40,
    backgroundColor: 'rgba(244, 248, 241, 0.94)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(47, 93, 66, 0.08)',
  },
  inner: {
    width: '100%',
    maxWidth: maxContent,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 48,
    height: 48,
  },
  brandName: {
    fontFamily: fonts.display,
    fontSize: 18,
    color: colors.ink,
    lineHeight: 22,
  },
  brandSub: {
    fontFamily: fonts.bodyMedium,
    fontSize: 12,
    color: colors.inkSoft,
    letterSpacing: 0.4,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.foam,
    padding: 6,
    borderRadius: radii.pill,
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: radii.pill,
  },
  navItemActive: {
    backgroundColor: colors.white,
  },
  navText: {
    fontFamily: fonts.bodySemi,
    fontSize: 14,
    color: colors.inkSoft,
  },
  navTextActive: {
    color: colors.moss,
  },
  menuBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: radii.pill,
    backgroundColor: colors.foam,
  },
  menuBtnText: {
    fontFamily: fonts.bodySemi,
    color: colors.moss,
    fontSize: 14,
  },
  mobileNav: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 8,
    maxWidth: maxContent,
    width: '100%',
    alignSelf: 'center',
  },
  mobileItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: radii.md,
    backgroundColor: colors.foam,
  },
  mobileItemActive: {
    backgroundColor: colors.mist,
  },
  mobileText: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
    color: colors.ink,
  },
});
