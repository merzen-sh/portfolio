export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mark Wareesri
        </p>
      </div>
    </footer>
  );
}
