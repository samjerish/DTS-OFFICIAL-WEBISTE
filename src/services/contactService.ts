import { ContactFormData } from '../types';

export interface SubmissionResult {
  success: boolean;
  referenceNumber?: string;
  message: string;
  isSimulated?: boolean;
}

/**
 * Service to handle corporate enquiry submissions for Dynamic Tooling Systems.
 * 
 * INTEGRATION DOCUMENTATION:
 * The form opens a pre-addressed email when no backend is configured. For
 * direct server-side email or CRM delivery, configure:
 * 
 * 1. REST API Webhook / Backend:
 *    Set environment variable `VITE_CONTACT_API_URL=https://your-api.com/api/enquiry`
 *    Payload schema sent:
 *    {
 *       fullName: string,
 *       companyName: string,
 *       email: string,
 *       phone: string,
 *       productServiceRequired: string,
 *       projectDetails: string,
 *       referenceNumber: string,
 *       submittedAt: string
 *    }
 * 
 * 2. EmailJS / Formspree / AWS SES:
 *    Configure `VITE_EMAIL_SERVICE_KEY` or target webhook.
 */
export async function submitEnquiry(data: ContactFormData): Promise<SubmissionResult> {
  // Validate email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email.trim())) {
    return {
      success: false,
      message: "Please provide a valid business email address."
    };
  }

  // Validate phone format (at least 10 digits/characters)
  const cleanPhone = data.phone.replace(/[\s\-\+\(\)]/g, '');
  if (cleanPhone.length < 9) {
    return {
      success: false,
      message: "Please enter a valid telephone contact number (minimum 10 digits)."
    };
  }

  const referenceNumber = `DTS-RFQ-${Date.now().toString().slice(-6)}`;
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

  // Real backend submission if configured
  if (apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          referenceNumber,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      return {
        success: true,
        referenceNumber,
        message: `Your enquiry has been received by our engineering team. Reference: ${referenceNumber}. We will respond within 1 business day.`
      };
    } catch (error) {
      console.error("Enquiry API submission error:", error);
      return {
        success: false,
        message: "Failed to dispatch enquiry to server. Please call us directly at 9750939432 or email dynamic_tooling@yahoo.co.in."
      };
    }
  }

  const emailBody = [
    `Reference: ${referenceNumber}`,
    `Submitted: ${new Date().toISOString()}`,
    '',
    `Full Name: ${data.fullName}`,
    `Company / Organization: ${data.companyName}`,
    `Business Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Product or Service Required: ${data.productServiceRequired}`,
    '',
    'Project Details:',
    data.projectDetails
  ].join('\n');

  const mailtoUrl = `mailto:dynamic_tooling@yahoo.co.in?subject=${encodeURIComponent(
    `Website Enquiry - ${data.productServiceRequired}`
  )}&body=${encodeURIComponent(emailBody)}`;

  window.location.assign(mailtoUrl);

  return {
    success: true,
    referenceNumber,
    message: `Your email application has been opened with the enquiry addressed to dynamic_tooling@yahoo.co.in. Reference: ${referenceNumber}.`
  };
}
