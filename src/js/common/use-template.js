export function useTemplate(element, template, data) {
  element.insertAdjacentHTML('beforeend', template(data));
}
