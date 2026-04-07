const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;
};

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;
//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

const TriangleBar = (props) => {
  const { fill, x, y, width, height, index, colors } = props;
  const dynamicFill = colors && colors.length > 0 ? colors[index % colors.length] : fill;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={dynamicFill} />;
}

export { getPath, TriangleBar };