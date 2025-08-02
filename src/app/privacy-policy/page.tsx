export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy for WayPel</h1>
      <p className="mb-6"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Camera Permission</h2>
        <p className="mb-4">WayPel requests camera permission to enable the following features:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Taking photos within the app</li>
          <li>Video calling functionality</li>
          <li>Profile picture updates</li>
        </ul>
        <p>We do not access your camera without your explicit permission, and camera data is only used for the intended app functionality.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
        <p>We collect only the data necessary to provide our services. Any photos or videos taken through the app are processed according to your privacy settings.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>If you have questions about this privacy policy, contact us at: support@waypel.com</p>
      </section>
    </div>
  );
}