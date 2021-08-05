import React from 'react'

export default function Footer({year}) {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <span className="text-muted">IUDigital &copy; {year}</span>
            </div>
        </footer>
    )
}
