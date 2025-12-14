'use client'

const Footer = () => {
  return (
    <footer id="footer" className="py-8 px-6 md:px-12 lg:px-16 xl:px-20 bg-background border-y border-black">
      <div className="xmax-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row w-full gap-12 mb-16 justify-between md:text-2xl ">
          <div className="lg:max-w-[800px]">
            <h3 className="text-[40px] lg:text-6xl xl:text-7xl font-medium">
              ACCELERATE GROWTH,
              MAXIMIZE YOUR ROI
            </h3>
          </div>
          <div className="grid grid-cols-12 gap-8 flex-1 justify-items-end">
            <div className="col-span-8 2k:col-span-4 2k:col-start-5 text-[20px]">
              <h4 className="md:text-[24px] tracking-wider mb-2 ">
                Address
              </h4>
              <p className="leading-relaxed">
                Gang Salak, RT.001/RW.002, Krajan, Klampok, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153
              </p>
              <h4 className="mt-4 md:text-[24px] tracking-wider">
                Contact
              </h4>
              <p className="mt-2 leading-relaxed">
                hello@daya-arsana.com<br />
                (62) 851 - 5539 - 4885
              </p>
            </div>

            <div className="col-span-4 2k:col-span-2 2k:col-start-10 text-[20px]">
              {/* <h4 className="font-semibold tracking-wider mb-4">
              SOCIALS
            </h4> */}
              <ul className="flex flex-col gap-4 md:gap-6 font-medium">
                <li className="hover:text-foreground transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Behance</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Dribbble</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xl text-muted-foreground">
            © {new Date().getFullYear()} D·A Agency. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            {/* <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
