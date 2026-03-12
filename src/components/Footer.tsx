import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <p className="font-heading text-lg font-bold mb-2">
        Yogesh <span className="text-primary">Yemul</span>
      </p>
      <p className="font-mono text-xs text-muted-foreground mb-6 italic">
        "Code. Train. Deploy. Repeat." — Yogesh Yemul
      </p>
      <div className="flex items-center justify-center gap-5 mb-6">
        {[
          { icon: Github, href: "https://github.com/YogeshYemul" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/yogesh-yemul-902386264" },
          { icon: Mail, href: "mailto:yogeshyemul2006@gmail.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Yogesh Yemul. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
