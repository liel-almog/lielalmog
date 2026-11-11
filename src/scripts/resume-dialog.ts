function initResumeDialog() {
  const dialog = document.querySelector<HTMLDialogElement>("#resume-dialog");
  if (!dialog) return;

  let previousOverflow = "";

  document
    .querySelectorAll<HTMLAnchorElement>("[data-resume-dialog]")
    .forEach((link) => {
      link.setAttribute("aria-haspopup", "dialog");
      link.setAttribute("aria-controls", dialog.id);
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;
        event.preventDefault();
        if (dialog.open) return;

        if (event.detail > 0) link.blur();
        previousOverflow = document.documentElement.style.overflow;
        dialog.showModal();
        dialog.focus({ preventScroll: true });
        document.documentElement.style.overflow = "hidden";
      });
    });

  dialog.addEventListener("close", () => {
    document.documentElement.style.overflow = previousOverflow;
  });

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outside) dialog.close();
  });
}

initResumeDialog();
