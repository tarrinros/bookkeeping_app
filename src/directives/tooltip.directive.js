export default {
  bind (element, { value }) {
    M.Tooltip.init(element, { html: value })
  }
}