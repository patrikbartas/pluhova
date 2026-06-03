import { config, fields, collection } from '@keystatic/core';

export default config({
  // V deve píšeme priamo do súborov; v produkcii (Vercel) admin commituje do GitHubu.
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : { kind: 'github', repo: 'patrikbartas/pluhova' },

  ui: {
    brand: { name: 'Pluhová · denník' },
  },

  collections: {
    dennik: collection({
      label: 'Denník — záznamy',
      slugField: 'title',
      path: 'src/content/dennik/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Nadpis',
            description: 'Krátky, vecný nadpis záznamu.',
            validation: { length: { min: 1 } },
          },
        }),
        date: fields.date({
          label: 'Dátum',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        time: fields.text({
          label: 'Čas',
          description: 'Napr. 7:42 (voliteľné).',
        }),
        location: fields.text({
          label: 'Miesto / úsek',
          defaultValue: 'Pluhová, Bratislava',
        }),
        vehicle: fields.text({
          label: 'Vozidlo',
          description: 'Voliteľný neutrálny opis, napr. „strieborné SUV". Bez ŠPZ a osobných údajov.',
        }),
        cover: fields.image({
          label: 'Fotka (voliteľné)',
          directory: 'public/dennik',
          publicPath: '/dennik/',
        }),
        body: fields.markdoc({
          label: 'Popis situácie',
          options: {
            image: { directory: 'public/dennik', publicPath: '/dennik/' },
          },
        }),
      },
    }),
  },
});
