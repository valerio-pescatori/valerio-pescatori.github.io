export function debounce(fn, ms, args = null) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.call(this, args);
    }, ms);
  };
}

export function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth <= 688) {
      return "sm";
    } else if (windowWidth < 1024) {
      return "md";
    } else if (windowWidth < 1200) {
      return "lg";
    } else {
      return "xlg";
    }
  } else {
    return undefined;
  }
}
