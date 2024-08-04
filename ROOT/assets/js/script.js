document.addEventListener('DOMContentLoaded', () => {
    const splitter = document.getElementById('splitter');
    const leftPanel = splitter.previousElementSibling;
    const rightPanel = splitter.nextElementSibling;

    let isDragging = false;

    splitter.addEventListener('mousedown', (e) => {
        isDragging = true;
        document.body.style.cursor = 'ew-resize';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const containerRect = splitter.parentElement.getBoundingClientRect();
            const offset = e.clientX - containerRect.left;
            const leftPanelMinWidth = 30; // Minimum width of left panel
            const rightPanelMinWidth = 70; // Minimum width of right panel

            if (offset > leftPanelMinWidth && (containerRect.width - offset) > rightPanelMinWidth) {
                leftPanel.style.width = `${offset}px`;
                rightPanel.style.width = `${containerRect.width - offset - splitter.offsetWidth}px`;
            }
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            document.body.style.cursor = 'default';
        }
    });
});