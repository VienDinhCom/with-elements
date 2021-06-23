async function withElements(
  selectors: string,
  callback: (element: Element) => void | Promise<void>
) {
  const elements = document.querySelectorAll(selectors);

  for (const key in elements) {
    if (Object.prototype.hasOwnProperty.call(elements, key)) {
      const element = elements[key];

      await callback(element);
    }
  }
}

function withElementsSync(
  selectors: string,
  callback: (element: Element) => void
) {
  const elements = document.querySelectorAll(selectors);

  for (const key in elements) {
    if (Object.prototype.hasOwnProperty.call(elements, key)) {
      const element = elements[key];

      callback(element);
    }
  }
}

export { withElements, withElementsSync };

export default { withElements, withElementsSync };
