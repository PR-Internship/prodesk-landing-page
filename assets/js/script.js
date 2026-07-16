(function () {
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    function syncButton() {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    toggle.addEventListener('click', function () {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        var next = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        syncButton();
    });

    syncButton();
})();


(function () {
    var menuBtn = document.getElementById('menu-btn');
    var navbar = document.getElementById('primary-nav');
    if (!menuBtn || !navbar) return;

    menuBtn.addEventListener('click', function () {
        var open = navbar.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
})();
