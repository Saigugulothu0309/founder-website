export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[var(--text-muted)] text-sm">
          © {year} — Built with purpose, shipped with precision.
        </div>
        <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
          {['Twitter/X', 'LinkedIn', 'GitHub', 'Google Scholar'].map(s => (
            <a key={s} href="#" className="hover:text-[var(--text-primary)] transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
