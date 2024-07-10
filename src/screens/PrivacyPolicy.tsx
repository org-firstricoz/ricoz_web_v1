import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-rz-lategray flex justify-center pt-20 pb-32 text-5xl playfair-display">
        Privacy and Policy
      </div>
      <div className="text-black lg:px-40 md:px-24 sm:px-16 px-4 py-8 flex flex-col gap-8">
        <p className="text-2xl font-medium">Introduction</p>
        <p>
          Welcome to Ricoz. We value your privacy and are committed to
          protecting your personal data. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website or use our services. Please read this policy carefully to
          understand our views and practices regarding your personal data and
          how we will treat it.
        </p>

        <p className="text-2xl font-medium">Information We Collect</p>
        <p className="text-xl font-medium">Personal Data</p>
        <p>&bull; While using our services, we may collect the following types of personal data:</p>
        <p>&bull; Contact Information: Name, email address, phone number, and postal address.</p>
        <p>&bull; Identification Information: Date of birth, social security number, and other identification details.</p>
        <p>&bull; Financial Information: Bank account details, credit card information, and transaction history.</p>
        <p>&bull; Technical Data: IP address, browser type, and version, time zone setting, browser plug-in types and versions, operating system, and platform.</p>
        <p className="text-xl font-medium">Non Personal Data</p>
        <p>&bull; We may also collect non-personal data that does not identify you individually, such as:</p>
        <p>&bull; Aggregated Data: Statistical or demographic data.</p>
        <p>&bull; Behavioral Data: Information on how you use our website and services.</p>
        <p className="text-2xl font-medium">How We Use Your Information</p>
        <p>&bull; We use the information we collect in the following ways:</p>
        <p>&bull; To Provide Services: To deliver the services you request from us.</p>
        <p>&bull; To Improve Services: To understand how our services are being used and to enhance and improve our offerings.</p>
        <p>&bull; To Communicate with You: To send you updates, newsletters, and other information that may be of interest to you.</p>
        <p>&bull; For Marketing: To provide you with personalized advertisements and promotions.</p>
        <p>&bull; For Security: To maintain the safety and security of our website and services.</p>
        <p className="text-2xl font-medium">Sharing Your Information</p>
        <p>&bull; We may share your personal data with third parties in the following situations:</p>
        <p>&bull; With Service Providers: We may share your data with third-party vendors who provide services on our behalf.</p>
        <p>&bull; For Legal Reasons: We may disclose your data if required to do so by law or in response to valid requests by public authorities.</p>
        <p>&bull; Business Transfers: If we are involved in a merger, acquisition, or asset sale, your personal data may be transferred.</p>
        <p className="text-2xl font-medium">Data Security</p>
        <p>We use appropriate technical and organizational measures to protect your personal data from unauthorized access, use, or disclosure. Despite these measures, we cannot guarantee absolute security.</p>
        <p className="text-2xl font-medium">Your Data Protection Rights</p>
        <p>&bull; You have the following rights regarding your personal data:</p>
        <p>&bull; Access: You have the right to request access to your personal data.</p>
        <p>&bull; Correction: You have the right to request the correction of inaccurate or incomplete data.</p>
        <p>&bull; Deletion: You have the right to request the deletion of your personal data.</p>
        <p>&bull; Objection: You have the right to object to the processing of your personal data.</p>
        <p>&bull; Data Portability: You have the right to request the transfer of your data to another service provider.</p>
        <p className="text-2xl font-medium">Cookies</p>
        <p>Our website uses cookies to enhance your browsing experience. You can control the use of cookies through your browser settings.</p>
        <p className="text-2xl font-medium">Changes to This Privacy Policy</p>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
        <p className="text-2xl font-medium">Contact Us</p>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: care@ricoz.in</p>
        <p>Address: Ricoz, FLOOR, P-2,S.NO.150/A/1+2 BHUSARI COLONY KOTHRUD PUNE-411038</p>
        <p>By using our website and services, you consent to our Privacy Policy.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
