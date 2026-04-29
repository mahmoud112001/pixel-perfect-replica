export const Footer = () => (
  <footer className="border-t border-border/50 mt-32">
    <div className="container py-12 grid gap-8 md:grid-cols-3 text-sm">
      <div>
        <div className="font-mono text-xs text-muted-foreground mb-3">SMART/TRAIN ©2026</div>
        <p className="text-muted-foreground max-w-xs">A small training studio building practical skills for the AI era — one cohort at a time.</p>
      </div>
      <div>
        <div className="font-mono text-xs text-muted-foreground mb-3">CONTACT</div>
        <p>hello@smarttrain.studio</p>
        <p className="text-muted-foreground">Beirut · Remote-first</p>
      </div>
      <div>
        <div className="font-mono text-xs text-muted-foreground mb-3">FOLLOW</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">X</a>
          <a href="#" className="hover:text-primary transition-colors">YouTube</a>
        </div>
      </div>
    </div>
  </footer>
);
