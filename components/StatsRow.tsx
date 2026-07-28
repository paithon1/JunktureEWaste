import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { stats } from '../constants/content';
import { colors, fonts, radii } from '../constants/theme';

const statArt = [
  require('../assets/illustrations/earth.png'),
  require('../assets/illustrations/monitor.png'),
  require('../assets/illustrations/elephant.png'),
];

function useCountUp(target: number, duration = 1400, delay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    let start: number | null = null;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const tick = (now: number) => {
      if (start == null) start = now;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      if (timeout) clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [target, duration, delay]);

  return value;
}

function formatValue(value: number, prefix: string, suffix: string) {
  const formatted = value >= 1000 ? value.toLocaleString('en-US') : String(value);
  return `${prefix}${formatted}${suffix}`;
}

function StatCard({
  item,
  art,
  delay,
  compact,
}: {
  item: (typeof stats)[number];
  art: number;
  delay: number;
  compact: boolean;
}) {
  const value = useCountUp(item.value, 1400, delay);

  return (
    <View style={[styles.card, compact && styles.cardCompact]}>
      <Image source={art} style={styles.art} contentFit="contain" />
      <Text style={styles.value}>{formatValue(value, item.prefix, item.suffix)}</Text>
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.detail}>{item.detail}</Text>
    </View>
  );
}

export function StatsRow() {
  const { width } = useWindowDimensions();
  const compact = width < 820;

  return (
    <View style={[styles.row, compact && styles.rowCompact]}>
      {stats.map((item, index) => (
        <StatCard
          key={item.label}
          item={item}
          art={statArt[index]}
          delay={200 + index * 160}
          compact={compact}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 18,
    width: '100%',
  },
  rowCompact: {
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(47, 93, 66, 0.08)',
    gap: 8,
    alignItems: 'flex-start',
    shadowColor: colors.moss,
    shadowOpacity: 0.06,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
  },
  cardCompact: {
    flex: undefined,
    width: '100%',
  },
  art: {
    width: 112,
    height: 112,
    marginBottom: 8,
    alignSelf: 'center',
  },
  value: {
    fontFamily: fonts.display,
    fontSize: 44,
    lineHeight: 50,
    color: colors.moss,
    alignSelf: 'stretch',
  },
  label: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
    color: colors.ink,
  },
  detail: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.inkSoft,
  },
});
