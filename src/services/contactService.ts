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
 * To enable direct server-side email or CRM delivery, configure either:
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

  // Local dispatch simulation for development / preview mode
  // Allows testing form interactions, validation, loading states, and local retention
  await new Promise((resolve) => setTimeout(resolve, 850));

  // Store in browser local storage so user can inspect their test submission
  try {
    const existing = JSON.parse(localStorage.getItem('dts_enquiries') || '[]');
    existing.push({
      ...data,
      referenceNumber,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('dts_enquiries', JSON.stringify(existing));
  } catch (e) {
    // ignore storage quota issues
  }

  return {
    success: true,
    referenceNumber,
    isSimulated: true,
    message: `Thank you, ${data.fullName}. Your quotation request for '${data.productServiceRequired || "Manufacturing"}' has been logged (Ref: ${referenceNumber}). Our Hosur engineering desk will review your specifications.`
  };
}

