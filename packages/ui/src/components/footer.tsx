export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; 2020 - {new Date().getFullYear()} merzen-sh
        </p>
      </div>
    </footer>
  );
}
