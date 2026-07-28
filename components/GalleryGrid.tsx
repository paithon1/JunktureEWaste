import { Modal, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { useMemo, useState } from 'react';
import { galleryItems, type GalleryItem } from '../constants/gallery';
import { colors, fonts, radii } from '../constants/theme';
import { FadeIn } from './FadeIn';

function packColumns(items: GalleryItem[], columnCount: number) {
  const columns: { item: GalleryItem; height: number }[][] = Array.from(
    { length: columnCount },
    () => [],
  );
  const heights = Array.from({ length: columnCount }, () => 0);

  items.forEach((item) => {
    let shortest = 0;
    for (let i = 1; i < columnCount; i += 1) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    // Relative height for packing (caption bar ~72)
    const relativeHeight = 1 / item.aspectRatio + 0.18;
    columns[shortest].push({ item, height: relativeHeight });
    heights[shortest] += relativeHeight;
  });

  return columns;
}

export function GalleryGrid() {
  const { width } = useWindowDimensions();
  const columnCount = width < 700 ? 1 : width < 1000 ? 2 : 3;
  const gap = 14;
  const available = Math.min(width - 48, 1120);
  const columnWidth = (available - gap * (columnCount - 1)) / columnCount;
  const [active, setActive] = useState<GalleryItem | null>(null);

  const columns = useMemo(
    () => packColumns(galleryItems, columnCount),
    [columnCount],
  );

  return (
    <>
      <View style={[styles.grid, { gap }]}>
        {columns.map((column, colIndex) => (
          <View key={`col-${colIndex}`} style={[styles.column, { width: columnWidth, gap }]}>
            {column.map(({ item }, index) => {
              const imageHeight = columnWidth / item.aspectRatio;
              return (
                <FadeIn key={item.id} delay={40 + (colIndex * 8 + index) * 35}>
                  <Pressable
                    onPress={() => setActive(item)}
                    style={({ pressed }) => [styles.tile, pressed && styles.tileHover]}
                  >
                    <Image
                      source={item.source}
                      style={{ width: columnWidth, height: imageHeight }}
                      contentFit="cover"
                      transition={280}
                    />
                    <View style={styles.captionBar}>
                      <Text style={styles.captionTitle}>{item.title}</Text>
                      <Text style={styles.captionBody}>{item.caption}</Text>
                    </View>
                  </Pressable>
                </FadeIn>
              );
            })}
          </View>
        ))}
      </View>

      <Modal visible={!!active} transparent animationType="fade" onRequestClose={() => setActive(null)}>
        <Pressable style={styles.lightbox} onPress={() => setActive(null)}>
          <View style={styles.lightboxCard}>
            {active ? (
              <>
                <Image source={active.source} style={styles.lightboxImage} contentFit="contain" />
                <Text style={styles.lightboxTitle}>{active.title}</Text>
                <Text style={styles.lightboxBody}>{active.caption}</Text>
                <Text style={styles.lightboxHint}>Tap anywhere to close</Text>
              </>
            ) : null}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
  },
  tile: {
    borderRadius: radii.lg,
    overflow: 'hidden',
    backgroundColor: colors.ink,
  },
  tileHover: {
    opacity: 0.94,
    transform: [{ scale: 0.995 }],
  },
  captionBar: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(11, 20, 15, 0.78)',
    gap: 4,
  },
  captionTitle: {
    fontFamily: fonts.bodySemi,
    fontSize: 15,
    color: colors.cream,
  },
  captionBody: {
    fontFamily: fonts.body,
    fontSize: 13,
    lineHeight: 19,
    color: colors.mist,
  },
  lightbox: {
    flex: 1,
    backgroundColor: colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  lightboxCard: {
    width: '100%',
    maxWidth: 900,
    alignItems: 'center',
    gap: 12,
  },
  lightboxImage: {
    width: '100%',
    height: 520,
    borderRadius: radii.md,
    backgroundColor: colors.black,
  },
  lightboxTitle: {
    fontFamily: fonts.displaySoft,
    fontSize: 28,
    color: colors.cream,
    textAlign: 'center',
  },
  lightboxBody: {
    fontFamily: fonts.body,
    fontSize: 16,
    color: colors.mist,
    textAlign: 'center',
    maxWidth: 520,
  },
  lightboxHint: {
    fontFamily: fonts.bodyMedium,
    fontSize: 13,
    color: colors.leafBright,
    marginTop: 8,
  },
});
