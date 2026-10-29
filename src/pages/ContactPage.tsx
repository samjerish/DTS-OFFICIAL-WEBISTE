import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { COMPANY_INFO, CAPABILITIES, PRODUCTS } from '../data/companyData';
import { submitEnquiry, SubmissionResult } from '../services/contactService';
import { ContactFormData } from '../types';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  ExternalLink,
  Loader2,
  FileText
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Query parameter prefill support
  const initialProductParam = searchParams.get('product') || '';
  const initialServiceParam = searchParams.get('service') || '';
  const initialMode = searchParams.get('mode') || '';

  const initialSubject = initialProductParam 
    ? initialProductParam
    : initialServiceParam
    ? initialServiceParam
    : initialMode === 'quote'
    ? 'Request for Quotation (RFQ)'
    : '';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productServiceRequired: initialSubject,
    projectDetails: ''
  });

  // Honeypot field for spam prevention
  const [honeypot, setHoneypot] = useState('');

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  // Update productServiceRequired if URL params change
  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({
        ...prev,
        productServiceRequired: initialSubject
      }));
    }
  }, [initialSubject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Organization Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Phone Number is required.';
    } else if (formData.phone.replace(/[\s\-\+\(\)]/g, '').length < 9) {
      newErrors.phone = 'Please provide a valid telephone number (min 10 digits).';
    }

    if (!formData.productServiceRequired.trim()) {
      newErrors.productServiceRequired = 'Please specify the product or service required.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please share your project details, tonnage, or tooling specifications.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam bot honeypot detection
    if (honeypot) {
      console.warn('Spam submission suppressed by honeypot.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const result = await submitEnquiry(formData);
      setSubmissionResult(result);

      if (result.success) {
        // Reset form
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          productServiceRequired: '',
          projectDetails: ''
        });
      }
    } catch (err) {
      setSubmissionResult({
        success: false,
        message: 'An unexpected error occurred while transmitting your request. Please call our team directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Let's Discuss Your Manufacturing Requirements"
        subtitle="Connect with Dynamic Tooling Systems engineering desk for press tool design, sheet metal stampings, CNC milling, or new product development quotes."
        badge="Direct Factory Contact"
        breadcrumb={[{ label: 'Contact Us' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ========================================================
              LEFT COLUMN: CONTACT INFORMATION & PLANT LOCATION
              ======================================================== */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Hosur Industrial Plant</span>
              </div>
              <h2 className="text-2xl font-extrabold text-dts-navy tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Whether you have an immediate RFQ for automotive stamping or need expert tooling consultation for new vehicle programs, our qualified engineering team in Hosur is ready to assist.
              </p>
            </div>

            {/* Verified Contact Details Cards */}
            <div className="space-y-4 text-sm">
              
              {/* Telephone */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-blue-100 text-dts-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-dts-navy text-xs uppercase tracking-wider block">
                    Telephone Contacts
                  </span>
                  <div className="mt-1 space-y-1">
                    <a
                      href={`tel:${COMPANY_INFO.contact.phones[0].link}`}
                      className="block text-base font-bold text-dts-accent hover:underline"
                    >
                      +91 {COMPANY_INFO.contact.phones[0].display}
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phones[1].link}`}
                      className="block text-base font-bold text-dts-accent hover:underline"
                    >
                      +91 {COMPANY_INFO.contact.phones[1].display}
                    </a>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Available during plant operating hours
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-blue-100 text-dts-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-dts-navy text-xs uppercase tracking-wider block">
                    Official Corporate Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="mt-1 block text-base font-bold text-dts-navy hover:text-dts-accent hover:underline break-all"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    For technical drawing submittals (CAD / STEP / PDF)
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-blue-100 text-dts-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-dts-navy text-xs uppercase tracking-wider block">
                    Plant & Office Address
                  </span>
                  <p className="mt-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    {COMPANY_INFO.contact.address.full}
                  </p>
                  <div className="mt-3">
                    <a
                      href={COMPANY_INFO.contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-dts-accent hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center space-x-3 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-dts-accent shrink-0" />
                <span>
                  <strong>Plant Hours:</strong> {COMPANY_INFO.contact.workingHours}
                </span>
              </div>

            </div>

            {/* Quality Standard Reminder */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 flex items-center space-x-3 text-xs text-slate-700">
              <ShieldCheck className="w-5 h-5 text-dts-accent shrink-0" />
              <span>
                <strong>ISO 9001:2015 Certified</strong> — Compliant procurement processes and transparent commercial documentation.
              </span>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: PROFESSIONAL ENQUIRY & RFQ FORM
              ======================================================== */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-lg">
              
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-dts-accent uppercase tracking-wider mb-1">
                  <FileText className="w-4 h-4" />
                  <span>Quotation & Project Inquiry Form</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-dts-navy">
                  Contact Us
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Please complete the form below. Our engineering desk will review your component parameters and contact you promptly.
                </p>
              </div>

              {/* Status Notifications */}
              {submissionResult && (
                <div
                  className={`p-4 rounded-xl mb-6 text-sm flex items-start space-x-3 border ${
                    submissionResult.success
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                      : 'bg-red-50 border-red-300 text-red-900'
                  }`}
                  role="alert"
                >
                  {submissionResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-semibold text-xs sm:text-sm">
                      {submissionResult.message}
                    </p>
                    {submissionResult.isSimulated && (
                      <p className="text-[11px] text-emerald-700 pt-1">
                        Notice: Enquiry recorded in local session state (Ref: {submissionResult.referenceNumber}). To connect a live backend endpoint, specify <code>VITE_CONTACT_API_URL</code> in your environment.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Honeypot hidden input for spam bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave empty</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="fullName" 
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-dts-accent ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      required
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="companyName" 
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-dts-accent ${
                        errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      required
                    />
                    {errors.companyName && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.companyName}
                      </span>
                    )}
                  </div>
                </div>

                {/* Work Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-dts-accent ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      required
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-dts-accent ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      required
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Product / Service Required */}
                <div>
                  <label 
                    htmlFor="productServiceRequired" 
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Product or Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="productServiceRequired"
                    name="productServiceRequired"
                    value={formData.productServiceRequired}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-dts-accent ${
                      errors.productServiceRequired ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                    required
                  >
                    <option value="">-- Select Product or Manufacturing Service --</option>
                    
                    <optgroup label="Press Tooling Solutions">
                      <option value="Cam-Piercing Tool">Cam-Piercing Tool</option>
                      <option value="Forming Tool">Forming Tool</option>
                      <option value="Trimming Tool">Trimming Tool</option>
                      <option value="Press Tool Design & Manufacturing">Press Tool Design & Manufacturing (General)</option>
                    </optgroup>

                    <optgroup label="Press Products & Stamping">
                      <option value="Press Products and Sheet Metal Components">Press Products & Sheet Metal Components</option>
                      <option value="Sub-Assembly Components">Sub-Assembly Components</option>
                      <option value="Deep-Drawn Components">Deep-Drawn Stampings (up to 350T)</option>
                      <option value="Embossed Heat Shields">Embossed Automotive Heat Shields</option>
                      <option value="Perforated Exhaust Baffles">Perforated Cylindrical Baffles</option>
                    </optgroup>

                    <optgroup label="Precision Machining & Fixtures">
                      <option value="CNC Milling Works">CNC Milling Works (VMC)</option>
                      <option value="Jigs, Fixtures and Gauges">Jigs, Fixtures & Inspection Gauges</option>
                      <option value="CNC Wire EDM Cutting">CNC Wire EDM & Spark Erosion</option>
                    </optgroup>

                    <optgroup label="Development & Prototyping">
                      <option value="Sample Processing and Product Development">Sample Processing & Product Development</option>
                      <option value="General RFQ / Plant Visit">General RFQ / Plant Visit Discussion</option>
                    </optgroup>
                  </select>
                  {errors.productServiceRequired && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.productServiceRequired}
                    </span>
                  )}
                </div>

                {/* Project Details */}
                <div>
                  <label 
                    htmlFor="projectDetails" 
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Project Details & Specifications <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Provide component thickness, sheet material grade, estimated batch volumes, target tonnage, or specific tooling requirements..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-dts-accent ${
                      errors.projectDetails ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                    required
                  />
                  {errors.projectDetails && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.projectDetails}
                    </span>
                  )}
                  <p className="text-[11px] text-slate-400 mt-1">
                    Drawings can also be emailed directly to <strong>dynamic_tooling@yahoo.co.in</strong> referencing this inquiry.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-dts-accent hover:bg-dts-accent-hover disabled:bg-slate-400 text-white font-bold py-3.5 px-6 rounded-lg shadow-md transition-all text-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing & Logging Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Manufacturing Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-1">
                  We respect corporate confidentiality. Your project specifications remain strictly private.
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
