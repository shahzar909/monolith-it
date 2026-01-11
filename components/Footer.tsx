import Link from "next/link";
import {  Linkedin, Mail, Phone, } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold mb-6 block">
              <span className="text-primary-400">Monolith</span>.IT
            </Link>
            <p className="text-dark-300 mb-6">
              Reliable technology, built for growth
            </p>
            <div className="flex space-x-4">
             
              <a href="https://www.linkedin.com/company/monolith-it-systems/" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a
  href="mailto:monolithit1@gmail.com"
  aria-label="Email Monolith IT"
  className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center
             hover:bg-primary-600 transition-colors"
>
  <Mail size={18} />
</a>
              
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-dark-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-dark-300 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-dark-300 hover:text-primary-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-dark-300">Software Development</span></li>
              <li><span className="text-dark-300">Cloud Solutions</span></li>
              <li><span className="text-dark-300">AI & Automation</span></li>
              <li><span className="text-dark-300">Cybersecurity</span></li>
              <li><span className="text-dark-300">Mobile Development</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="text-primary-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-dark-300">+91 7301190333</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-dark-300">+91 8700256931</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-dark-300">monolithit1@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-dark-400 text-sm">
            <p>© 2025 Monolith IT Company. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}