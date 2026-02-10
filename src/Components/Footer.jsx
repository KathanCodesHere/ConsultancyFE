import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 1️⃣ Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>Business Strategy Consulting</li>
              <li>Financial Advisory</li>
              <li>Operational Efficiency</li>
              <li>IT & Digital Transformation</li>
              <li>Risk Management</li>
              <li className="font-semibold cursor-pointer hover:underline">
                Explore All Services
              </li>
            </ul>
          </div>

          {/* 2️⃣ Industries */}
          <div>
            <h3 className="text-xl font-bold mb-4">Industries</h3>
            <ul className="space-y-3">
              <li>Technology</li>
              <li>Finance</li>
              <li>Healthcare</li>
              <li>Retail</li>
              <li>Manufacturing</li>
              <li>Government & Public Sector</li>
            </ul>
          </div>

          {/* 3️⃣ Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 ">
              <li className="flex gap-3">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} />
                <span>info@apexadvisory.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} />
                <span>
                  123 Business Ave, Suite 500,<br />
                  New York, NY 10001,<br />
                  USA
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} />
                <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* 4️⃣ Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-3 ">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Insights</li>
              <li>Case Studies</li>
              <li>Careers</li>
              <li>Blog / Insights</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Section */}
      <div className="border-t border-blue-300">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Consulting Firm. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:underline cursor-pointer">FAQ</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
