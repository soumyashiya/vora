// Payment Capture service — manual bank-transfer flow.
//   POST /api/payment-capture/validate     resolve an email link token -> order + bank details
//   POST /api/payment-capture/apply-promo  apply a promo code before paying
//   POST /api/payment-capture/upload       upload a transfer screenshot for OCR verification
//
// See API_DOCUMENTATION-USER-ORDER.md ("Payment Capture") for the full contract.

import { apiClient } from "@/lib/apiClient";
import type {
  PaymentCaptureValidateResponse,
  PaymentCaptureApplyPromoResponse,
  PaymentCaptureUploadResponse,
} from "@/types/api";

export async function validateCaptureToken(
  token: string
): Promise<PaymentCaptureValidateResponse> {
  return apiClient.post<PaymentCaptureValidateResponse>("/api/payment-capture/validate", {
    token,
  });
}

export async function applyCapturePromo(
  token: string,
  promoCode: string
): Promise<PaymentCaptureApplyPromoResponse> {
  return apiClient.post<PaymentCaptureApplyPromoResponse>(
    "/api/payment-capture/apply-promo",
    { token, promoCode }
  );
}

export async function uploadCaptureScreenshot(
  token: string,
  file: File
): Promise<PaymentCaptureUploadResponse> {
  const form = new FormData();
  form.append("token", token);
  form.append("paymentScreenshot", file);
  return apiClient.post<PaymentCaptureUploadResponse>("/api/payment-capture/upload", form);
}
