/**
 * @file BlueButtonInput.tsx
 * @description A component containing an input field and a blue button
 * @module BlueButtonInput
 */

import React from "react";

/**
 * A component that displays an input field and a blue button.
 * @component
 * @returns {React.JSX.Element} A React component.
 */
export default function BlueButtonInput(): React.JSX.Element {
  return (
    <div className="flex gap-2">
      <div className="bg-white flex px-4 items-center gap-32 rounded-md w-96">
        <input type="text" placeholder="Your Work Email" className="h-full" />
      </div>
      <button className="bg-rz-royalblue py-3 px-6">Get Started</button>
    </div>
  );
}
