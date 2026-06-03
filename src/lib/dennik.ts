export const fmtDate = (d: Date): string =>
  new Intl.DateTimeFormat('sk-SK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);

/** Krátky textový výňatok zo surového markdoc tela záznamu. */
export const excerpt = (body: string | undefined, n = 150): string => {
  if (!body) return '';
  const t = body
    .replace(/^---[\s\S]*?---/, '') // istota: odstráň prípadné frontmatter
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1') // [text](url) -> text
    .replace(/[#>*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, '') + '…' : t;
};
