import { renderOrderSummary } from "./ordersummary.js";
import { renderPaymentSummary } from "./paymenySummary.js";

export function renderApp() {
  renderOrderSummary();
  renderPaymentSummary();
}
renderApp();
