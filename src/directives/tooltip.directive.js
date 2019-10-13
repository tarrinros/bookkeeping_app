// Directive for tooltip on progressbard for Planning
export default {
  bind (element, { value }) {
    M.Tooltip.init(element, { html: value })
  },
  // Destroys the tooltip element for any page except Planning
  unbind (element) {
    const tooltip = M.Tooltip.getInstance(element)

    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }
  }
}
