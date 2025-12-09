'use client'

const Footer = () => {
  return (
    <footer id="footer" className="py-16 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              ACCELERATE GROWTH,
              <br />
              MAXIMIZE YOUR <span className="italic text-primary">ROI</span>
            </h3>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-muted-foreground mb-4">
              Address
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gang Salak, RT.001/RW.002, Krajan, Klampok, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              hello@daya-arsana.com<br />
              (62) 851 - 5539 - 4885
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-muted-foreground mb-4">
              SOCIALS
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Dribbble</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} D·A Agency. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
