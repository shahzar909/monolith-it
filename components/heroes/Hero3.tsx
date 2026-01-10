import Link from "next/link";
import { Zap, Shield, TrendingUp } from "lucide-react";

export default function Hero3() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 pt-32 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Innovation Meets Excellence
            </div>
            <h1 className="heading-1 text-dark-900 mb-6">
              Your Trusted Partner in Digital Transformation
            </h1>
            <p className="text-xl text-dark-600 mb-8">
              Empowering businesses with scalable technology solutions, from concept to deployment and beyond. We turn your digital vision into reality.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-outline">
                View Case Studies
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Zap className="text-primary-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-dark-900">Fast Delivery</div>
                  <div className="text-sm text-dark-600">Agile development</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Shield className="text-primary-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-dark-900">Secure Solutions</div>
                  <div className="text-sm text-dark-600">Enterprise-grade security</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <TrendingUp className="text-primary-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-dark-900">Scalable Growth</div>
                  <div className="text-sm text-dark-600">Built for expansion</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark-900">Technologies We Master</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React & Next.js",
                  "Node.js & Python",
                  "AWS & Azure",
                  "Docker & Kubernetes",
                  "AI & Machine Learning",
                  "Blockchain",
                  "Mobile Development",
                  "DevOps & CI/CD",
                ].map((tech, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}