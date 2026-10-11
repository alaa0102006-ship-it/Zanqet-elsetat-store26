// الصورة الأساسية للمنتج، أو صورة اللون المختار
export function imageFor(product, colorHex) {
  const c = product.colors?.find((x) => x.hex === colorHex);
  return (c && c.image) || product.images?.[0] || '/logo.webp';
}
