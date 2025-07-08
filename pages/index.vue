<template>
    <div>
        <!-- Header -->
        <AppHeader />

        <!-- Hero Section -->
        <HeroSection />
    </div>
</template>

<script setup>
const { t } = useI18n()

// SEO et métadonnées avec traductions
useHead({
    title: t('seo.title'),
    meta: [
        {
            name: 'description',
            content: t('seo.description')
        },
        {
            name: 'keywords',
            content: t('seo.keywords')
        },
        {
            property: 'og:title',
            content: t('seo.ogTitle')
        },
        {
            property: 'og:description',
            content: t('seo.ogDescription')
        },
        {
            property: 'og:type',
            content: 'website'
        }
    ]
})
</script>