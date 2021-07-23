import React from 'react'

export default function Footer({year}) {
    return (
        <footer class="footer mt-auto py-3 bg-light">
            <div class="container">
                <span class="text-muted">IUDigital &copy; {year}</span>
            </div>
        </footer>
    )
}
