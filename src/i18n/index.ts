import uk from './uk';
import en from './en';

export type Lang = 'uk' | 'en';
export type Dict = typeof uk;

const dicts: Record<Lang, Dict> = { uk, en };

export function t(lang: Lang): Dict {
  return dicts[lang];
}

/** Language-dependent content field in case files: { ua, en } */
export function pick(lang: Lang, field: { ua: string; en: string }): string {
  return lang === 'en' ? field.en : field.ua;
}

/** Special page pairs that don't map by prefix alone */
const routeMap: Record<string, string> = {
  '/dyakuyu/': '/en/thanks/',
};
const routeMapInverse: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([uk, en]) => [en, uk]),
);

function normalize(path: string): string {
  return path.endsWith('/') ? path : path + '/';
}

/** Same page, other language. /cases/x/ <-> /en/cases/x/, / <-> /en/ */
export function altPath(currentPath: string, target: Lang): string {
  const path = normalize(currentPath);
  if (target === 'en') {
    if (path.startsWith('/en/')) return path;
    if (routeMap[path]) return routeMap[path];
    return '/en' + path;
  }
  if (!path.startsWith('/en/')) return path;
  if (routeMapInverse[path]) return routeMapInverse[path];
  return path.slice(3) || '/';
}

export function langFromPath(path: string): Lang {
  return normalize(path).startsWith('/en/') ? 'en' : 'uk';
}
