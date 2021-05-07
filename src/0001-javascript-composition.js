const compose = (...fns) => (x) => 
  fns.reduce((a, fn) => fn(a), x);

const lower = s => s.toLowerCase();
const sanitize = s =>
  s.replace(/[^a-z0-9 -]/g, '');
const spaceToDash = s =>
  s.replace(/\s+/gm, '-');

const slugify = compose(
  lower,
  sanitize,
  spaceToDash
);
slugify('I love $$$ noodles');
// i-love-noodles