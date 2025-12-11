'use client'

const Footer = () => {
  return (
    <footer id="footer" className="py-8 px-6 lg:px-12 bg-background border-y border-border">
      <div className="xmax-w-7xl mx-auto">
        <div className="md:text-2xl grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8">
            <div className="lg:max-w-[800px]">

              <h3 className="md:text-7xl mb-4">
                ACCELERATE GROWTH,
                MAXIMIZE YOUR ROI
              </h3>
            </div>
          </div>

          <div className="lg:col-span-2 text-[20px]">
            <h4 className="text-[24px] tracking-wider mb-2">
              Address
            </h4>
            <p className="leading-relaxed">
              Gang Salak, RT.001/RW.002, Krajan, Klampok, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153
            </p>
            <h4 className="mt-4 text-[24px] tracking-wider">
              Contact
            </h4>
            <p className="mt-2">
              hello@daya-arsana.com<br />
              (62) 851 - 5539 - 4885
            </p>
          </div>

          <div className="lg:col-span-2 text-[20px]">
            {/* <h4 className="font-semibold tracking-wider mb-4">
              SOCIALS
            </h4> */}
            <ul className="flex flex-col gap-4 font-semibold">
              <li className="hover:text-foreground transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Behance</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Dribbble</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xl text-muted-foreground">
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
