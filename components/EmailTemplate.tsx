import * as React from "react";
import { Html } from "@react-email/html";

export function EmailTemplate({ email }: { email: string }) {
  return (
    <Html lang="en">
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to CSR Progarm!
          </h1>
          <p className="text-gray-700 mb-4">
            Thank you for contacting us. We're excited to have you on board!
          </p>
          <div className="flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-blue-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-gray-700">
              You've contacted with email: {email}
            </p>
          </div>
          <p className="text-gray-700">
            Stay tuned for the latest updates, news, and exclusive offers!
          </p>
        </div>
      </div>
    </Html>
  );
}
