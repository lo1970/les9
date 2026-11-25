import type { Locale } from '@les9/domain';
import { translate } from '@les9/i18n';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [locale, setLocale] = useState<Locale>('fr');

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <StatusBar style="dark" />
      <Text style={styles.kicker}>{translate(locale, 'home.kicker')}</Text>
      <Text accessibilityRole="header" style={styles.title}>
        {translate(locale, 'home.title')}
      </Text>
      <Text style={styles.lead}>{translate(locale, 'home.lead')}</Text>

      <View accessibilityRole="tablist" style={styles.languages}>
        {(['fr', 'nl'] as const).map((code) => {
          const selected = code === locale;
          return (
            <Pressable
              key={code}
              accessibilityRole="tab"
              accessibilityState={{ selected }}
              onPress={() => setLocale(code)}
              style={[styles.language, selected && styles.languageSelected]}
            >
              <Text
                style={[styles.languageText, selected && styles.languageTextSelected]}
              >
                {translate(locale, code === 'fr' ? 'lang.fr' : 'lang.nl')}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.block}>
        <Text accessibilityRole="header" style={styles.heading}>
          {translate(locale, 'home.newsTitle')}
        </Text>
        <Text style={styles.empty}>{translate(locale, 'home.newsEmpty')}</Text>
      </View>
      <View style={styles.block}>
        <Text accessibilityRole="header" style={styles.heading}>
          {translate(locale, 'home.announcementsTitle')}
        </Text>
        <Text style={styles.empty}>{translate(locale, 'home.announcementsEmpty')}</Text>
      </View>
      <View style={styles.block}>
        <Text accessibilityRole="header" style={styles.heading}>
          {translate(locale, 'home.gazettesTitle')}
        </Text>
        <Text style={styles.empty}>{translate(locale, 'home.gazettesEmpty')}</Text>
      </View>
      <View style={styles.block}>
        <Text accessibilityRole="header" style={styles.heading}>
          {translate(locale, 'privacy.title')}
        </Text>
        <Text style={styles.empty}>{translate(locale, 'privacy.lead')}</Text>
        <Text style={styles.empty}>{translate(locale, 'privacy.noAnalytics')}</Text>
      </View>
      <Text style={styles.footer}>{translate(locale, 'footer.note')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f3efe4',
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 48,
  },
  kicker: {
    color: '#7a2e24',
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 8,
    color: '#1c1915',
    fontSize: 36,
    lineHeight: 40,
  },
  lead: {
    marginTop: 16,
    color: '#1c1915',
    fontSize: 18,
    lineHeight: 26,
  },
  languages: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 24,
  },
  language: {
    borderWidth: 1,
    borderColor: '#1c1915',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  languageSelected: {
    backgroundColor: '#1c1915',
  },
  languageText: {
    color: '#1c1915',
    fontSize: 16,
  },
  languageTextSelected: {
    color: '#f3efe4',
  },
  block: {
    marginTop: 28,
    borderTopWidth: 1,
    borderTopColor: '#1c1915',
    paddingTop: 12,
  },
  heading: {
    color: '#1c1915',
    fontSize: 22,
  },
  empty: {
    marginTop: 8,
    color: '#514b43',
    fontSize: 16,
    lineHeight: 22,
  },
  footer: {
    marginTop: 32,
    color: '#514b43',
    fontSize: 14,
  },
});
