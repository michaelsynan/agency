import { sendRedirect } from "h3";

export default defineEventHandler((event) => {
  return sendRedirect(event, "/small-business-survival-guide?snall-mail", 302);
});
